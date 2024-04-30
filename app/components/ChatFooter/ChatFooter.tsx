'use client'
import styles from './ChatFooter.module.css';
import Button from '../Button/Button';
import { useState, ChangeEvent, FormEvent} from 'react';

const ChatFooter: React.FC = () => {

    const [text, setText] = useState<string>('');

    const textHandle  = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setText('');
        console.log(text);
    }

    return (
        <form onSubmit={(e) => onSubmit(e)} className={styles.footer}>
            <input type="text" placeholder='Написать сообщение...' value={text} onChange={(e) => textHandle(e)}/>
            <Button isDisabled={!text} text='Написать' w={120} h={30}/>
        </form>
    )
}

export default ChatFooter;