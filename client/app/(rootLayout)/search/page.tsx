import Logo from "@/app/components/common/Logo";
import Link from "next/link";
import FormSearch from "./FormSearch";
import { MdContentPasteSearch } from "react-icons/md";
import { FaUserClock } from "react-icons/fa";
import { PiCookingPotBold } from "react-icons/pi";

const page = () => {
  return (
    <div className="px-2 md:px-4 bg-white flex flex-col">
      <div className="my-12 flex flex-col gap-4 items-center">
        <Link href="/" className="flex items-center mx-4 mb-7 gap-2">
          <Logo className="size-12 md:size-16" width={72} height={72} />
          <div>
            <h1 className="font-bold text-2xl md:text-4xl space-x-1 bg-gradient-to-r from-orange-600 to-blue-500 text-transparent bg-clip-text">
              Cooknuc
            </h1>
          </div>
        </Link>

        <FormSearch />
      </div>

      <div className="mb-6">
        <div className="flex gap-1 items-center mb-4">
          <MdContentPasteSearch size={20} className="text-orange-500" />
          <h1 className="text-gray-500 text-lg font-medium">
            Tìm kiếm phổ biến nhất
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
          <div className="w-full shadow rounded-md bg-white">
            <Link href={"/"} className="w-full">
              <div className="h-24 relative w-full"></div>
            </Link>
          </div>
          <div className="w-full shadow rounded-md bg-white">
            <Link href={"/"} className="w-full">
              <div className="h-24 relative w-full"></div>
            </Link>
          </div>
          <div className="w-full shadow rounded-md bg-white">
            <Link href={"/"} className="w-full">
              <div className="h-24 relative w-full"></div>
            </Link>
          </div>
          <div className="w-full shadow rounded-md bg-white">
            <Link href={"/"} className="w-full">
              <div className="h-24 relative w-full"></div>
            </Link>
          </div>
          <div className="w-full shadow rounded-md bg-white">
            <Link href={"/"} className="w-full">
              <div className="h-24 relative w-full"></div>
            </Link>
          </div>
          <div className="w-full shadow rounded-md bg-white">
            <Link href={"/"} className="w-full">
              <div className="h-24 relative w-full"></div>
            </Link>
          </div>
          <div className="w-full shadow rounded-md bg-white">
            <Link href={"/"} className="w-full">
              <div className="h-24 relative w-full"></div>
            </Link>
          </div>
          <div className="w-full shadow rounded-md bg-white">
            <Link href={"/"} className="w-full">
              <div className="h-24 relative w-full"></div>
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex gap-1 items-center mb-4">
          <FaUserClock size={20} className="text-orange-500" />
          <h1 className="text-gray-500 text-lg font-medium">
            Món ăn được xem gần đây
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 md:grid-cols-6">
          <div className="w-full shadow rounded-md bg-white">
            <Link href={"/"} className="w-full">
              <div className=" relative w-full">
                <div className="h-24 border-b"></div>
                <div className="p-2">
                  <div className="flex items-center gap-2">
                    <div className="size-5 rounded-full border"></div>
                    <div className="flex-1 flex justify-start text-xs text-gray-400 line-clamp-1">Đỗ Hữu Trung</div>
                  </div>

                  <p className="mt-1 text-sm font-semibold text-gray-600 line-clamp-2">Chicken là món rất là ngon lun nè bạn ơi hehe hihi huhu</p>
                </div>
              </div>
            </Link>
          </div>
          
        </div>
      </div>

      <div className="mb-6">
        <div className="flex gap-1 items-center mb-4">
          <PiCookingPotBold size={20} className="text-orange-500" />
          <h1 className="text-gray-500 text-lg font-medium">
            Xem những gì nấu ăn! Công thức thưởng thức mùa này
          </h1>
        </div>

        <section>
          <div className="text-base text-gray-500 mb-2">Chicken</div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
            <div className="w-full shadow rounded-md bg-white">
              <Link href={"/"} className="w-full">
                <div className="h-24 relative w-full"></div>
              </Link>
            </div>
            <div className="w-full shadow rounded-md bg-white">
              <Link href={"/"} className="w-full">
                <div className="h-24 relative w-full"></div>
              </Link>
            </div>
            <div className="w-full shadow rounded-md bg-white">
              <Link href={"/"} className="w-full">
                <div className="h-24 relative w-full"></div>
              </Link>
            </div>
            <div className="w-full shadow rounded-md bg-white">
              <Link href={"/"} className="w-full">
                <div className="h-24 relative w-full"></div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
