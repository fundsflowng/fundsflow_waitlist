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

export async function createWaitlist(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(
    "https://fundsflow.onrender.com/api/v1/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        phoneNumber: values.phone,
        businessType: values.businessType,
        reason: values.reason,
      }),
    }
  ).then((res) => res.json());

  return response;
}
