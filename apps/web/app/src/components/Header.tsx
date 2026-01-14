const Header = () => {
  return (
    <div className="flex justify-between align-center p-5 border-b border-gray-100">
      <div className="flex align-center text-sm">
        <div className="text-white flex justify-center items-center rounded-full bg-black w-7 h-7 mr-2">
            R
        </div>
        <span className="text-sm text-gray-500">Rohit</span>
      </div>
      <span className="text-sm text-gray-500">Rohit is typing...</span>
    </div>
  );
};

export default Header;
