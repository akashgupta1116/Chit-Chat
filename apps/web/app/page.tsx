import { Button } from '@repo/ui/button';
import styles from './page.module.css';
import Modal from './src/components/Modal';
import ChatWindow from './src/components/ChatWindow';

export default function Home() {
  return (
    <div>
      {/* <Button>My button</Button> */}
      {/* <Modal/> */}
      <ChatWindow />
    </div>
  );
}
