"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface BookingModalContextType {
  isOpen: boolean;
  isFullscreen: boolean;
  openModal: (fullscreen?: boolean) => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export const useBookingModal = () => {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error('useBookingModal must be used within a BookingModalProvider');
  }
  return context;
};

export const BookingModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openModal = (fullscreen: boolean = false) => {
    setIsFullscreen(fullscreen);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider value={{ isOpen, isFullscreen, openModal, closeModal }}>
      {children}
    </BookingModalContext.Provider>
  );
};
