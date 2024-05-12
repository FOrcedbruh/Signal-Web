import styles from './Button.module.css';
import { motion } from 'framer-motion';

interface ButtonPropsType {
    action?: () => any,
    text: string,
    w: number,
    h: number,
    type?: 'button' | 'submit' | 'reset',
    isDisabled?: boolean,
    isLoading?: boolean
}

const Loader: React.FC = () => {

    return (
        <motion.div 
        animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }} className={styles.loader}>
            
        </motion.div>
    )
}


const Button: React.FC<ButtonPropsType> = ({action, text, w, h, type, isDisabled, isLoading}) => {

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
            {isLoading ? <Loader /> : text}
        </motion.button>
    )
}

export default Button;