import { create } from "zustand";
import { Socket, io } from "socket.io-client";

interface ChatStore {
  userName: string,
  socket: Socket | null;
  isConnected: boolean;
  messages: any[];
  typers: string[];
  initSocket: () => void;
  joinRoom: (username: string) => void;
  sendMessage: (message: any) => void;
  storeName: (username: string) => void;
}


export const useChatStore = create <ChatStore>((set, get) => ({
    userName: "",
    socket: null,
    isConnected: false,
    messages: [],
    typers: [],
    initSocket: ()=> {
        const socket = io('http://localhost:4600', {
            reconnectionAttempts: 5,
        });

        socket.on('connect', ()=> {
            set({isConnected: true})
        })

        socket.on('chatMessage', (msg)=> {
            set((state)=> ({messages: [...state.messages, msg]}))
        })

        socket.on('roomNotice', (userName)=> {
            console.log(`${userName} has joined.`)
        })

        set({socket})
    },
    joinRoom: (userName)=> {
        const {socket} = get();
        if(socket) socket.emit('joinRoom', userName)

    },
    sendMessage: (msg)=> {
        const {socket} = get();

        console.log('msg--', msg, 'socket', socket)
        if(socket) socket.emit('chatMessage', msg)
        set((state)=> ({messages: [...state.messages, msg]}))
    },
    storeName: (userName: string)=> {
        set({userName})
    }

}));

