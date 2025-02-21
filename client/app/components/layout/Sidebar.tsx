"use client";
import useSidebar from "@/store/useSidebar";
import Link from "next/link";
import { FiBook, FiHome, FiSearch } from "react-icons/fi";
import Logo from "../common/Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const configMenu = [
  {
    href: "/",
    label: "Trang chủ",
    icon: FiHome,
  },
  {
    href: "/search",
    label: "Tìm kiếm",
    icon: FiSearch,
  },
  {
    href: "/blog",
    label: "Tin tức",
    icon: FiBook,
  },
  //   {
  //     href: "/",
  //     label: "Trang chủ",
  //     icon: FiHome,
  //   },
];

const Sidebar = () => {
  const { open, setClose } = useSidebar();
  const pathName = usePathname();

  console.log("pathName", pathName);

  return (
    <>
      <div
        className={`w-full h-screen fixed top-0 -left-full z-50 md:sticky md:py-2 max-w-[280px] transition-all duration-500 ${
          open && "left-0"
        }`}
      >
        <div className="w-full h-full bg-white rounded-none md:rounded-md  shadow">
          <div className="pt-5">
            <Link href="/" className="flex items-center mx-4 mb-7 gap-2">
              <Logo className="size-8" />
              <div>
                <h1 className="font-bold text-xl space-x-1 bg-gradient-to-r from-orange-600 to-blue-500 text-transparent bg-clip-text">
                  Cooknuc
                </h1>
              </div>
            </Link>

            <div className="px-5 mb-2 text-sm text-gray-400">
              <span>Danh mục</span>
            </div>
            <ul className="w-full flex flex-col gap-3 text-gray-500">
              {configMenu.map((menu) => (
                <li
                  className="flex items-center px-3 "
                  key={`${menu.href}-${menu.label}`}
                >
                  <Link
                    href={menu.href}
                    className={cn(
                      "flex items-center gap-3 p-2 hover:bg-orange-100/40 rounded-md cursor-pointer w-full hover:text-orange-600"
                    , pathName === menu.href && "bg-orange-100/40 text-orange-600")}
                  >
                    <div>
                      <menu.icon size={18} />
                    </div>
                    <div>
                      <span className="text-lg">{menu.label}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`fixed bg-black/50 inset-0 z-30 cursor-pointer md:hidden transition-all duration-500 ${
          open ? "block  opacity-100" : "hidden  opacity-0"
        }`}
        onClick={() => {
          console.log("hihi");

          setClose();
        }}
      ></div>
    </>
  );
};

export default Sidebar;
