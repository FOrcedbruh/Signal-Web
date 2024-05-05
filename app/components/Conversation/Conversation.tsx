'use client'
import styles from './Conversation.module.css';
import Image from 'next/image';
import { IConversation } from '@/types/IConversation';
import { selectConversation } from '@/redux/reducers/ConversationSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/ReduxTypeHook';
import { useRouter } from 'next/navigation';

const Conversation: React.FC<IConversation> = ({username, avatar, _id, index}) => {

    const dispatch = useAppDispatch();

    const router = useRouter();
    
    const { selectedConversation } = useAppSelector(state => state.ConversationSlice);

    

    const clickHandle = () => {
        dispatch(selectConversation({
            username,
            avatar,
            _id,
        }));
        router.push(`/signal/${index}`);
    }

    const isSelected = _id === selectedConversation?._id;

    return (
        <article style={{'backgroundColor': isSelected ? '#73fa75' : '#000'}} className={styles.conv} onClick={clickHandle}>
            <Image src={avatar} alt='' width={40} height={40}/>
            <p>{username}</p>
        </article>
    )
}

export default Conversation;