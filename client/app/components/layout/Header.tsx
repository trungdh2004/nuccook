"use client";
import ButtonProfile from "@/components/current/ButtonProfile";
import { Button } from "@/components/ui/button";
import useAuthStore from "@/store/useAuth";
import useModalLogin from "@/store/useModalLogin";
import useSidebar from "@/store/useSidebar";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const router = useRouter();
  const { setOpen } = useSidebar();
  const { setOpen: setOpenLogin } = useModalLogin();
  const { isLogin } = useAuthStore();

  return (
    <div className="flex flex-col sticky top-0 w-full z-10 before:w-full before:relative before:translate-y-2 before:h-4 before:shadow-[0_-1rem_0_0_#f8f6f2] before:rounded-t-md before:z-[-1] ">
      <div className="flex items-center justify-between md:justify-end gap-2 h-full -mt-2 bg-white rounded-t-md p-2">
        <Button
          size={"sm"}
          variant={"outline"}
          className="md:hidden"
          onClick={() => {
            setOpen();
          }}
        >
          <IoMenu size={20} />
        </Button>
        <div className="flex items-center gap-2">
          <Button
            size={"sm"}
            onClick={() => {
              if (!isLogin) {
                setOpenLogin();
              } else {
                router.push("/recipes");
              }
            }}
          >
            <FaRegPenToSquare size={20} /> Thêm
          </Button>
          {isLogin ? (
            <ButtonProfile />
          ) : (
            <Button size={"sm"} variant={"outline"} onClick={setOpenLogin}>
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
