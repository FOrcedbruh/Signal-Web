import { useEffect } from "react";
import { useSocketContext } from "@/context/socketContext";
import { IMessage } from "@/types/IMessage";
import useConversation from "@/zustand/useConversation";

const useListenMessages = () => {

    const { messages, setMessages } = useConversation();

    const { socket } = useSocketContext();


    useEffect(() => {
        socket?.on('newMessage', (newMessage: IMessage) => {
            (setMessages([...messages, newMessage]))
        });

        return () => socket?.off('newMessage');
    }, [socket, messages, setMessages]);
}

export default useListenMessages;
