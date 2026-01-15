const Header = ({userName, typers}: {userName: string, typers: string[] | []}) => {

  const initials = userName.split('')[0]?.toUpperCase()
  return (
    <div className="flex justify-between align-center p-5 border-b border-gray-100">
      <div className="flex align-center text-sm">
        <div className="text-white flex justify-center items-center rounded-full bg-green-500 w-9 h-9 mr-2">
            {initials}
        </div>
        <div className="flex flex-col align-baseline">
            <span className="text-sm text-gray-500">Group Chat</span>
            <span className="text-sm text-gray-500">{typers.length ? typers.join(',')  + ' is typing...' : ''} </span>
        </div>
      </div>
      <div>
         <span className="text-sm text-gray-500">Signed in as </span>
         <span className="text-sm font-bold">{userName}</span>

      </div>
    </div>
  );
};

export default Header;
