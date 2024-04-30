import ChatHeader from "@/app/components/ChatHeader/ChatHeader"
import styles from './page.module.css';
import Messages from "@/app/components/Messages/Messages";
import ChatFooter from "@/app/components/ChatFooter/ChatFooter";


const ChatPage: React.FC = () => {

    return (
        <section className={styles.window}>
            <ChatHeader />
            <Messages />
            <ChatFooter />
        </section>
    )
}


export default ChatPage;