'use client'
import styles from './Tooltip.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface TooltipPropsType {
    children: React.ReactNode,
    text: string
}


const Tooltip: React.FC<TooltipPropsType> = ({children, text}) => {

    const [visible, setVisible] = useState<boolean>(false);



    return (
        <>
            <div onMouseOver={() => setVisible(true)} onMouseOut={() => setVisible(false)}>{children}</div>
            {visible && <motion.div initial={{
                opacity: 0,
                x: -20
            }}
            animate={{
                opacity: 1,
                transition: { duration: 0.5 },
                x: 0
            }}
            className={styles.main}>
                <p>{text}</p>
             </motion.div>}
        </>
        
    )
}

export { Tooltip };