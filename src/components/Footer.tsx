
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground mb-4 md:mb-0">
            &copy; {year} Arhaan Siddiquee. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
