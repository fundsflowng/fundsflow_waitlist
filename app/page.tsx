import Hero from "@/components/Hero";
import Product from "@/components/Product";
import React from "react";

const MainPage = () => {
  return (
    <main>
      <div>
        <h1 className="font-roboto font-semibold text-7xl text-black">
          <Hero />
          <Product />
        </h1>
      </div>
    </main>
  );
};

export default MainPage;
