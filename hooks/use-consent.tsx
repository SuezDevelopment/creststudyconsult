'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ConsentState {
  essential: true;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

interface ConsentContextType {
  consent: ConsentState;
  setConsent: (newConsent: ConsentState) => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

const defaultConsent: ConsentState = {
  essential: true,
  analytics: false,
  functional: false,
  marketing: false,
};

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<ConsentState>(defaultConsent);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookie-consent-preferences');
    if (storedConsent) {
      setConsentState(JSON.parse(storedConsent));
    }
  }, []);

  const setConsent = (newConsent: ConsentState) => {
    localStorage.setItem('cookie-consent-preferences', JSON.stringify(newConsent));
    setConsentState(newConsent);
  };

  return (
    <ConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
}
