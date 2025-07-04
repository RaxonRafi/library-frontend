import React from "react";

const Conatiner = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1520px] mx-auto px-4">
      {children}
    </div>
  );
};

export default Conatiner;