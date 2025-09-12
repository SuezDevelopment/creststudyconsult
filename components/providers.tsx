'use client';

import { MobileProvider } from './mobile-provider';
import { ConsentModalProvider } from '@/hooks/use-consent-modal';
import { BookingModalProvider } from '@/hooks/use-booking-modal';
import { GlobalLoaderProvider } from './global-loader';
import { ErrorBoundary } from './error-boundary';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <GlobalLoaderProvider>
        <MobileProvider>
          <ConsentModalProvider>
            <BookingModalProvider>
              {children}
            </BookingModalProvider>
          </ConsentModalProvider>
        </MobileProvider>
      </GlobalLoaderProvider>
    </ErrorBoundary>
  );
}