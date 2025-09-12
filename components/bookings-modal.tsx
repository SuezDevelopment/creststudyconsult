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
import { RedAsterisk } from "@/components/red-asteriks";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";
import { X, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name must be less than 50 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        "First name can only contain letters, spaces, hyphens, and apostrophes",
    }),
  lastName: z
    .string()
    .min(1, { message: "Last name is required" })
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(50, { message: "Last name must be less than 50 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        "Last name can only contain letters, spaces, hyphens, and apostrophes",
    }),
  email: z
    .string()
    .min(1, { message: "Email address is required" })
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email address must be less than 100 characters" }),
  countryCode: z.string().min(1, { message: "Country code is required" }),
  mobileNumber: z
    .string()
    .min(1, { message: "Mobile number is required" })
    .min(7, { message: "Mobile number must be at least 7 digits" })
    .max(15, { message: "Mobile number must be less than 15 digits" })
    .regex(/^[0-9]+$/, { message: "Mobile number can only contain digits" }),
  studyDestination: z
    .string()
    .min(1, { message: "Please select your preferred study destination" }),
  startDate: z
    .string()
    .min(1, { message: "Please select when you would like to start studying" }),
  nearestOffice: z
    .string()
    .min(1, {
      message: "Please select your nearest Crest Study Consult office",
    }),
  counsellingMode: z
    .string()
    .min(1, { message: "Please select your preferred counselling mode" }),
  funding: z
    .string()
    .min(1, { message: "Please select how you plan to fund your education" }),
  studyLevel: z
    .string()
    .min(1, { message: "Please select your preferred study level" }),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms of Use and Privacy Policy to proceed",
  }),
  contactPermission: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted by our team to proceed",
  }),
  updates: z.boolean().optional(),
});

