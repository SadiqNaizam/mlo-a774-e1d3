import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import AuthHeader from '@/components/layout/AuthHeader';
import AuthFooter from '@/components/layout/AuthFooter';
import AuthFormCard from '@/components/AuthFormCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { MailIcon, MailCheck, AlertCircle } from 'lucide-react'; // Using AlertCircle for explicit error icon if needed, MailIcon for card header

interface MessageState {
  type: 'success' | 'error';
  title: string;
  text: string;
}

const PasswordRecoveryPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<MessageState | null>(null);

  console.log('PasswordRecoveryPage loaded');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Example: Simulate success, in a real app, you'd check if email exists etc.
    // For this example, we'll always "succeed" unless email is "error@example.com"
    if (email === 'error@example.com') {
        setMessage({
            type: 'error',
            title: 'Request Failed',
            text: 'Could not process password reset request. Please try again later.',
        });
    } else {
        setMessage({
            type: 'success',
            title: 'Check Your Email',
            text: `If an account with ${email} exists, we've sent instructions to reset your password.`,
        });
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AuthHeader />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <AuthFormCard
          title="Forgot Password?"
          description="Enter your email address below. If an account exists, we'll send you a link to reset your password."
          headerContent={<MailIcon className="h-12 w-12 text-primary" />}
          primaryAction={
            <Button 
              type="submit" 
              form="password-recovery-form" 
              className="w-full" 
              disabled={isLoading || (message?.type === 'success')}
            >
              {isLoading ? 'Sending Link...' : 'Send Reset Link'}
            </Button>
          }
          secondaryActions={
            <p className="text-sm">
              Remembered your password?{' '}
              <Link to="/" className="font-medium text-primary hover:underline">
                Login
              </Link>
            </p>
          }
          className="w-full max-w-md"
        >
          <form onSubmit={handleSubmit} id="password-recovery-form" className="space-y-6">
            {message && (
              <Alert variant={message.type === 'error' ? 'destructive' : 'default'}>
                {message.type === 'success' && <MailCheck className="h-4 w-4" />}
                {/* Destructive variant has a built-in icon, but if we wanted to override or ensure one: */}
                {/* {message.type === 'error' && <AlertCircle className="h-4 w-4" />} */}
                <AlertTitle>{message.title}</AlertTitle>
                <AlertDescription>{message.text}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading || (message?.type === 'success')}
              />
            </div>
          </form>
        </AuthFormCard>
      </main>
      <AuthFooter />
    </div>
  );
};

export default PasswordRecoveryPage;