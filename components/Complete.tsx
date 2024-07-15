import React from "react";
import SocialButton from "./ui/SocialButton";

const Complete = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="relative w-[312px] h-[426px] rounded-lg">
        <div className="w-full bg-primain_blue h-2/5 flex items-center justify-center rounded-t-lg">
          <div className="h-16 w-16 rounded-full flex items-center justify-center">
            <img src="/check.svg" alt="check" />
          </div>
          <h3>Congratulations!</h3>
          <p>We're excited to have you on board</p>
        </div>
        <div className="w-full h-3/5 bg-white space-y-4 text-center">
          <h4>What's Next?</h4>
          <p>
            Stay Tuned: We’ll keep you updated with the latest news, exclusive
            insights, and progress towards our official launch.
          </p>
          <div>
            <h4>Connect with Us</h4>
            <p>
              Follow us on Social Media for real-time updates and announcements.
            </p>
            <div className="flex gap-3">
              <SocialButton link="/" icon="/x.svg" bgColor="primain_blue" />
              <SocialButton
                link="/"
                icon="/instagram.svg"
                bgColor="primain_blue"
              />
              <SocialButton
                link="/"
                icon="/linkedin.svg"
                bgColor="primain_blue"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Complete;
