'use client'
import styles from './ChatFooter.module.css';
import Button from '../Button/Button';
import { useState, ChangeEvent, FormEvent} from 'react';
import useSendMessage from '@/hooks/useSendMessage';

const ChatFooter: React.FC = () => {

    const { sendMessage, loading } = useSendMessage();

    const [text, setText] = useState<string>('');

    const textHandle  = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const onSubmit = async  (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!text) {
            return;
        }
        
        await sendMessage(text);
        setText('');
    }

    return (
        <form onSubmit={(e) => onSubmit(e)} className={styles.footer}>
            <input type="text" placeholder='Написать сообщение...' value={text} onChange={(e) => textHandle(e)}/>
            <Button isDisabled={!text} text='Написать' w={120} h={30} isLoading={loading}/>
        </form>
    )
}

export default ChatFooter;