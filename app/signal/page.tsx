import styles from './layout.module.css';


const Page: React.FC = () => {


    return (
        <div className={styles.startWindow}>
            <h1>Добро пожаловать с <span>Signal</span></h1>
            <h3>Выберите чат, чтобы начать общаться</h3>
        </div>
    )
}

export default Page;