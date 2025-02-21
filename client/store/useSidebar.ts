import { create } from "zustand";


interface IProps {
    open: boolean;
    setOpen: () => void;
    setClose: () => void;

}

const useSidebar = create<IProps>((set) =>({
    open:false,
    setOpen:() => {
        set({open:true})
    },
    setClose:() => {
        set({open:false})
    }
}))

export default useSidebar