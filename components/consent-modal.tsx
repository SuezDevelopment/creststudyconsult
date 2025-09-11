'use client';

import { useState, useEffect } from 'react';
import { useConsent, ConsentState } from '@/hooks/use-consent';
import { useConsentModal } from '@/hooks/use-consent-modal';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function ConsentModal() {
  const { consent, setConsent } = useConsent();
  const { isOpen, closeModal } = useConsentModal();
  const [localConsent, setLocalConsent] = useState<ConsentState>(consent);

  useEffect(() => {
    setLocalConsent(consent);
  }, [consent]);

  const handleSave = () => {
    setConsent(localConsent);
    closeModal();
  };

  const handleToggle = (category: keyof Omit<ConsentState, 'essential'>) => {
    setLocalConsent(prev => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Manage Cookie Preferences</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <Label htmlFor="essential" className="font-semibold">Essential Cookies</Label>
            <Switch id="essential" checked disabled />
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <Label htmlFor="analytics" className="font-semibold">Analytics Cookies</Label>
            <Switch id="analytics" checked={localConsent.analytics} onCheckedChange={() => handleToggle('analytics')} />
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <Label htmlFor="functional" className="font-semibold">Functional Cookies</Label>
            <Switch id="functional" checked={localConsent.functional} onCheckedChange={() => handleToggle('functional')} />
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <Label htmlFor="marketing" className="font-semibold">Marketing Cookies</Label>
            <Switch id="marketing" checked={localConsent.marketing} onCheckedChange={() => handleToggle('marketing')} />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave} className="bg-[#62b514] text-white hover:bg-[#529b11]">Save Preferences</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}