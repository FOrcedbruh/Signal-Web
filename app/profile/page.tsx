'use client'
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useAuthContext } from '@/context/authContext';


const Profile: React.FC = () => {

    const { authUser } = useAuthContext();

    //@ts-ignore
    const avatar = authUser?.avatar;
    //@ts-ignore
    const username = authUser?.username;
    //@ts-ignore
    const fullname = authUser?.fullname;
    return (
        <section className={styles.window}>
            <header>
                <Link href={'/signal'}>Signal</Link>
            </header>
            <div className={styles.container}>
                <div>
                    <Image src={avatar} alt='' width={100} height={100}/>
                </div>
                <div>
                    <h3>{username}</h3>
                    <p>{fullname}</p>
                </div>
            </div>
        </section>
    )
}

export default Profile;