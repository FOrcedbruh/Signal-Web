'use client'
import styles from './Message.module.css';
import Image from 'next/image';
import { IMessage } from '@/types/IMessage';
import { useAuthContext } from '@/context/authContext';
import { useAppSelector } from '@/hooks/ReduxTypeHook';
import { motion } from 'framer-motion';

const Message: React.FC<IMessage> = ({_id, message, senderId, receiverId}) => {

    const messAnimate = {
        hidden: {
            opacity: 0,
            x: -30
        },
        visible: {
            opacity: 1,
            x: 0
        }
    }

    const { authUser } = useAuthContext();
    const { selectedConversation } = useAppSelector(state => state.ConversationSlice);
    //@ts-ignore
    const fromMe = senderId === authUser._id;
    //@ts-ignore
    const avatar: string = fromMe ? authUser.avatar : selectedConversation?.avatar;

    return (
        <motion.div initial={'hidden'} animate={'visible'} variants={messAnimate} className={styles.message}>
            <Image src={avatar} alt='' width={40} height={40}/>
            <div style={{'backgroundColor': fromMe ? '#73fa75' : '#0c0c0c'}}>
                <p>{message}</p>
            </div>
        </motion.div>
    )
}

export default Message;