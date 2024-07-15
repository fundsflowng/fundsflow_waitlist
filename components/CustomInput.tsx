import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath } from "react-hook-form";
import { formSchema } from "./schema/formSchema";

import { z } from "zod";
import { Textarea } from "./ui/textarea";

type InputData = {
  name: FieldPath<z.infer<typeof formSchema>>;
  control: Control<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  type: string;
};

const CustomInput = ({
  name,
  control,
  label,
  placeholder,
  type,
}: InputData) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <div className="form-item">
          <FormItem>
            <FormLabel className="form-label font-mullish">{label}</FormLabel>
            <FormControl>
              {type === "textarea" ? (
                <>
                  <Textarea
                    className="resize-none h-48 input-class"
                    {...field}
                  />
                </>
              ) : (
                <>
                  <Input
                    placeholder={`${placeholder}`}
                    {...field}
                    className="input-class bg-white"
                    type={type}
                  />
                </>
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        </div>
      )}
    />
  );
};

export default CustomInput;
