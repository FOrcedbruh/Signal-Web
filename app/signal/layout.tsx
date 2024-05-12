'use client'
import styles from './layout.module.css';
import Conversation from '../components/Conversation/Conversation';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/authContext';
import { useEffect, useState, ChangeEvent } from 'react';
import useGetConversations from '@/hooks/useGetConversations';
import { IConversation } from '@/types/IConversation';
import Menu from '../components/Menu/Menu';
import { motion } from 'framer-motion';
import Not from '../components/Not/Not';
import useNotification from '@/zustand/useNotification';


const SideBar = ({children}: {children: React.ReactNode}) => {

    const { notification } = useNotification();

    const [menu, setMenu] = useState<boolean>(false);

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
            {notification && <Not text={notification} />}
            <aside className={styles.aside}>
                <motion.div animate={{
                    rotate: menu ? 180 : 0
                }} className={styles.burgerMenu} onClick={() => setMenu(!menu)}>
                    <motion.div animate={{
                        rotate: menu ? 45 : 0,
                        y: menu ? 8 : 0,
                    }}></motion.div>
                    <motion.div animate={{
                        opacity: menu ? 0 : 1
                    }}></motion.div>
                    <motion.div animate={{
                         rotate: menu ? -45 : 0,
                         y: menu ? -8 : 0,
                    }}></motion.div>
                </motion.div>
                {menu && <Menu />}
                <motion.section className={styles.search}>
                    <input type="text" placeholder='Поиск' value={searchValue} onChange={(e) => seacrhHandle(e)}/>
                </motion.section>
                <motion.section 
                className={styles.chats}>
                    {filteredConversations.length > 0 ? filteredConversations.map((conversation, index) => {
                        return (
                            <Conversation index={index} username={conversation.username} _id={conversation._id} avatar={conversation.avatar}  key={index}/>
                        )
                    }) : <h3 style={{'color': '#666', 'userSelect': 'none'}}>Чаты не найдены</h3>}
                </motion.section>
            </aside>
            <div className={styles.container}>
                {children}
            </div>
        </section>
    )
}

export default SideBar;