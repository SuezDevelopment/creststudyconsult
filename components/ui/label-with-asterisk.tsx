import React from 'react';
import { Label } from '@/components/ui/label';
import { RedAsterisk } from '@/components/red-asteriks';

interface LabelWithAsteriskProps extends React.ComponentPropsWithoutRef<typeof Label> {
  required?: boolean;
}

export const LabelWithAsterisk = React.forwardRef<
  React.ElementRef<typeof Label>,
  LabelWithAsteriskProps
>(({ children, required = true, ...props }, ref) => {
  return (
    <Label ref={ref} {...props}>
      {children}
      {required && <RedAsterisk />}
    </Label>
  );
});

LabelWithAsterisk.displayName = 'LabelWithAsterisk';