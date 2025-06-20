import React from 'react';
import { Button } from "@/components/ui/button";
import { ChromeIcon, FacebookIcon, GithubIcon } from 'lucide-react';

interface SocialLoginButtonGroupProps {
  onSocialLogin?: (provider: 'google' | 'facebook' | 'github') => void;
  isLoading?: boolean; // Optional prop to disable buttons during a loading state
}

const SocialLoginButtonGroup: React.FC<SocialLoginButtonGroupProps> = ({ onSocialLogin, isLoading = false }) => {
  console.log('SocialLoginButtonGroup loaded');

  const handleLogin = (provider: 'google' | 'facebook' | 'github') => {
    if (onSocialLogin) {
      onSocialLogin(provider);
    } else {
      console.log(`Login with ${provider} clicked. No handler provided.`);
    }
  };

  return (
    <div className="flex flex-col space-y-3 w-full">
      <Button
        variant="outline"
        className="w-full justify-center py-3 text-sm font-medium transition-colors hover:bg-red-50/20 dark:hover:bg-red-900/20"
        onClick={() => handleLogin('google')}
        disabled={isLoading}
      >
        <ChromeIcon className="mr-2 h-5 w-5 text-red-600 dark:text-red-500" />
        Continue with Google
      </Button>

      <Button
        variant="outline"
        className="w-full justify-center py-3 text-sm font-medium transition-colors hover:bg-blue-50/20 dark:hover:bg-blue-900/20"
        onClick={() => handleLogin('facebook')}
        disabled={isLoading}
      >
        <FacebookIcon className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-500" />
        Continue with Facebook
      </Button>

      <Button
        variant="outline"
        className="w-full justify-center py-3 text-sm font-medium transition-colors hover:bg-gray-200/40 dark:hover:bg-gray-700/40"
        onClick={() => handleLogin('github')}
        disabled={isLoading}
      >
        <GithubIcon className="mr-2 h-5 w-5 text-gray-800 dark:text-gray-300" />
        Continue with GitHub
      </Button>
    </div>
  );
};

export default SocialLoginButtonGroup;