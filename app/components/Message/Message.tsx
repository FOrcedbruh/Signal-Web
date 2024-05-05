'use client'
import styles from './Message.module.css';
import Image from 'next/image';
import { IMessage } from '@/types/IMessage';
import { useAuthContext } from '@/context/authContext';
import { useAppSelector } from '@/hooks/ReduxTypeHook';

const Message: React.FC<IMessage> = ({_id, message, senderId, receiverId}) => {


    const { authUser } = useAuthContext();
    const { selectedConversation } = useAppSelector(state => state.ConversationSlice);
    //@ts-ignore
    const fromMe = senderId === authUser._id;
    //@ts-ignore
    const avatar: string = fromMe ? authUser.avatar : selectedConversation?.avatar;

    return (
        <div className={styles.message}>
            <Image src={avatar} alt='' width={40} height={40}/>
            <div style={{'backgroundColor': fromMe ? '#73fa75' : '#0c0c0c'}}>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message;