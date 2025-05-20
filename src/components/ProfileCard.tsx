
import React from 'react';
import { GraduationCap, Globe, Languages, Briefcase, Rocket, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

// Placeholder for profile image 
const profileImageUrl = '/placeholder.svg';

const ProfileCard = () => {
  return (
    <Card className="max-w-4xl mx-auto p-8 bg-card border-border/30 shadow-lg">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-28 h-28 md:w-32 md:h-32 overflow-hidden bg-secondary rounded-lg">
            <Avatar className="w-full h-full">
              <AvatarImage 
                src={profileImageUrl} 
                alt="Arhaan Siddiquee" 
                className="w-full h-full object-cover grayscale"
              />
              <AvatarFallback className="bg-secondary text-xl">AS</AvatarFallback>
            </Avatar>
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="flex-1">
          {/* Available status */}
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-available opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-available"></span>
            </span>
            <span className="text-sm font-medium uppercase tracking-wider text-available">Available for hire</span>
          </div>
          
          {/* Name */}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            CHAITANYA SHIRSAT
          </h1>
          
          {/* Tags in grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8">
            {/* Row 1 */}
            <div className="tag flex items-center space-x-2">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <span className="text-base">India</span>
            </div>
            
            <div className="tag flex items-center space-x-2">
              <Languages className="h-5 w-5 text-muted-foreground" />
              <span className="text-base">English & Hindi</span>
            </div>
            
            <div className="tag flex items-center space-x-2">
              <Briefcase className="h-5 w-5 text-muted-foreground" />
              <span className="text-base">Software Engineer</span>
            </div>
            
            {/* Row 2 */}
            <div className="tag flex items-center space-x-2">
              <Rocket className="h-5 w-5 text-muted-foreground" />
              <span className="text-base">Intern</span>
            </div>
            
            <div className="tag flex items-center space-x-2">
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
              <span className="text-base">SRM University</span>
            </div>
            
            <div className="tag flex items-center space-x-2">
              <Star className="h-5 w-5 text-muted-foreground" />
              <span className="text-base">Good Boy</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
