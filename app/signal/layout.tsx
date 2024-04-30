'use client'
import styles from './layout.module.css';
import Conversation from '../components/Conversation/Conversation';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/authContext';
import { useEffect } from 'react';





const SideBar = ({children}: {children: React.ReactNode}) => {

    const router = useRouter();

    const { authUser } = useAuthContext();

    useEffect(() => {
        if (!authUser) {
            router.push('/login');
        }
    }, [authUser]);

    return (
        <section className={styles.window}>
            <aside className={styles.aside}>
                <section className={styles.search}>
                    <input type="text" placeholder='Поиск'/>
                </section>
                <section className={styles.chats}>
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                </section>
            </aside>
            <div className={styles.container}>
                {children}
            </div>
        </section>
    )
}

export default SideBar;