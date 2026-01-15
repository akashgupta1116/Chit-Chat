'use client';

import { useEffect } from "react";
import ChatWindow from "../src/components/ChatWindow";

import { useChatStore } from "../src/store/chatStore";
import { useRouter } from "next/navigation";

const Chat = () => {
    const router = useRouter()
    const userName =  useChatStore(state=> state.userName)

    useEffect(()=> {
        if(!userName){
            router.push('/')
        }
    }, [])

    return (
        <ChatWindow/>
    )
}

export default Chat