"use client";

import { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Message from './Message';
import { useChatStore } from '../store/chatStore';



const ChatWindow = () => {
  const timer = useRef<any>(null)
  const {sendMessage, messages, userName, socket} = useChatStore()
  const [message, setMessage] = useState<string>('')
  const [typers, setTypers] = useState<string[] | []>([])


  useEffect(()=> {

    socket?.on('typing', (userName)=> {

        setTypers((prev)=> {
            const isExist = prev.find((el)=> el ==userName);
            if(isExist){
               return  prev
            }else{
                return [...prev, userName] 
            }
        })
    })

    socket?.on('stopTyping', (userName)=> {

        setTypers((prev)=> {
            return prev.filter(el=> el !== userName)
        })
    })

  }, [])

  useEffect(()=> {

    if(message){
        socket?.emit('typing', userName)
    }

    clearTimeout(timer.current)

    timer.current = setTimeout(()=> {
        socket?.emit('stopTyping', userName)

    }, 1000)

    

  }, [message, userName])

  const handleMessage = () => {

    const msg = {
        id: Date.now(),
        userName, 
        content: message,
        timeStamp: Date.now()
    }

    sendMessage(msg)
    setMessage('')

  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="w-xl h-9/10 rounded-lg bg-white shadow-lg">
        <Header userName={userName} typers = {typers}/>
        <div className="h-[78%] bg-gray-50 p-2 overflow-auto">
            {
                messages.map(message=> {
                    return <Message
                        key = {message.id}
                        messageInfo = {message}
                        currentUser = {userName}
                    />
                })
            }
        </div>
        <div className = "py-2 flex items-baseline w-9/10 m-auto">
            <input
                autoFocus
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-9/10 rounded-md border border-gray-200 px-3 py-2 placeholder-gray-400 outline-green-500"
                placeholder="Your name (e.g. John Doe)"
            />
            <button
                disabled={!message.length}
                onClick = {handleMessage}
                className={`ml-2 block cursor-pointer rounded-[10px] ${message.length ? "bg-green-500": "bg-gray-300" } px-4 py-1.5 font-medium text-white`}
            >
                Send
            </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
