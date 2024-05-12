'use client'
import styles from './Conversation.module.css';
import Image from 'next/image';
import { IConversation } from '@/types/IConversation';
import { useRouter } from 'next/navigation';
import { useSocketContext } from '@/context/socketContext';
import useConversation from '@/zustand/useConversation';

const Conversation: React.FC<IConversation> = ({username, avatar, _id, index}) => {


    const router = useRouter();
    
    const { selectedConversation, setSelectedConversation } = useConversation();

    

    const clickHandle = () => {
        setSelectedConversation({
            username,
            _id,
            avatar,
            index
        })
        router.push(`/signal/${index}`);
    }

    const isSelected = _id === selectedConversation?._id;

    const { onlineUsers } = useSocketContext();

    const isOnline: boolean = onlineUsers.includes(_id);

    return (
        <article style={{'backgroundColor': isSelected ? '#73fa75' : '#000'}} className={styles.conv} onClick={clickHandle}>
            <Image src={avatar} alt='' width={40} height={40}/>
            <p>{username}</p>
            <p className={styles.status}>{isOnline ? <span style={{'color': 'chartreuse'}}>В сети</span> : <span style={{'color': '#868786'}}>не в сети</span>}</p>
        </article>
    )
}

export default Conversation;