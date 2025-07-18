import { Suspense, ComponentType, lazy } from 'react';

interface LazyRouteWrapperProps {
  children: React.ReactNode;
}

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

export const LazyRouteWrapper = ({ children }: LazyRouteWrapperProps) => (
  <Suspense fallback={<LoadingFallback />}>
    {children}
  </Suspense>
);

// Helper function to create lazy routes with automatic error boundaries
export const createLazyRoute = (
  importFunction: () => Promise<{ default: ComponentType<any> }>
) => {
  const LazyComponent = lazy(importFunction);
  
  return (props: any) => (
    <LazyRouteWrapper>
      <LazyComponent {...props} />
    </LazyRouteWrapper>
  );
};

export default LazyRouteWrapper;