'use client'
import { useState,useEffect } from "react";
import { instance } from "@/authInstance/instance";
import { IConversation } from "@/types/IConversation";


const useGetConversations = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [conversations, setConversations] = useState<IConversation[]>([]);


    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);

            try {
                await instance.get('users/').then(res => {
                    setConversations(res.data);
                });
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        getConversations();
    }, []);

    return { loading, conversations };
}

export default useGetConversations;