'use client'
import ChatHeader from "@/app/components/ChatHeader/ChatHeader"
import styles from './page.module.css';
import Messages from "@/app/components/Messages/Messages";
import ChatFooter from "@/app/components/ChatFooter/ChatFooter";
import useConversation from "@/zustand/useConversation";

const ChatPage = ({params}: {params: {id: number}}) => {


    const id: number = params.id;

    const { selectedConversation } = useConversation();



    return (
        <section className={styles.window}>
            <ChatHeader avatar={selectedConversation?.avatar!} username={selectedConversation?.username!}/>
            <Messages />
            <ChatFooter />
        </section>
    )
}


export default ChatPage;