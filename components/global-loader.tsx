'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Loader2 } from 'lucide-react';

interface LoaderContextType {
  isLoading: boolean;
  loadingMessage: string;
  showLoader: (message?: string) => void;
  hideLoader: () => void;
  withLoader: <T>(promise: Promise<T>, message?: string) => Promise<T>;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export function GlobalLoaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Loading...');

  const showLoader = useCallback((message = 'Loading...') => {
    setLoadingMessage(message);
    setIsLoading(true);
  }, []);

  const hideLoader = useCallback(() => {
    setIsLoading(false);
    setLoadingMessage('Loading...');
  }, []);

  const withLoader = useCallback(async <T,>(promise: Promise<T>, message = 'Processing...') => {
    showLoader(message);
    try {
      const result = await promise;
      return result;
    } finally {
      hideLoader();
    }
  }, [showLoader, hideLoader]);

  const value = {
    isLoading,
    loadingMessage,
    showLoader,
    hideLoader,
    withLoader,
  };

  return (
    <LoaderContext.Provider value={value}>
      {children}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 shadow-xl flex flex-col items-center space-y-4 min-w-[200px]">
            <Loader2 className="h-8 w-8 animate-spin text-[#62b514]" />
            <p className="text-gray-700 font-medium">{loadingMessage}</p>
          </div>
        </div>
      )}
    </LoaderContext.Provider>
  );
}

export function useGlobalLoader() {
  const context = useContext(LoaderContext);
  if (context === undefined) {
    throw new Error('useGlobalLoader must be used within a GlobalLoaderProvider');
  }
  return context;
}