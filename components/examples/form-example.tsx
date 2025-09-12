import React from 'react';
import { Input } from '@/components/ui/input';
import { LabelWithAsterisk } from '@/components/ui/label-with-asterisk';
import { FormLabelWithAsterisk } from '@/components/ui/form-label-with-asterisk';
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

export const SimpleExample = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <LabelWithAsterisk htmlFor="name">Name</LabelWithAsterisk>
        <Input id="name" placeholder="Enter your name" />
      </div>
      
      <div className="space-y-2">
        <LabelWithAsterisk htmlFor="email" required={true}>Email</LabelWithAsterisk>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      
      <div className="space-y-2">
        <LabelWithAsterisk htmlFor="phone" required={false}>Phone (optional)</LabelWithAsterisk>
        <Input id="phone" placeholder="Enter your phone number" />
      </div>
    </div>
  );
};

export const FormExample = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  });
  
  const onSubmit = (data: any) => {
    console.log(data);
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabelWithAsterisk>Name</FormLabelWithAsterisk>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabelWithAsterisk required={true}>Email</FormLabelWithAsterisk>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabelWithAsterisk required={false}>Phone (optional)</FormLabelWithAsterisk>
              <FormControl>
                <Input placeholder="Enter your phone number" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};