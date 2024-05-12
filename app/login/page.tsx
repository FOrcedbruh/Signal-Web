'use client';
import { useForm } from "react-hook-form";
import styles from './page.module.css';
import Button from "../components/Button/Button";
import Link from "next/link";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { instance } from "@/authInstance/instance";
import { motion } from "framer-motion";
import eyeIcon from './../../images/icons/eyeIcon.svg';
import nonEyeIcon from './../../images/icons/nonEyeIcon.svg';
import Image from "next/image";
import useNotification from "@/zustand/useNotification";
import Not from "../components/Not/Not";


const Login: React.FC = () => {

    const { notification, setNotification } = useNotification();

    const [eye, setEye] = useState<boolean>(false);

    const { authUser, setAuthUser} = useAuthContext();

    const router = useRouter();

    useEffect(() => {
        if (authUser) {
            router.push('/signal')
        } else {
            router.push('/login')
        }
    }, [authUser]);

    interface FormStatetype {
        username: string,
        password: string
    }

    const {
        handleSubmit,
        formState: {
            errors,
            isValid
        },
        register,
        reset
    } = useForm<FormStatetype>({
        mode: 'onChange'
    });

    const onSubmit = async (data: FormStatetype) => {
        const username: string = data.username;
        const password: string = data.password;

        const res = await instance.post('/auth/login', {
            username,
            password
        });

        if (res.status == 400) {
            console.log('Ошибка')
        } else {
            localStorage.setItem('chat-user', JSON.stringify(res.data));
         //@ts-ignore
         setAuthUser(res.data);
        }
        reset();
    }


    const variants = {
        hidden: {
            opacity: 0,
        },
        visible: (custom: any) =>  ({
            opacity: 1,
            transition: { delay: custom * 0.3, duration: 0.5}
        })
    }

    return (
        <section  className={styles.window}>
            {notification && <Not text={notification} />}
            {errors.username?.message && 
            <div className={styles.error} style={{'top': `${5 * 1}%`}}>
                {errors.username?.message}
            </div>}
            {errors.password?.message &&
            <div className={styles.error} style={{'top': `${5 * 2.5}%`}}>
                {errors.password?.message}
            </div>}
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <motion.h1 custom={1} initial={'hidden'} animate={'visible'} variants={variants}>Войдите в свой аккаунт</motion.h1>

                <motion.div custom={2} initial={'hidden'} animate={'visible'} variants={variants}>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="V.V. Putin" {...register('username', {
                        required: 'У вас нет имени?',
                        minLength: {
                            value: 2,
                            message: 'Имя минимум 2 символа'
                        }
                    })}/>
                </motion.div>
                <motion.div custom={3} initial={'hidden'} animate={'visible'} variants={variants}>
                    <label onClick={() => setEye(!eye)} htmlFor="password">Пароль <Image alt="" width={20} height={20} src={eye ? nonEyeIcon : eyeIcon }/></label>
                    <input type={`${eye ? 'text' : 'password'}`} placeholder="..." {...register('password', {
                        required: 'А как же пароль?',
                        minLength: {
                            value: 6,
                            message: 'Пароль минимум 6 символов'
                        }
                    })}/>
                </motion.div>
                <Button isDisabled={!isValid} type="submit" text="Войти" w={220} h={40}/>
            </form>
            <motion.div custom={4} initial={'hidden'} animate={'visible'} variants={variants}>У вас еще нет аккаунта? <Link href={'/registration'}>Зарегистрироваться</Link></motion.div>
        </section>
       
    )
}

export default Login;