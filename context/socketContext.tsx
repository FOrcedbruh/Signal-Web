'use client'
import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./authContext";
import { io } from "socket.io-client";


export const SocketContext = createContext<any>('');

export const useSocketContext = () => {
    return useContext(SocketContext);
}


export const SocketContextProvider = ({children}: {children: React.ReactNode}) => {

    const [socket, setSocket] = useState<any>(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    //@ts-ignore
    const userId: string = authUser?._id;

    //@ts-ignore
    useEffect(() => {
        if (authUser) {
        const socket = io('http://localhost:3124', {
            query: {
                userId
            }
        });

        setSocket(socket);

        socket.on('getOnlineUsers', (users) => {
            setOnlineUsers(users);
        })

        return () => socket.close();
        }  else {
            if(socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    )
}