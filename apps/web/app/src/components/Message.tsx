
const Message = ({
    messageInfo
}) => {

    const mine = messageInfo.userName == "Rohit";
    console.log("mine", mine)
    return (
        <div className={`flex ${mine ? "justify-end": "justify-start"} mt-1`}>
            <div className={`max-w-5/10 min-w-[120px] min-h-[50px] shadow-sm rounded-[10px] ${mine ? "bg-lime-100" : "bg-gray-100"} px-2 py-1 flex flex-col`}>
                <p className="text-xs font-bold mb-1">
                    {messageInfo.userName}
                </p>
                <p className="text-xs">
                    {messageInfo.content}
                </p>
            </div>
        </div>
    )
}

export default Message