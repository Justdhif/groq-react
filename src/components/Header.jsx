function Header() {
  return (
    <div className="flex flex-col items-center mb-8">
      <h1
        data-testid="web__title"
        className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-2"
      >
        <img src="/assets/logo.png" alt="" className="w-12 inline"/>
        <span className="text-white">roq</span> AI Assistant
      </h1>
      <p className="text-gray-400">Get instant AI-powered responses</p>
    </div>
  );
}

export default Header;
