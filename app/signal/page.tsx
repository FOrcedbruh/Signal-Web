'use client'
import styles from './layout.module.css';
import { useAuthContext } from '@/context/authContext';


const Page: React.FC = () => {

    const { authUser } = useAuthContext();
    //@ts-ignore
    const username: string = authUser?.username;

    return (
        <div className={styles.startWindow}>
            <h1>Добро пожаловать в <span>Signal</span>, {username}</h1>
            <h3>Выберите чат, чтобы начать общаться</h3>
        </div>
    )
}

export default Page;