'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useGlobalLoader } from '@/components/global-loader';
import { useErrorHandler } from '@/components/error-boundary';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function LoaderDemo() {
  const { showLoader, hideLoader, withLoader } = useGlobalLoader();
  const handleError = useErrorHandler();
  const [result, setResult] = useState<string>('');

  const simulateNetworkRequest = async () => {
    // Simulate a network request with random success/failure
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.3) {
          resolve('Network request completed successfully!');
        } else {
          reject(new Error('Network request failed'));
        }
      }, 2000);
    });
  };

  const handleManualLoader = () => {
    showLoader('Processing your request...');
    setTimeout(() => {
      hideLoader();
      setResult('Manual loader demo completed!');
    }, 3000);
  };

  const handleWithLoader = async () => {
    try {
      const response = await withLoader(
        simulateNetworkRequest(),
        'Fetching data from server...'
      );
      setResult(response);
    } catch (error) {
      setResult('Request failed: ' + (error as Error).message);
      handleError(error as Error, 'Network request demonstration');
    }
  };

  const handleErrorDemo = () => {
    // Simulate a client-side error
    throw new Error('This is a demo error to test the error boundary!');
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Global Loader & Error Demo</CardTitle>
        <CardDescription>
          Test the global loading states and error handling
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Button 
            onClick={handleManualLoader}
            className="w-full bg-[#62b514] hover:bg-[#62b514]/90"
          >
            Manual Loader (3s)
          </Button>
          
          <Button 
            onClick={handleWithLoader}
            variant="outline"
            className="w-full"
          >
            Network Request (with loader)
          </Button>
          
          <Button 
            onClick={handleErrorDemo}
            variant="destructive"
            className="w-full"
          >
            Trigger Error Boundary
          </Button>
        </div>
        
        {result && (
          <div className="p-3 bg-gray-100 rounded-md text-sm">
            <strong>Result:</strong> {result}
          </div>
        )}
      </CardContent>
    </Card>
  );
}