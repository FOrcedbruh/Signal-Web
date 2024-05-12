import { useEffect, useState } from "react";
import { instance } from "@/authInstance/instance";
import useConversation from "@/zustand/useConversation";


const useGetMessages = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await instance.get(`/messages/${selectedConversation?._id}`);

                const data = await res.data;
                console.log(data)
                setMessages(data);

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        if (selectedConversation?._id) {
            getMessages();
        }
    }, [selectedConversation, setMessages]);
   

    return { messages, loading };
}

export default useGetMessages;