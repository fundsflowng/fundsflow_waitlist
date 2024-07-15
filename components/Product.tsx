import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <div className="w-full h-full md:h-[30rem]">
      <div className="md:max-w-6xl w-full md:mx-auto bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#fded722d] via-[#ededea49] to-[#e3edff23]">
        <div className="py-8 md:px-4 md:flex md:flex-row flex-col gap-8 space-y-6 px-4">
          <img
            src="/sparkling.svg"
            alt="sparkling"
            className="object-contain object-center 
                  w-8 h-8 flex items-start justify-start"
          />
          <div className="w-full md:flex md:flex-row flex-col space-y-6 items-center justify-center h-full gap-6">
            <div className="w-full h-fit flex-1">
              <Image
                src="/dashboard.svg"
                alt="dashboard"
                width={570}
                height={341}
                className="object-cover object-center md:w-[570.4px] w-full h-[341.28px] border-8 rounded-lg block border-primain_blue"
              />
            </div>
            <div className="relative flex items-start justify-start flex-1 w-full h-full gap-x-4 gap-y-20">
              <div className="absolute z-10 left-[50%] md:-top-10 top-0">
                <img
                  src="/horizontal-line.svg"
                  alt=""
                  className="object-contain object-center "
                />
              </div>
              <div className="absolute z-10 top-[48%] md:flex hidden ">
                <img
                  src="/vertical-line.svg"
                  alt=""
                  className="object-contain object-center "
                />
              </div>
              <div
                className="w-full grid grid-cols-10 md:grid-cols-2 lg:grid-cols-8 md:grid-row-2
          gap-4 lg:gap-8 md:mx-auto"
              >
                <div className="md:w-full col-span-5 md:col-span-4 space-y-3">
                  <h1 className="text-primain_blue font-medium font-mullish text-base">
                    Effortless Invoicing
                  </h1>
                  <p className="text-sm text-lighter_dark font-mullish font-normal md:w-[70%] leading-[1.5rem]">
                    Generate, send, and track invoices in a few clicks. Manage
                    your billing with ease and get paid faster.
                  </p>
                </div>
                <div className="md:w-full col-span-5 md:col-span-4 space-y-3">
                  <h1 className="text-primain_blue font-medium font-mullish text-base">
                    Efficient Payment Tracking
                  </h1>
                  <p className="text-sm text-lighter_dark font-mullish font-normal md:w-4/5 leading-[1.5rem]">
                    Never miss a payment with our real-time alerts for pending,
                    overdue, and successful transactions.
                  </p>
                </div>
                <div className="md:w-full col-span-5 md:col-span-4 space-y-3">
                  <h1 className="text-primain_blue font-medium font-mullish text-base">
                    Client Management
                  </h1>
                  <p className="text-sm text-lighter_dark font-mullish font-normal w-4/5 leading-[1.5rem]">
                    Manage contact information, billing preferences, and payment
                    history for a seamless business relationship.
                  </p>
                </div>
                <div className="md:w-full col-span-5 md:col-span-4 space-y-3">
                  <h1 className="text-primain_blue font-medium font-mullish text-base">
                    Automated Real-Time Alerts
                  </h1>
                  <p className="text-sm text-lighter_dark font-mullish font-normal w-4/5 leading-[1.5rem]">
                    Manage contact information, billing preferences, and payment
                    history for a seamless business relationship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
