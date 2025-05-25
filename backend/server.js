const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Load .env variables
const ContactMailer = require('./contactMailer'); // 👈 Import the contact mailer

const app = express();
const PORT = 3000;

// Get from .env
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = 'Chaitanya-Dev26'; // <-- Hardcoded username
const GITHUB_API_URL = 'https://api.github.com';

if (!GITHUB_TOKEN || !GITHUB_USERNAME) {
  console.error("❌ GITHUB_TOKEN or GITHUB_USERNAME is not defined.");
  process.exit(1);
}

app.use(cors());
app.use(express.json()); // 👈 Needed to parse JSON body

// Health check route
app.get('/', (req, res) => {
  res.send('API is running!');
});

// 📩 Contact form route
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

// Fetch languages for one repo
async function getLanguagesForRepo(repoOwner, repoName) {
  const url = `${GITHUB_API_URL}/repos/${repoOwner}/${repoName}/languages`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'User-Agent': 'GitHub-Language-Aggregator'
      }
    });
    return response.data;
  } catch (error) {
    console.error(`❌ Error fetching languages for ${repoName}:`, error.message);
    return {};
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

    for (let repo of repos) {
      const repoLanguages = await getLanguagesForRepo(GITHUB_USERNAME, repo.name);
      for (let [language, count] of Object.entries(repoLanguages)) {
        aggregatedLanguageData[language] = (aggregatedLanguageData[language] || 0) + count;
      }
    }

    // Calculate total bytes and percentages
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

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