export const BookingModal = () => {
  const { isOpen, closeModal, isFullscreen } = useBookingModal();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+234",
      mobileNumber: "",
      studyDestination: "",
      startDate: "",
      nearestOffice: "",
      counsellingMode: "",
      funding: "",
      studyLevel: "",
      terms: false,
      contactPermission: false,
      updates: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    toast({
      title: "Submitting...",
      description: "Please wait while we process your enquiry.",
    });

    try {
      const validatedData = formSchema.parse(values);

      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.1) {
            reject(new Error("Network error"));
          } else {
            resolve(true);
          }
        }, 2000);
      });

      toast({
        title: "✅ Enquiry Submitted Successfully!",
        description: `Thank you ${validatedData.firstName}! We've received your enquiry and will contact you within 24 hours at ${validatedData.email}.`,
        variant: "default",
      });

      form.reset();
      closeModal();
    } catch (error) {
      console.error("Form submission error:", error);

      if (error instanceof z.ZodError) {
        toast({
          title: "❌ Validation Error",
          description: "Please check all required fields and try again.",
          variant: "destructive",
        });
      } else if (error instanceof Error && error.message === "Network error") {
        toast({
          title: "🌐 Network Error",
          description: "Please check your internet connection and try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "❌ Submission Failed",
          description:
            "Something went wrong while submitting your enquiry. Please try again or contact support.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const onInvalid = (errors: any) => {
    const errorCount = Object.keys(errors).length;
    const firstError = Object.values(errors)[0] as any;

    toast({
      title: `❌ ${errorCount} Validation Error${errorCount > 1 ? "s" : ""}`,
      description:
        firstError?.message || "Please fill in all required fields correctly.",
      variant: "destructive",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent
        className={`bg-gradient-to-br from-green-50 via-yellow-50 to-emerald-100 ${
          isFullscreen
            ? "w-screen h-screen"
            : "w-full max-w-4xl max-h-[90vh] rounded-2xl"
        } p-0 flex flex-col items-center justify-around`}
      >
        {/* Header */}
        <header className="sticky top-8 md:top-0 z-50 w-full py-3 flex items-center justify-around border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/crest-logo.png"
                alt="Crest Study Consult"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#62b514]">CREST</span>
                <span className="text-xs md:text-sm font-semibold text-[#313b3d]">
                  STUDY CONSULT
                </span>
              </div>
            </Link>
          </motion.div>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeModal}
            className="h-8 w-8 rounded-full bg-[#DAA520]/80 hover:bg-white shadow-sm"
          >
            <X className="h-6 w-6" />
          </Button>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className={isFullscreen ? "h-full" : "max-h-[80vh]"}>
            <div className="flex flex-col md:flex-row min-h-full">
              <div className="flex-1 md:w-[70%] p-6 md:p-8 flex flex-col justify-center">
                <DialogHeader className="space-y-3 mb-6">
                  <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                    We can help you
                  </DialogTitle>
                  <DialogDescription className="text-gray-600 text-base leading-relaxed">
                    Enter your details and get a free counselling session with
                    our experts so they can connect you to the right course,
                    country, university and more.
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit, onInvalid)}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-gray-700">
                              First name
                              <RedAsterisk />
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder=""
                                {...field}
                                className="h-11"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-gray-700">
                              Last name
                              <RedAsterisk />
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder=""
                                {...field}
                                className="h-11"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Email address
                            <RedAsterisk />
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} className="h-11" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-4 gap-2">
                      <FormField
                        control={form.control}
                        name="countryCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-gray-700">
                              Mobile number
                              <RedAsterisk />
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-11">
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="+234">+234</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="col-span-3">
                        <FormField
                          control={form.control}
                          name="mobileNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-gray-700 invisible">
                                Mobile
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder=""
                                  {...field}
                                  className="h-11"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <FormField
                      control={form.control}
                      name="studyDestination"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Your preferred study destination
                            <RedAsterisk />
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-11">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="australia">
                                Australia
                              </SelectItem>
                              <SelectItem value="canada">Canada</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="usa">United States</SelectItem>
                              <SelectItem value="newzealand">
                                New Zealand
                              </SelectItem>
                              <SelectItem value="ireland">Ireland</SelectItem>
                              <SelectItem value="germany">Germany</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            When would you like to start studying?
                            <RedAsterisk />
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-11">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="2024">2024</SelectItem>
                              <SelectItem value="2025">2025</SelectItem>
                              <SelectItem value="2026">2026</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nearestOffice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Nearest Crest Study Consult Office
                            <RedAsterisk />
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-11">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="lagos">Lagos</SelectItem>
                              <SelectItem value="abuja">Abuja</SelectItem>
                              <SelectItem value="ibadan">Ibadan</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="counsellingMode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Preferred mode of counselling
                            <RedAsterisk />
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-11">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="in-person">
                                In Person
                              </SelectItem>
                              <SelectItem value="virtual">Virtual</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="funding"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            How would you like to fund your education?
                            <RedAsterisk />
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-11">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="self-funded">
                                Self Funded
                              </SelectItem>
                              <SelectItem value="scholarship">
                                Scholarship
                              </SelectItem>
                              <SelectItem value="loan">
                                Education Loan
                              </SelectItem>
                              <SelectItem value="sponsor">Sponsor</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="studyLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Preferred study level
                            <RedAsterisk />
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-11">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="undergraduate">
                                Undergraduate
                              </SelectItem>
                              <SelectItem value="postgraduate">
                                Postgraduate
                              </SelectItem>
                              <SelectItem value="phd">PhD</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="space-y-3 pt-2">
                      <FormField
                        control={form.control}
                        name="terms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm text-gray-600">
                                Please contact me by phone, email or SMS to
                                assist with my enquiry
                                <RedAsterisk />
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="contactPermission"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm text-gray-600">
                                I would like to receive updates and offers from
                                Crest Study Consult
                                <RedAsterisk />
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="text-xs text-gray-500 leading-relaxed">
                      By clicking 'Enquire now', I acknowledge that I have read
                      the{" "}
                      <Link
                        href="/terms-of-use"
                        className="text-blue-600 hover:underline"
                      >
                        Terms of Use
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-blue-600 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </div>
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Enquire now"
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
              <div
                className={`flex-1 md:w-[40%] max-h-[80vh] hidden ${
                  isFullscreen
                    ? "md:flex relative bg-gray-50"
                    : "md:flex relative"
                } items-center justify-center mx-auto`}
              >
                <Image
                  src="/contact.png"
                  alt="Contact"
                  fill
                  style={{ objectFit: "cover" }}
                  className={isFullscreen ? "" : "rounded-lg"}
                />
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};