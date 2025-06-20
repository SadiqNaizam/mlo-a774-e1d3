import React from 'react';
import { Link } from 'react-router-dom';

const AuthFooter: React.FC = () => {
  console.log('AuthFooter loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
      <div className="container mx-auto max-w-5xl text-center text-sm text-muted-foreground">
        <p className="mb-2">
          &copy; {currentYear} SecureApp. All rights reserved.
        </p>
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default AuthFooter;