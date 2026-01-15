'use client'

import Modal from './src/components/Modal';
import { useRouter } from 'next/navigation'
import { useRef } from 'react';
import { useChatStore } from './src/store/chatStore';

export default function Home() {
  const router = useRouter();
  const {joinRoom, storeName}  = useChatStore()

  const submitHandler = (val: string) => {
    joinRoom(val)
    storeName(val)
    router.push('/chat')
  }

  return (
    <div>
      <Modal
        modalBody = {'Enter your name to start chatting. This will be used to identify'}
        submitBtn = {'Submit'}
        submitHandler = {submitHandler}
      />
    </div>
  );
}
