'use client'
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./ReduxTypeHook";
import { setMessages } from "@/redux/reducers/ConversationSlice";
import { instance } from "@/authInstance/instance";
import { IMessage } from "@/types/IMessage";

const useSendMessage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { selectedConversation } = useAppSelector(state => state.ConversationSlice);
    const [ messages, setMessages ] = useState<IMessage[]>([]);

    const dispatch = useAppDispatch();

    const sendMessage = async (message: IMessage) => {
        setLoading(true);
        try {
            await instance.post(`/messages/send/${selectedConversation?._id}`, {
                message: message.message
            })
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    return { sendMessage, loading}
}

export default useSendMessage;