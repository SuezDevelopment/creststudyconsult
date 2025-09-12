import React from 'react';

interface RedAsteriskProps {
  className?: string;
}

export const RedAsterisk: React.FC<RedAsteriskProps> = ({ className = '' }) => {
  return (
    <span className={`text-red-500 ${className}`} aria-hidden="true">
      *
    </span>
  );
};