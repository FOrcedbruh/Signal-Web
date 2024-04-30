'use client';
import { useForm } from "react-hook-form";
import styles from './page.module.css';
import Button from "../components/Button/Button";
import Link from "next/link";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { instance } from "@/authInstance/instance";

const Login: React.FC = () => {

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

    const onSubmit = (data: FormStatetype) => {
        const username: string = data.username;
        const password: string = data.password;

        instance.post('/auth/login', {
            username,
            password
        }).then(res => {
            localStorage.setItem('chat-user', JSON.stringify(res.data));
            //@ts-ignore
            setAuthUser(res.data);
        })
        reset();
    }

    return (
        <section className={styles.window}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h1>Войдите в свой аккаунт</h1>

                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="V.V. Putin" {...register('username', {
                        required: 'У вас нет имени?',
                        minLength: {
                            value: 2,
                            message: 'Минимум 2 символа'
                        }
                    })}/>
                </div>
                <div>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" placeholder="..." {...register('password', {
                        required: 'А как же пароль?',
                        minLength: {
                            value: 2,
                            message: 'Минимум 6 символов'
                        }
                    })}/>
                </div>
                <Button isDisabled={!isValid} type="submit" text="Войти" w={220} h={40}/>
            </form>
            <div>У вас еще нет аккаунта? <Link href={'/registration'}>Зарегистрироваться</Link></div>
        </section>
       
    )
}

export default Login;