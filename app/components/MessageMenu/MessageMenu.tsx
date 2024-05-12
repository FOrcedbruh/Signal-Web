'use client'
import { motion } from 'framer-motion';
import styles from './MessageMenu.module.css';
import copyIcon from './../../../images/icons/copyIcon.svg';
import deleteIcon from './../../../images/icons/deleteIcon.svg';
import editIcon from './../../../images/icons/editIcon.svg';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { instance } from '@/authInstance/instance';
import useNotification from '@/zustand/useNotification';



interface MessageMenuProps {
    textToCopy: string,
    message_id?: string,
    close: Dispatch<SetStateAction<boolean>>,
    isVisible: boolean,
    senderId: string | undefined,
    receiverId: string | undefined,
    index: number
}


const MessageMenu: React.FC<MessageMenuProps> = ({message_id, senderId, receiverId,  textToCopy, index, isVisible, close}) => { 

    const { setNotification } = useNotification();

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(textToCopy);
        setNotification('Сообшение скопировано');
    }



    const deleteMessage = async  () => {
        await instance.post('/messages/delete', {
            _id: message_id,
            senderId,
            receiverId,
            index
        }).then(res => {
            console.log(res.data);
            setNotification(res.data.message);
        });
    }

    return (
        <motion.ul onClick={() => close(false)} initial={{
            scale: 0,
            x: -20
        }}
        animate={{
            scale: 1,
            x: 0
        }}
         className={styles.menu}>
            <li onClick={copyToClipboard}>скопировать <Image alt='' src={copyIcon} width={24} height={24}/></li>
            <li onClick={deleteMessage}>удалить <Image src={deleteIcon} alt='' width={24} height={24}/></li>
            <li>изменить <Image alt='' src={editIcon} width={24} height={24}/></li>
        </motion.ul>
    )
}



export default MessageMenu;