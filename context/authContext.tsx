'use client'
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";


interface IContext {
    authUser: string | null | undefined,
    setAuthUser?: Dispatch<SetStateAction<string | null | undefined>>
}

export const AuthContext = createContext<IContext>({
    authUser: '',
});

export const useAuthContext = () => {
    return useContext(AuthContext);
}


export const AuthContextProvider = ({children}: {children: React.ReactNode}) => {
    const [authUser, setAuthUser] = useState<string | null | undefined>(localStorage.getItem('chat-user'));


    return (
        <AuthContext.Provider value={{authUser, setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}