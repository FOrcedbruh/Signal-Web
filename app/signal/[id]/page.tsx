'use client'
import ChatHeader from "@/app/components/ChatHeader/ChatHeader"
import styles from './page.module.css';
import Messages from "@/app/components/Messages/Messages";
import ChatFooter from "@/app/components/ChatFooter/ChatFooter";
import { useAppSelector } from "@/hooks/ReduxTypeHook";

const ChatPage = ({params}: {params: {id: number}}) => {

    const { selectedConversation } = useAppSelector(state => state.ConversationSlice);

    const id: number = params.id;

    

    //@ts-ignore
    const avatar: string = selectedConversation?.avatar;
    //@ts-ignore
    const username: string = selectedConversation?.username;

    return (
        <section className={styles.window}>
            <ChatHeader avatar={avatar} username={username}/>
            <Messages />
            <ChatFooter />
        </section>
    )
}


export default ChatPage;