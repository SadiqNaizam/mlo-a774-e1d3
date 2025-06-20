import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthHeader from '@/components/layout/AuthHeader'; // Custom component
import AuthFooter from '@/components/layout/AuthFooter'; // Custom component
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // shadcn/ui
import { Button } from '@/components/ui/button'; // shadcn/ui
import { LogOut, Home } from 'lucide-react'; // Icons

const DashboardPage: React.FC = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real application, you would clear authentication tokens, user state, etc.
    console.log('User attempting to logout...');
    // Navigate to the LoginPage, which is at the root path "/" according to App.tsx
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800">
      <AuthHeader />
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <Card className="w-full max-w-md text-center shadow-xl rounded-lg animate-fadeIn">
          <CardHeader className="pt-8 pb-4">
            <div className="flex justify-center mb-4">
              <Home className="h-16 w-16 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Welcome to Your Dashboard!
            </CardTitle>
            <CardDescription className="text-md text-gray-600 dark:text-gray-400 pt-2">
              You have successfully logged in. This is your main application hub.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 px-6 pb-8">
            <p className="text-gray-700 dark:text-gray-300">
              This page confirms your successful authentication and serves as your central point for accessing application features.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              (Currently, this is a placeholder. More features will be available here.)
            </p>
            <Button 
              onClick={handleLogout} 
              className="w-full bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white font-semibold py-3 transition-all duration-150 ease-in-out transform hover:scale-105"
              variant="destructive"
            >
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </Button>
            {/* Example of a link back to a safe "home" or a settings page if routes existed */}
            {/* <Button asChild variant="outline" className="mt-3 w-full">
              <Link to="/app-settings">
                <Settings className="mr-2 h-5 w-5" />
                App Settings
              </Link>
            </Button> */}
          </CardContent>
        </Card>
      </main>
      <AuthFooter />
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DashboardPage;