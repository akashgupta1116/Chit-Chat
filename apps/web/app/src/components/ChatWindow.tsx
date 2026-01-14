import Header from './Header';
import Message from './Message';
const messages = [
    {
        userName: "Raman",
        content: "Hi guys!", 
        timestamp: "sfsdf",
        id: 1
    },
    {
        userName: "Rohit",
        content: "Hi guys fds rferfergfrgeg gergrgfg rbergrger gergerg refergergerg ergregerg regreg!", 
        timestamp: "sfsdf",
        id: 2
    }
]

const ChatWindow = () => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="w-xl h-9/10 rounded-lg bg-white shadow-lg">
        <Header />
        <div className="h-8/10 bg-gray-50 p-2">
            {
                messages.map(message=> {
                    return <Message
                        messageInfo = {message}
                    />
                })
            }
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
