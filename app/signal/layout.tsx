'use client'
import styles from './layout.module.css';
import Conversation from '../components/Conversation/Conversation';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/authContext';
import { useEffect, useState, ChangeEvent } from 'react';
import useGetConversations from '@/hooks/useGetConversations';
import { IConversation } from '@/types/IConversation';




const SideBar = ({children}: {children: React.ReactNode}) => {

    const [searchValue, setSearchValue] = useState<string>('');

    const seacrhHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }
   
    const { loading, conversations } = useGetConversations();



    const router = useRouter();

    const { authUser } = useAuthContext();

    /*useEffect(() => {
        if (!authUser) {
            router.push('/login');
        }
    }, [authUser]);*/

    const filteredConversations: IConversation[] = conversations.filter(c => {
        return c.username.toLowerCase().includes(searchValue.toLowerCase());
    })

    return (
        <section className={styles.window}>
            <aside className={styles.aside}>
                <section className={styles.search}>
                    <input type="text" placeholder='Поиск' value={searchValue} onChange={(e) => seacrhHandle(e)}/>
                </section>
                <section className={styles.chats}>
                    {filteredConversations.map((conversation, index) => {
                        return (
                            <Conversation index={index} username={conversation.username} _id={conversation._id} avatar={conversation.avatar}  key={index}/>
                        )
                    })}
                </section>
            </aside>
            <div className={styles.container}>
                {children}
            </div>
        </section>
    )
}

export default SideBar;