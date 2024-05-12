'use client'
import { useState } from "react";
import { instance } from "@/authInstance/instance";
import useConversation from "@/zustand/useConversation";

const useSendMessage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { messages, setMessages, selectedConversation } = useConversation();


    const sendMessage = async (message: string) => {
        setLoading(true);
        try {
            const res = await instance.post(`/messages/send/${selectedConversation?._id}`, {
                message
            });

            const data = await res.data;
            setMessages([...messages, data]);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    return { sendMessage, loading}
}

export default useSendMessage;