import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuthStore from "@/store/useAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ButtonProfile = () => {
  const router = useRouter();
  const { user, isLogin, logout } = useAuthStore();

  return (
    <div className="flex items-center gap-2">
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="size-8 md:size-9 border rounded-full focus-within:outline-none cursor-pointer overflow-hidden">
              <Image
                src={user?.avatar || ""}
                alt=""
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-white backdrop-blur-xl rounded-md border  shadow-2xl  max-w-56 w-56"
            side="bottom"
            align="end"
          >
            <DropdownMenuLabel>
              <div className="flex items-center w-full h-full justify-start  overflow-hidden">
                <div className="size-8 border rounded-full focus-within:outline-none cursor-pointer overflow-hidden flex-shrink-0">
                  <Image
                    src={user?.avatar || ""}
                    alt=""
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 pl-2">
                  <p className="text-sm text-gray-500 line-clamp-1">
                    {user?.name}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {user?.email}
                  </p>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem className=" cursor-pointer">
              Trang cá nhân
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className=" cursor-pointer">
              Món ăn của tôi
            </DropdownMenuItem>

            <DropdownMenuItem className=" cursor-pointer">
              Món ăn đã đăng tải
            </DropdownMenuItem>

            <DropdownMenuItem className=" cursor-pointer">
              Món ăn đã lưu
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="bg-rose-100/20 text-rose-500 hover:bg-rose-100/30 cursor-pointer focus:bg-rose-100/30 focus:text-rose-500"
              onClick={logout}
            >
              Đăng xuất
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ButtonProfile;
