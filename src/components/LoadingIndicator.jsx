function LoadingIndicator() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="dot-flashing mb-4"></div>
      <p className="text-gray-400">Groq AI is thinking...</p>
    </div>
  );
}

export default LoadingIndicator;
