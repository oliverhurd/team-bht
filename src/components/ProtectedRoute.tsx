import React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();

  if (!isLoaded) return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-text-secondary font-mono text-sm">Loading...</div>
    </div>
  );

  if (!isSignedIn) return <Navigate to="/login" state={{ from: location }} replace />;

  return <>{children}</>;
}
