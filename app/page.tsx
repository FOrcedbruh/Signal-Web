'use client'
import styles from './page.module.css';
import Link from 'next/link';



const HomePage: React.FC = () => {

    

    return (
        <main className={styles.main}>
           <h1>Добро пожаловать в <Link href={'/login'}>Signal</Link></h1>
        </main>
    )
}

export default HomePage;