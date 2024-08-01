"use client";
import React, { useState } from "react";
import MainWaitlist from "./_components/main";
import Complete from "./_components/complete";

const Waitlist = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <>
      {currentPage === 0 && (
        <MainWaitlist
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === 1 && <Complete />}
    </>
  );
};

export default Waitlist;
