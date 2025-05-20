import React, { useState } from 'react';
import { GraduationCap, Globe, Languages, Briefcase, Rocket, Star } from 'lucide-react';
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

// Placeholder for profile image 
const profileImageUrl: string = '/placeholder.svg';

const ProfileCard: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverItem, setHoverItem] = useState<string | null>(null);

  return (
    <Card className="max-w-6xl mx-auto p-8 min-h-[675px] bg-gradient-to-r from-black-200 to-gray-100 border border-border/30 shadow-lg">
      <>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28 overflow-hidden bg-secondary rounded-lg relative ml-[-8px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-black to-gray-900 rounded-lg blur opacity-30"></div>
              <Avatar className="relative w-full h-full">
                <AvatarImage 
                  src={profileImageUrl} 
                  alt="Chaitanya Shirsat" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <AvatarFallback className="bg-secondary text-xl">CS</AvatarFallback>
              </Avatar>
            </div>
          </div>
  
          {/* Profile Info */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Available status */}
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-available opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-available"></span>
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-available">Available for hire</span>
            </div>
  
            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-14">
              CHAITANYA SHIRSAT
            </h1>
  
            {/* Tags */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8">
              {/* Grid Items */}
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <span className="text-base">India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Languages className="h-5 w-5 text-muted-foreground" />
                <span className="text-base">English & Hindi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-muted-foreground" />
                <span className="text-base">Software Engineer</span>
              </div>
              <div className="flex items-center space-x-2">
                <Rocket className="h-5 w-5 text-muted-foreground" />
                <span className="text-base">Intern</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-muted-foreground" />
                <span className="text-base">SRM University</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-muted-foreground" />
                <span className="text-base">Good Boy</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* About Me and Connect Sections */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Me */}
          <section>
            <h2 className="text-white text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">ABOUT ME</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a passionate designer and developer with 6+ years of experience creating beautiful, functional interfaces. I specialize in React.js, Tailwind CSS, and responsive design principles that deliver exceptional user experiences.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, watching anime, and experimenting with creative side projects. I believe in continuous learning and staying ahead of design trends to deliver innovative solutions to my clients.
            </p>
          </section>
  
          {/* Connect */}
          <section>
            <h2 className="text-white text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">CONNECT</h2>
            <div className="space-y-4">
              {[
                { platform: "Twitter", username: "@ChaitanyaShirsat", icon: <FiTwitter />, link: "https://twitter.com/ChaitanyaShirsat" },
                { platform: "LinkedIn", username: "@chaitanyashirsat", icon: <FiLinkedin />, link: "https://linkedin.com/in/chaitanyashirsat" },
                { platform: "Github", username: "@chaitanyashirsat", icon: <FiGithub />, link: "https://github.com/chaitanyashirsat" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center bg-black bg-opacity-40 p-4 rounded-lg hover:bg-opacity-60 transition-all duration-300 border border-white border-opacity-0 hover:border-opacity-5"
                  onMouseEnter={() => { setIsHovering(true); setHoverItem(social.platform) }}
                  onMouseLeave={() => { setIsHovering(false); setHoverItem(null) }}
                >
                  <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{social.platform}</div>
                    <div className="font-semibold">{social.username}</div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </>
    </Card>
  );  
};

export default ProfileCard;