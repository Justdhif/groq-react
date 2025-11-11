import { useEffect, useRef } from "react";
import LoadingSpinner from "./LoadingSpinner";

function InputForm({ inputRef, isLoading, handleSubmit, handleKeyDown }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const adjustHeight = () => {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    };

    textarea.addEventListener("input", adjustHeight);
    return () => textarea.removeEventListener("input", adjustHeight);
  }, []);

  return (
    <form
      className="flex flex-col gap-4 w-full mb-8"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="relative w-full py-3 px-4 text-white rounded-xl bg-gray-800 border border-gray-700">
        <textarea
          ref={(el) => {
            textareaRef.current = el;
            if (inputRef) inputRef.current = el;
          }}
          className="w-full border-none focus:outline-none placeholder-gray-500 overflow-hidden resize-none"
          placeholder="Ask Groq AI anything..."
          id="content"
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          rows={1}
          style={{
            minHeight: "60px",
            maxHeight: "200px",
          }}
        />
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center border border-white py-1 px-2 rounded-full">
            <img
              src="/assets/logo.png"
              alt=""
              className="w-6 h-6 object-cover"
            />
            <h3 className="text-[14px] font-bold ml-2">llama3</h3>
          </div>

          <button
            className={`py-2 px-4 rounded-lg font-bold transition-all duration-200 ${
              isLoading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
            }`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <LoadingSpinner /> : "Ask"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default InputForm;
