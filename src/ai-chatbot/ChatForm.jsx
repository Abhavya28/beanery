import { ArrowUp } from "lucide-react";
import React, { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";

    // Update chat history with the user's message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // Update chat history with the bot's response
    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);

      // Call the function to generate the bot's response
      generateBotResponse([
        ...chatHistory,
        { role: "user", text: `Using the details provided above, please address this query: ${userMessage}` },
      ]);
    }, 600);
  };

  return (
    <div className="p-2 w-full max-w-md mx-auto">
      <form
        action="#"
        onSubmit={handleFormSubmit}
        className="flex items-center justify-between border-2 border-gray-400 focus-within:border-background rounded-full p-1.5 gap-2 w-full transition-colors"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Message..."
          required
          className="w-full bg-transparent pl-3 pr-1 py-1 outline-none text-gray-800 placeholder-gray-500"
        />

        <button
          type="submit"
          className="bg-background hover:bg-background/40 transition-colors rounded-full h-9 w-9 flex items-center justify-center text-white shrink-0"
        >
          <ArrowUp size={18} />
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
