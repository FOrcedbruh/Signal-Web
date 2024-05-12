'use client'
import styles from './Menu.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import logoutIcon from './../../../images/icons/logoutIcon.svg';
import supportIcon from './../../../images/icons/supportIcon.svg';
import { instance } from '@/authInstance/instance';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/authContext';
import { Tooltip } from '../Tooltip/Tooltip';

const Menu: React.FC = () => {

    const { authUser } = useAuthContext();

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

    //@ts-ignore
    const avatar: string = authUser?.avatar;


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
                <motion.li variants={listVariants} initial={'initial'} custom={1} animate={'visible'}><Link style={{'color': '#fff', 'textDecoration': 'none'}} href={'/profile'}>Профиль</Link> <Image src={avatar} alt='' width={24} priority height={24}/></motion.li>
                <motion.li variants={listVariants} initial={'initial'} custom={2} animate={'visible'}><Tooltip text='Адрес поддержки support@gmail.com'>Поддержка</Tooltip> <Image priority src={supportIcon} alt='' width={24} height={24}/></motion.li>
                <motion.li variants={listVariants} initial={'initial'} custom={3} animate={'visible'} onClick={logout}>Выйти <Image priority src={logoutIcon} alt='' width={20} height={20}/></motion.li>
            </ul>
        </motion.nav>
    )
}



export default Menu;