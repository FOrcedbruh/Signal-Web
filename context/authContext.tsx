'use client'
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { IUser } from "@/types/IUser";

interface IContext {
    authUser: string | null | undefined | IUser,
    setAuthUser?: Dispatch<SetStateAction<string | null | undefined | IUser>>
}

export const AuthContext = createContext<IContext>({
    authUser: '',
});

export const useAuthContext = () => {
    return useContext(AuthContext);
}


export const AuthContextProvider = ({children}: {children: React.ReactNode}) => {

    const [authUser, setAuthUser] = useState<string | null | undefined | IUser>(null);

    useEffect(() => {
        //@ts-ignore
        setAuthUser(JSON.parse(localStorage.getItem('chat-user')));
    }, []);
    return (
            <AuthContext.Provider value={{ authUser, setAuthUser }}>
                {children}
            </AuthContext.Provider>
        
    )
}