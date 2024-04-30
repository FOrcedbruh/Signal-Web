import styles from './Conversation.module.css';
import Image from 'next/image';

const Conversation: React.FC = () => {

    return (
        <article className={styles.conv}>
            <Image src={'https://avatar.iran.liara.run/public/boy'} alt='' width={40} height={40}/>
            <p>Ilya</p>
        </article>
    )
}

export default Conversation;