"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./schema/formSchema";

import { Form, FormField } from "./ui/form";

import { Button } from "./ui/button";
import CustomInput from "./CustomInput";
import { joinWaitlist } from "@/actions/waitlist";
import { useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react";

const WaitlistForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: " ",
      email: "",
      phone: "",
      businessType: " ",
      reason: " ",
    },
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const result = await joinWaitlist(values);
      console.log(result.message);
    } catch (error) {
    } finally {
      setIsLoading(false);
      router.refresh();
      router.push("/");
      form.reset(form.getValues());
    }
  };
  return (
    <div className="w-full flex flex-col items-start md:justify-start justify-center md:space-y-2">
      <h1 className="font-inter font-semibold text-[32px] text-main_black">
        Kindly enter your details below:
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
          <h2></h2>
          <CustomInput
            name="name"
            control={form.control}
            label="Name"
            type="text"
            placeholder="Enter your name"
          />
          <CustomInput
            name="email"
            control={form.control}
            label="Email Address"
            type="text"
            placeholder="Enter your email address"
          />
          <CustomInput
            name="phone"
            control={form.control}
            label="Phone Number"
            type="text"
            placeholder=""
          />
          <CustomInput
            name="businessType"
            control={form.control}
            label="Business Type (Retail, E-Commerce, etc)"
            type="text"
            placeholder="Enter your business type"
          />
          <CustomInput
            name="reason"
            control={form.control}
            label="Why do you need an accounting software? ( Eg. to manage my Finance) "
            type="textarea"
            placeholder=""
          />
          <Button
            size="lg"
            variant="secondary"
            className="bg-primain_blue text-white px-14 hover:bg-darker_blue w-full md:w-64"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2Icon size={24} className="spin-anim" />
              </>
            ) : (
              <>Submit</>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default WaitlistForm;
