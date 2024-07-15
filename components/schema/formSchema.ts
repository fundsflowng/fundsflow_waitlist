import * as z from "zod";

export const formSchema = z.object({
  name: z.string({ message: "Please enter your name" }).min(4),
  email: z
    .string({ message: "Please enter your email address" })
    .email({ message: "Enter a valid email address" }),
  phone: z
    .string({ message: "Enter your phone number" })
    .min(11, "Phone number is incomplete")
    .max(16),
  businessType: z.string({ message: "Enter your business type" }).min(4),
  reason: z
    .string()
    .min(10, "Please tell us a little bit why you need an accounting software")
    .max(200),
});
