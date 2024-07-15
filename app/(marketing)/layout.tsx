import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-white flex h-full flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
