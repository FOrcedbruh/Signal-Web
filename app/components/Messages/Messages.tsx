import styles from './Messages.module.css';
import Message from '../Message/Message';





const Messages: React.FC = () => {

    return (
        <section className={styles.window}>
            <Message />
            <Message />
        </section>
    )
}

export default Messages;