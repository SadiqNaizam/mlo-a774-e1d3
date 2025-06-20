import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react'; // Using a generic icon for logo

const AuthHeader: React.FC = () => {
  console.log('AuthHeader loaded');

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-start max-w-5xl">
        <Link to="/" className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-foreground hover:text-primary transition-colors">
          <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
          <span>SecureApp</span> {/* Placeholder application name */}
        </Link>
      </div>
    </header>
  );
};

export default AuthHeader;