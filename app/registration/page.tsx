'use client'
import { useForm } from "react-hook-form";
import styles from './page.module.css';
import Button from "../components/Button/Button";
import Link from "next/link";
import { instance } from "@/authInstance/instance";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Registration: React.FC = () => {

    const { authUser, setAuthUser } = useAuthContext();

    interface FormStatetype {
        username: string,
        password: string,
        fullname: string,
        gender: string
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

    const router = useRouter();

    useEffect(() => {
        if (authUser) {
            router.push('/signal');
        } else {
            router.push('/registration');
        }
    }, [authUser]);

    const onSubmit = (data: FormStatetype) => {
        const username: string = data.username;
        const password: string = data.password;
        const gender: string = data.gender;
        const fullname: string = data.fullname;

        instance.post('/auth/registration', {
            username,
            fullname,
            password,
            gender
        }).then(res => {
            localStorage.setItem('chat-user', JSON.stringify(res.data));
            // @ts-ignore
            setAuthUser(res.data);
        });

        
        
        reset();
    }

    return (
        <section className={styles.window}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h1>Создайте аккаунт</h1>
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
                    <label htmlFor="fullname">Полное имя</label>
                    <input type="text" placeholder="Владимир Путин" {...register('fullname', {
                        required: 'Вы безымянный?'
                    })}/>
                </div>
                <div className={styles.genderCheckboxes}>
                    <p>Выберите пол</p>
                    <div className={styles.gender}>
                        <input defaultChecked type="radio" {...register('gender', {
                            required: 'Выберите пол'
                        })} value={'male'}/>
                        <label htmlFor="gender">Мужской</label>
                    </div>
                    <div className={styles.gender}>
                        <input type="radio" {...register('gender', {
                            required: 'Выберите пол'
                        })} value={'female'}/>
                        <label htmlFor="gender">Женский</label>
                    </div>
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
            <div>У вас уже есть аккаунт? <Link href={'/login'}>Войти</Link></div>
        </section>
       
    )
}

export default Registration;