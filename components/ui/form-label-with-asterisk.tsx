import React from 'react';
import { FormLabel } from '@/components/ui/form';
import { RedAsterisk } from '@/components/red-asteriks';

interface FormLabelWithAsteriskProps extends React.ComponentPropsWithoutRef<typeof FormLabel> {
  required?: boolean;
}

export const FormLabelWithAsterisk = React.forwardRef<
  React.ElementRef<typeof FormLabel>,
  FormLabelWithAsteriskProps
>(({ children, required = true, ...props }, ref) => {
  return (
    <FormLabel ref={ref} {...props}>
      {children}
      {required && <RedAsterisk />}
    </FormLabel>
  );
});

FormLabelWithAsterisk.displayName = 'FormLabelWithAsterisk';