'use client'
import styles from './Not.module.css';
import { motion } from 'framer-motion';
import useNotification from '@/zustand/useNotification';
import { useEffect } from 'react';

interface NotPropsType {
    text: string,
}

const Not: React.FC<NotPropsType> = ({ text }) => {


    const { setNotification } = useNotification();

    useEffect(() => {
        setTimeout(() => setNotification(''), 4000);
    }, []);

    const Variants = {
        hidden: {
            y: -200,
            scale: 0
        },
        visible: {
            y: 0,
            scale: 1
        }
    }

    return (
        <motion.section initial={'hidden'} animate={'visible'} variants={Variants} className={styles.not} >
            <p>{text}</p>
            <motion.div
            initial={{
                width: 0
            }}
            animate={{
                width: 210,
                transition: { duration: 4, type: 'just' }
            }}
             className={styles.progress}></motion.div>
        </motion.section>
    )
}

export default Not;