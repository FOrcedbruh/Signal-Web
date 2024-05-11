'use client'
import { useState } from "react";
import { instance } from "@/authInstance/instance";
import { IMessage } from "@/types/IMessage";
import useConversation from "@/zustand/useConversation";

const useSendMessage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { selectedConversation } = useConversation()


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