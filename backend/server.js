// Required modules
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Load .env variables
const ContactMailer = require('./contactMailer'); 

const app = express();
const PORT = 3000;

// GitHub config get from env
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = 'Chaitanya-Dev26'; // username forcefuly added 
const GITHUB_API_URL = 'https://api.github.com';

// Check for required GitHub credentials are correct
if (!GITHUB_TOKEN || !GITHUB_USERNAME) {
  console.error("❌ GITHUB_TOKEN or GITHUB_USERNAME is not defined.");
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json()); // Needed to parse JSON body

// Health check route to verify the API is running
app.get('/', (req, res) => {
  res.send('API is running!');
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    await ContactMailer.sendMail(name, email, message);
    res.status(200).json({ success: 'Message sent successfully.' });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

// Helper function to fetch language breakdown for a single repo
async function getLanguagesForRepo(repoOwner, repoName) {
  const url = `${GITHUB_API_URL}/repos/${repoOwner}/${repoName}/languages`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'User-Agent': 'GitHub-Language-Aggregator'
      }
    });
    return response.data; // Return language data
  } catch (error) {
     // Handle API request errors
    console.error(`❌ Error fetching languages for ${repoName}:`, error.message);
    return {}; // Return empty object if request fails
  }
}

// Aggregate languages across all repos
app.get('/api/languages', async (req, res) => {
  try {
    const reposResponse = await axios.get(
      `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          'User-Agent': 'GitHub-Language-Aggregator'
        }
      }
    );

    const repos = reposResponse.data;
    let aggregatedLanguageData = {};

    // Loop through all repos and get language data
    for (let repo of repos) {
      const repoLanguages = await getLanguagesForRepo(GITHUB_USERNAME, repo.name);
      for (let [language, count] of Object.entries(repoLanguages)) {
        aggregatedLanguageData[language] = (aggregatedLanguageData[language] || 0) + count;
      }
    }

    // Calculate total bytes and convert in %
    const totalBytes = Object.values(aggregatedLanguageData).reduce((acc, val) => acc + val, 0);
    const languagePercentages = {};
    for (const [language, count] of Object.entries(aggregatedLanguageData)) {
      languagePercentages[language] = parseFloat(((count / totalBytes) * 100).toFixed(2));
    }

    // Send percentages instead of raw count
    res.json(languagePercentages);

  } catch (error) {
    console.error('❌ Error fetching GitHub data:', error.message);
    res.status(500).json({ error: 'Failed to fetch GitHub language data' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
