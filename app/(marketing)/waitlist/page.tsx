import { TextGenerateEffect } from "@/components/ui/GenerateTextEffect";
import WaitlistForm from "@/components/WaitlistForm";
import React from "react";

const Waitlist = () => {
  return (
    <section className="w-full h-full md:space-y-10 space-y-4 px-5 md:px-0">
      <div className="md:max-w-4xl w-full mx-auto py-2">
        <h1 className="text-primain_blue font-medium text-4xl uppercase">
          FUNDSFLOW (waitlist)
        </h1>
      </div>
      <div className="py-3 flex md:flex-nowrap flex-wrap w-full md:h-12 h-full bg-primain_blue items-center mb-12 px-6">
        <ul
          className="flex md:flex-row flex-col md:items-center items-start md:justify-between justify-start 
         w-full list-disc"
        >
          <li className="text-white text-base font-light font-mullish">
            Payment processing
          </li>
          <li className="text-white text-base font-light font-mullish">
            Invoice tracking
          </li>
          <li className="text-white text-base font-light font-mullish">
            Client management
          </li>
          <li className="text-white text-base font-light font-mullish">
            Real-Time alerts
          </li>
          <li className="text-white text-base font-light font-mullish">
            Financial tracking
          </li>
          <li className="text-white text-base font-light font-mullish">SMEs</li>
        </ul>
      </div>
      <div className="md:max-w-4xl w-full mx-auto py-6">
        <TextGenerateEffect
          words=" Hello👋🏼 Greetings from the FundsFlow team,"
          text="2xl"
          className="font-bold"
          time={0.1}
        />
        <TextGenerateEffect
          words="In the dynamic world of small business, managing payments, invoicing,
          and client relations often leaves business owners feeling overwhelmed.
          Instead of focusing on growing their businesses, owners are bogged
          down by administrative tasks and chasing overdue payments.
          "
          text="base"
          time={0.1}
          className="font-normal text-base"
        />
        <br />
        <TextGenerateEffect
          words="FundsFlow is here to change that. We've developed an intuitive
          platform designed to simplify payment management, streamline
          invoicing, and enhance client communication, allowing business owners
          to focus on their core activities."
          text="base"
          time={0.1}
          className="font-normal"
        />
        <br />
        <TextGenerateEffect
          words="Join our waitlist today to be among the first to access FundsFlow and
          enjoy its exclusive early-bird benefits. Stay updated on our progress
          and be ready to transform your payment processes with ease
          
          .
          "
          text="base"
          time={0.1}
          className="font-normal"
        />
      </div>

      <div className="md:py-6 py-3 md:max-w-4xl w-full md:mx-auto md:px-0 px-6">
        <WaitlistForm />
      </div>
    </section>
  );
};

export default Waitlist;
