import { useState, useRef } from "react";
import { requestToGroq } from "./utils/groq";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ResponseDisplay from "./components/ResponseDisplay";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = async () => {
    if (!inputRef.current?.value.trim()) return;

    setIsLoading(true);
    setData("");

    setTimeout(async () => {
      try {
        const ai = await requestToGroq(inputRef.current.value);
        setData(ai);
      } catch (error) {
        setData("Error: " + error.message);
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <main className="flex flex-col max-w-3xl w-full mx-auto min-h-screen py-8 px-4">
      <Header />

      <InputForm
        inputRef={inputRef}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
      />

      <ResponseDisplay data={data} isLoading={isLoading} />

      <Footer />
    </main>
  );
}

export default App;
