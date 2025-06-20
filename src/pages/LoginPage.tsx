import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Custom Components
import AuthHeader from '@/components/layout/AuthHeader';
import AuthFooter from '@/components/layout/AuthFooter';
import AuthFormCard from '@/components/AuthFormCard';
import SocialLoginButtonGroup from '@/components/SocialLoginButtonGroup';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Icons
import { ShieldCheck, AlertTriangle } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  console.log('LoginPage loaded');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    console.log('Login attempt with:', { email, password, rememberMe });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (email === 'user@example.com' && password === 'password123') {
      console.log('Login successful');
      toast.success('Login Successful!', {
        description: 'Redirecting to your dashboard...',
      });
      // In a real app, you'd set auth tokens here
      setTimeout(() => {
        navigate('/dashboard'); // Path from App.tsx
      }, 500); // Short delay for toast visibility
    } else {
      console.log('Login failed');
      setError('Invalid email or password. Please check your credentials and try again.');
      toast.error('Login Failed', {
        description: 'Invalid email or password.',
      });
      setIsLoading(false);
    }
    // setIsLoading(false) is called only on error path above, success path navigates away.
    // If navigation can fail or if we stay on page, set it here.
    // For this example, navigation implies success, so it's okay.
  };

  const handleSocialLogin = (provider: 'google' | 'facebook' | 'github') => {
    console.log(`Attempting social login with ${provider}`);
    setIsLoading(true);
    setError(null);
    // Simulate social login API call
    setTimeout(() => {
      console.log(`Social login with ${provider} placeholder.`);
      toast.info(`Social Login with ${provider}`, {
        description: `This feature (${provider}) is a placeholder and not fully implemented.`,
      });
      // In a real app, this would involve OAuth flow and then navigation, potentially to /dashboard
      // For now, just reset loading state without actual login.
      // if (provider === 'google') { // Example of success path for one provider
      //   toast.success(`Successfully logged in with ${provider}!`);
      //   navigate('/dashboard');
      // } else {
      //   setIsLoading(false);
      // }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <AuthHeader />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <AuthFormCard
          title="Login to SecureApp"
          description="Enter your credentials to access your dashboard."
          headerContent={
            <ShieldCheck className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
          }
          primaryAction={
            <Button type="submit" form="login-form" className="w-full" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          }
          secondaryActions={
            <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full space-y-2 sm:space-y-0 sm:space-x-2">
              <Link to="/registration" className="text-sm hover:text-primary hover:underline"> {/* Path from App.tsx */}
                Don&apos;t have an account? Sign Up
              </Link>
              <Link to="/password-recovery" className="text-sm hover:text-primary hover:underline"> {/* Path from App.tsx */}
                Forgot Password?
              </Link>
            </div>
          }
          className="my-8" // Add some vertical margin for the card itself
        >
          <form id="login-form" onSubmit={handleLogin} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Login Failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-1.5">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                autoComplete="email"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                autoComplete="current-password"
              />
            </div>
            <div className="flex items-center justify-start pt-1"> {/* Changed justify-between to justify-start */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember-me"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(Boolean(checked))}
                  disabled={isLoading}
                />
                <Label htmlFor="remember-me" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                  Remember me
                </Label>
              </div>
            </div>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <SocialLoginButtonGroup onSocialLogin={handleSocialLogin} isLoading={isLoading} />
        </AuthFormCard>
      </main>
      <AuthFooter />
    </div>
  );
};

export default LoginPage;