import { create } from "zustand";

interface StateTypeProps {
    notification: string,
    setNotification: (notification: string) => void
}

const useNotification = create<StateTypeProps>((set) =>({
    notification: '',
    setNotification: (notification) => set({notification})
}))

export default useNotification;