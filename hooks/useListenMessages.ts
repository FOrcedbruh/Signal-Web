import { useEffect } from "react";
import { useSocketContext } from "@/context/socketContext";
import { setMessages } from "@/redux/reducers/ConversationSlice";
import { useAppDispatch, useAppSelector } from "./ReduxTypeHook";
import { IMessage } from "@/types/IMessage";

const useListenMessages = () => {

    const dispatch = useAppDispatch();
    const { socket } = useSocketContext();

    const { messages } = useAppSelector(state => state.ConversationSlice);

    useEffect(() => {
        socket?.on('newMessage', (newMessage: IMessage) => {
            dispatch(setMessages([...messages, newMessage]))
        });

        return () => socket?.off('newMessage');
    }, [socket, messages, setMessages]);
}

export default useListenMessages;
