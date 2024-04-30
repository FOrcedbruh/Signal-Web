import Image from "next/image"
import styles from './ChatHeader.module.css';





const ChatHeader: React.FC = () => {


    return (
        <header className={styles.header}>
            <Image src={'https://avatar.iran.liara.run/public/boy'} alt="" width={40} height={40}/>
            <h3>Lexa</h3>
        </header>
    )
}

export default ChatHeader;