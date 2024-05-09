'use client'
import styles from './Messages.module.css';
import Message from '../Message/Message';
import useGetMessages from '@/hooks/useGetMessages';
import useListenMessages from '@/hooks/useListenMessages';



const Messages: React.FC = () => {

    const { messages, loading } = useGetMessages();
    useListenMessages();

    return (
        <section className={styles.window}>
           {messages.map((message, index) => {
                return (
                    <Message index={index} _id={message._id} key={message._id} senderId={message.senderId} message={message.message} receiverId={message.receiverId}/>
                )
           })}
        </section>
    )
}

export default Messages;