"use client"
import { useEffect } from "react"
import { useChatStore } from "../store/chatStore"


const SocketProvider = ({children}: {children: React.ReactNode}) => {
    const {initSocket, socket} = useChatStore()
    useEffect(()=> {
        initSocket()

    return ()=> {
        socket?.removeAllListeners();
    }
    }, [initSocket])

    return <>{children}</>;
}

export default SocketProvider