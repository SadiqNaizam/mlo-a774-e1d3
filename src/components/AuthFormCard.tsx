import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthFormCardProps {
  title: string;
  description?: string;
  headerContent?: React.ReactNode; // For logo or other custom header elements
  children: React.ReactNode; // For form fields
  primaryAction?: React.ReactNode; // For the main submit button
  secondaryActions?: React.ReactNode; // For links like "Forgot password?", "Sign up"
  className?: string; // Allow additional classes for the Card
}

const AuthFormCard: React.FC<AuthFormCardProps> = ({
  title,
  description,
  headerContent,
  children,
  primaryAction,
  secondaryActions,
  className
}) => {
  console.log('AuthFormCard loaded for title:', title);

  return (
    <Card className={`w-full max-w-md mx-auto ${className || ''}`}>
      <CardHeader className="space-y-2 text-center">
        {headerContent && <div className="mb-4 flex justify-center">{headerContent}</div>}
        <CardTitle className="text-2xl md:text-3xl font-bold">{title}</CardTitle>
        {description && <CardDescription className="text-sm md:text-base">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
      </CardContent>
      {(primaryAction || secondaryActions) && (
        <CardFooter className="flex flex-col pt-6">
          {primaryAction && <div className="w-full">{primaryAction}</div>}
          {secondaryActions && (
            <div className="mt-4 text-center text-sm text-muted-foreground w-full">
              {secondaryActions}
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default AuthFormCard;