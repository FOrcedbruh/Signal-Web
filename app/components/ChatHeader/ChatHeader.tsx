import Image from "next/image"
import styles from './ChatHeader.module.css';
import { motion } from "framer-motion";

interface HeaderPropsType {
    avatar: string,
    username: string
}


const ChatHeader: React.FC<HeaderPropsType> = ({username, avatar}) => {


    return (
        <header className={styles.header}>
            <Image src={avatar} alt="" width={40} height={40} priority/>
            <h3>{username}</h3>
        </header>
    )
}

export default ChatHeader;