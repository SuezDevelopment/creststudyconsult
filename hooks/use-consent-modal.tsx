'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ConsentModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ConsentModalContext = createContext<ConsentModalContextType | undefined>(undefined);

export const useConsentModal = () => {
  const context = useContext(ConsentModalContext);
  if (!context) {
    throw new Error('useConsentModal must be used within a ConsentModalProvider');
  }
  return context;
};

export const ConsentModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ConsentModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ConsentModalContext.Provider>
  );
};
