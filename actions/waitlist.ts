"use server";
import { formSchema } from "@/components/schema/formSchema";
import { z } from "zod";
export async function joinWaitlist(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return {
      message: "Submission failed",
      error: parsed.error.flatten().fieldErrors,
    };
  }
  const result = await fetch("https://funds-flow.onrender.com/waitlist/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: values.name,
      email: values.email,
      phone: values.phone,
      business_type: values.businessType,
      reason: values.reason,
    }),
  }).then((res) => res.json());
  return {
    message: result,
  };
}
