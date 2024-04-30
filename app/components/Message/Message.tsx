import styles from './Message.module.css';
import Image from 'next/image';

const Message: React.FC = () => {


    return (
        <div className={styles.message}>
            <Image src={'https://avatar.iran.liara.run/public/boy'} alt='' width={40} height={40}/>
            <div>
                <p>Hello, I am Ilya</p>
            </div>
        </div>
    )
}

export default Message;