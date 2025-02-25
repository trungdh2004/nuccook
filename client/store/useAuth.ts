
import { currentApi, logoutApi } from "@/service/user.service";
import { IUser } from "@/types/User.type";
import { create } from "zustand";

interface IAuthStore {
  user:IUser | null,
  isLogin:boolean,
  isLoading:boolean,
  fetchUser: () => Promise<void>,
  logout: () => void,
  setUser:(user:IUser) => void
}

const useAuthStore = create<IAuthStore>((set) => ({
  user: null,
  isLogin:false,
  isLoading:false,
  fetchUser: async () => {
    set({isLoading:true})
    try {
      // await new Promise((_,reject) => {
      //   setTimeout(reject,5000)
      // })
      const {data} = await currentApi();
      set({ user: data,isLogin:true });
    } catch (error:unknown) {
      console.log("error auth",error);
      set({ user: null, isLogin:false });
    }finally {
      set({isLoading:false})
    }
  },
  logout:async () => {
    await logoutApi()
    set({ user: null,isLogin:false })
  },
  setUser : (user:IUser) => set({user,isLogin:true}),
}));

export default useAuthStore