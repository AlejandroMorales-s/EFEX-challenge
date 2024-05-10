import React from "react";
import { Head } from ".";

interface GeneralWrapperProps {
  children: React.ReactNode;
  sectionName: string;
}

const GeneralWrapper = ({ children, sectionName }: GeneralWrapperProps) => {
  return (
    <div className="h-screen overflow-auto bg-background-color">
      <Head />

      <div className="flex flex-col gap-[30px] p-[30px] ">
        <h2 className="text-dark-blue text-3xl">{sectionName}</h2>

        {children}
      </div>
    </div>
  );
};

export default GeneralWrapper;
