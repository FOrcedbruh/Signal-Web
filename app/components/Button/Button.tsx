import styles from './Button.module.css';

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
        <button disabled={isDisabled} type={type} onClick={action} style={{
            'width': w,
            'height': h,
            'cursor': isDisabled ? 'not-allowed' : 'pointer',
            'backgroundColor': isDisabled ? 'gray' : '#73fa75'
        }} className={styles.button}>
            {text}
        </button>
    )
}

export default Button;