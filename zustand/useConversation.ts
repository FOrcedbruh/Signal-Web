import { create } from "zustand";
import { IConversation } from "@/types/IConversation";
import { setMessages } from "@/redux/reducers/ConversationSlice";
import { IMessage } from "@/types/IMessage";

interface StoreType {
    messages: IMessage[],
    selectedConversation: IConversation | null,
    setSelectedConversation: (selectedConversation: IConversation) => void,
    setMessages: (messages: IMessage[]) => void,
    
}


const useConversation = create<StoreType>((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages: [],
    setMessages: (messages) => set({messages}),
}));


export default useConversation;