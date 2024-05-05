import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./ReduxTypeHook";
import { setMessages } from "@/redux/reducers/ConversationSlice";
import { instance } from "@/authInstance/instance";
import { IMessage } from "@/types/IMessage";


const useGetMessages = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const {  selectedConversation } = useAppSelector(state => state.ConversationSlice);
    const [messages, setMessages] = useState<IMessage[]>([]);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                await instance.get(`messages/${selectedConversation?._id}`).then(res => {
                    setMessages(res.data);
                })
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        if (selectedConversation?._id) {
            getMessages();
        }
    }, [selectedConversation, messages]);
   

    return { messages, loading}
}

export default useGetMessages;