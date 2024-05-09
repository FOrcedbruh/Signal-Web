'use client'
import styles from './Menu.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { instance } from '@/authInstance/instance';
import { useRouter } from 'next/navigation';

const Menu: React.FC = () => {

    const router = useRouter();

    const listVariants = {
        initial: {
            opacity: 0,
            x: -30
        },  
        visible: (custom:any) => ({
            opacity: 1,
            x: 0,
            transition: { delay: custom * 0.2}
        })
    }

    const logout = async () => {
        localStorage.clear();
        await instance.post('/auth/logout').then(res => {
            console.log(res.data);
        });

        router.push('/');
    }


    return (
        <motion.nav initial={{
            scale: 0,
            y: -300,
        }}
        animate={{
            scale: 1,
            y: 0,
        }}
         className={styles.menu}>
            <ul>
                <motion.li variants={listVariants} initial={'initial'} custom={1} animate={'visible'}>Профиль</motion.li>
                <motion.li variants={listVariants} initial={'initial'} custom={2} animate={'visible'}>Поддержка</motion.li>
                <motion.li variants={listVariants} initial={'initial'} custom={3} animate={'visible'} onClick={logout}>Выйти</motion.li>
            </ul>
        </motion.nav>
    )
}



export default Menu;