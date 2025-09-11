"use client";
import { useBookingModal } from "@/hooks/use-booking-modal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";

export const BookingModal = ({ fullscreen }: { fullscreen?: boolean }) => {
  const { isOpen, closeModal } = useBookingModal();

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent
        className={`w-full max-w-4xl ${
          fullscreen ? "h-full" : "max-h-[90vh]"
        } `}
      >
        <ScrollArea className="h-full">
          <div className="grid md:grid-cols-2 gap-8 p-4">
            <div>
              <DialogHeader>
                <DialogTitle>Book a Free Counselling Session</DialogTitle>
                <DialogDescription>
                  Enter your details and get a free counselling session with our
                  experts so they can connect you to the right course, country,
                  university – and even scholarships!
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First name*</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last name*</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email address*</Label>
                  <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <Select>
                    <SelectTrigger className="w-auto">
                      <SelectValue placeholder="DIAL_CODE" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+234">+234</SelectItem>
                      <SelectItem value="+1">+1</SelectItem>
                      <SelectItem value="+44">+44</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="grid gap-2">
                    <Label htmlFor="mobile-number" className="sr-only">
                      Mobile number
                    </Label>
                    <Input id="mobile-number" placeholder="Mobile number*" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="study-destination">
                    Your preferred study destination*
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="germany">Germany</SelectItem>
                      <SelectItem value="ireland">Ireland</SelectItem>
                      <SelectItem value="new_zealand">New Zealand</SelectItem>
                      <SelectItem value="uk">UK</SelectItem>
                      <SelectItem value="usa">USA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="start-date">
                    When would you like to start studying?*
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                      <SelectItem value="2027">2027</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="office">Nearest Office*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="office1">Office 1</SelectItem>
                      <SelectItem value="office2">Office 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="counselling-mode">
                    Preferred mode of counselling*
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="online">Online</SelectItem>
                      <SelectItem value="in-person">In-person</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="funding">
                    How would you fund your education?*
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="self-funded">Self-funded</SelectItem>
                      <SelectItem value="scholarship">Scholarship</SelectItem>
                      <SelectItem value="loan">Loan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="study-level">Preferred study level*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="undergraduate">
                        Undergraduate
                      </SelectItem>
                      <SelectItem value="postgraduate">Postgraduate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to Crest Study Consult{" "}
                    <a href="/terms-of-use" className="underline">
                       Terms of Use
                    </a>{" "}
                    and{" "}
                    <a href="/privacy-policy" className="underline">
                      Privacy policy
                    </a>{" "}
                    *
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="contact-permission" />
                  <Label htmlFor="contact-permission" className="text-sm">
                    Please contact me by phone, email or SMS to assist with my
                    enquiry*
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="updates" />
                  <Label htmlFor="updates" className="text-sm">
                    I would like to receive updates and offers from IDP
                  </Label>
                </div>
              </div>
              <div className="flex justify-end">
                <Button type="submit">Enquire now</Button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <Image
                src="/contact.png"
                alt="Contact"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
