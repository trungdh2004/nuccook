import Logo from "@/app/components/common/Logo";
import { loginApi } from "@/service/user.service";
import useAuthStore from "@/store/useAuth";
import useModalLogin from "@/store/useModalLogin";
import instance from "@/utils/instance";
import { useGoogleLogin } from "@react-oauth/google";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
const LoginModel = () => {
  const { open, setClose } = useModalLogin();
  const { setUser } = useAuthStore();
  // const { setOpen, setClose: setCloseLoading } = useModelLoading();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // setOpen();
      try {
        const { data } = await loginApi(tokenResponse.access_token);
        const { accessToken, user } = data;
        instance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        setUser(user);
        console.log("data", data);
      } catch (error: unknown) {
        const err = error as Error;
        toast.error(err.message);
      } finally {
        // setCloseLoading();
      }
    },
    onError: (error) => {
      const err = error as Error;
      toast.error(err.message);
    },
    flow: "implicit",
  });
  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 w-full h-screen  z-[100] flex items-center justify-center px-2">
            <div
              className="absolute inset-0 bg-black/80 cursor-pointer z-0"
              onClick={() => {
                setClose();
              }}
            ></div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 100 }}
              transition={{
                duration: 0.2,
              }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute max-w-md mx-4 w-full bg-white z-2 p-4 rounded-md border border-gray-500/50 pb-8"
            >
              <div className="flex items-center justify-end text-white mb-4">
                <div
                  className="size-5 cursor-pointer"
                  onClick={() => {
                    setClose();
                  }}
                >
                  <X size={20} />
                </div>
              </div>
              <div className="w-full ">
                <div className="flex items-center justify-center">
                  <div className="flex items-center  gap-2">
                    <Logo className="size-12" />
                    <div>
                      <h1 className="font-bold text-xl space-x-1 bg-gradient-to-r from-orange-600 to-blue-500 text-transparent bg-clip-text">
                        Cooknuc
                      </h1>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold text-lg text-center mt-2">
                    Đăng nhập
                  </h1>
                </div>

                <div className="flex items-center justify-center my-4">
                  <div className="max-w-60 w-full border-t border-gray-500/20"></div>
                </div>

                <div className="mt-8 flex flex-col items-center">
                  <button
                    className="w-full py-2 px-3 rounded-lg relative border max-w-xs flex items-center bg-black justify-center gap-2 group"
                    onClick={() => {
                      login();
                    }}
                  >
                    <div
                      className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 
                group-hover:opacity-100 transition-all duration-500 blur-xl"
                    />
                    <FcGoogle size={20} />
                    <span className="text-sm text-white">
                      Đăng nhập bằng google
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LoginModel;
