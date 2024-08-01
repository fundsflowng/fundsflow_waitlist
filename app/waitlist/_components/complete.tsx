import React from "react";
import SocialButton from "@/components/ui/SocialButton";
const Complete = () => {
  return (
    <section className="w-full h-screen flex items-center justify-start flex-col">
      <div className="relative w-[312px] h-[426px] rounded-lg shadow-lg">
        <div
          className="w-full bg-primain_blue h-2/5 flex flex-col items-center 
        justify-center rounded-t-lg shadow-sm"
        >
          <div className="h-16 w-16 rounded-full flex items-center justify-center">
            <img src="/check.svg" alt="check" />
          </div>
          <h3 className="font-inter font-medium text-[24px] text-white">
            Congratulations!
          </h3>
          <p className="font-mullish text-sm text-neutral-100 font-normal">
            We&apos;re excited to have you on board
          </p>
        </div>
        <div className="px-4 py-4">
          <div className="w-full h-3/5 bg-white space-y-4 text-center">
            <h4 className="font-inter font-medium text-[16px]">
              What&apos;s Next?
            </h4>
            <p className="font-mullish text-sm font-normal">
              Stay Tuned: We&apos;ll keep you updated with the latest news,
              exclusive insights, and progress towards our official launch.
            </p>
            <div>
              <h4 className="font-inter font-medium text-[16px]">
                Connect with Us
              </h4>
              <p className="font-mullish text-sm font-normal">
                Follow us on Social Media for real-time updates and
                announcements.
              </p>
              <div className="flex gap-3 w-full items-center justify-center py-4">
                <SocialButton link="/" icon="/baseline-facebook.svg" />
                <SocialButton link="/" icon="/baseline-instagram.svg" />
                <SocialButton link="/" icon="/baseline-linkedin.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Complete;
