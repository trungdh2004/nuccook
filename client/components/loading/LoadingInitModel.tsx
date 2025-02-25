import Logo from "@/app/components/common/Logo";
import React from "react";

const LoadingInitModel = () => {
  return (
    <div className="fixed z-[1000] top-0 left-0 w-full h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 ">
          <Logo className="size-12" height={100} width={100} />

          <h2 className="text-3xl font-bold italic bg-gradient-to-tr from-[#FF5F6D] to-[#FFC371] text-transparent bg-clip-text">
            Cooknuc
          </h2>
        </div>

        <div>
          <p className=" bg-orange-500 text-transparent bg-clip-text">
            Nấu ăn dễ dàng, Ngon khó cưỡng!
          </p>
        </div>

        <div>
          <div className="relative">
            <div className="h-12 w-12 rounded-full border-t-8 border-b-8 border-orange-200"></div>
            <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-t-8 border-b-8 border-orange-500 animate-spin"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingInitModel;
