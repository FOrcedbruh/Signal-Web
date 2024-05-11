import styles from './Loader.module.css';
import { motion } from 'framer-motion';


const Loader: React.FC = () => {


    return (
        <div className={styles.window}>
            <motion.div animate={{
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
              }}
            >
            </motion.div>
        </div>
    )
}

export default Loader;