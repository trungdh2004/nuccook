import React from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sm:px-2 bg-[#f8f6f2] w-full h-full min-h-screen grid md:grid-cols-[clamp(240px,20%,270px)_1fr] gap-4 ">
      <Sidebar />
      <div className="min-h-screen relative rounded-md h-full pb-2 ">
        <Header />
        <div className=" bg-white w-full ">{children}</div>
      </div>
      <div className="fixed w-full grid md:grid-cols-[clamp(240px,20%,270px)_1fr] gap-4 left-0 bottom-0 z-10">
        <div className="h-2 w-full bg-[#f8f6f2] hidden md:block"></div>
        <div className="h-2 w-full bg-[#f8f6f2]"></div>
      </div>
    </div>
  );
};

export default Layout;
