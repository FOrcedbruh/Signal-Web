import styles from './Button.module.css';
import { motion } from 'framer-motion';

interface ButtonPropsType {
    action?: () => any,
    text: string,
    w: number,
    h: number,
    type?: 'button' | 'submit' | 'reset',
    isDisabled?: boolean
}


const Button: React.FC<ButtonPropsType> = ({action, text, w, h, type, isDisabled}) => {

    return (
        <motion.button animate={{
            backgroundColor: isDisabled ? 'gray' : '#73fa75'
        }} whileTap={{
            scale: 0.8,
        }} disabled={isDisabled} type={type} onClick={action} style={{
            'width': w,
            'height': h,
            'cursor': isDisabled ? 'not-allowed' : 'pointer',
        }} className={styles.button}>
            {text}
        </motion.button>
    )
}

export default Button;