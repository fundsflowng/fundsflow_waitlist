import Header from "@/components/Header";
import React from "react";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-white">
      <Header />
      {children}
    </div>
  );
};

export default MarketingLayout;
