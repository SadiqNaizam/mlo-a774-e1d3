import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthHeader from '@/components/layout/AuthHeader';
import AuthFooter from '@/components/layout/AuthFooter';
import AuthFormCard from '@/components/AuthFormCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

const RegistrationPage: React.FC = () => {
  console.log('RegistrationPage loaded');
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        setIsLoading(false);
        return;
    }

    // Placeholder for actual registration logic
    console.log('Attempting registration with:', { email, password });
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success/failure
    const isSuccess = Math.random() > 0.3; // Simulate 70% success rate
    if (isSuccess) {
      console.log('Registration successful for:', email);
      // In a real app, you might redirect to login or dashboard with a success message
      // For now, let's redirect to login page with a hypothetical success query param (not handled by login page)
      navigate('/?registered=true'); 
    } else {
      setError("Registration failed. Please try again later or use a different email.");
      console.error('Registration failed for:', email);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <AuthHeader />
      <main className="flex-grow container mx-auto px-4 py-12 sm:py-16 md:py-20 flex items-center justify-center">
        <AuthFormCard
          title="Create an Account"
          description="Join us by filling out the form below."
          primaryAction={
            <Button type="submit" form="registrationForm" className="w-full" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          }
          secondaryActions={
            <>
              Already have an account?{' '}
              <Link to="/" className="font-medium text-primary hover:underline">
                Sign In
              </Link>
            </>
          }
          className="w-full max-w-md"
        >
          <form id="registrationForm" onSubmit={handleRegister} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Registration Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="bg-input border-border placeholder:text-muted-foreground/70"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                disabled={isLoading}
                className="bg-input border-border placeholder:text-muted-foreground/70"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                disabled={isLoading}
                className="bg-input border-border placeholder:text-muted-foreground/70"
              />
            </div>
          </form>
        </AuthFormCard>
      </main>
      <AuthFooter />
    </div>
  );
};

export default RegistrationPage;