import { useEffect, useRef, useState } from "react";
import { MessageSquare, X } from "lucide-react";
import Header from "./Header";
import MessageBox from "./MessageBox";
import ChatForm from "./ChatForm";
import { companyInfo } from "./companyInfo";

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { hideInChat: true, role: "model", text: companyInfo },
  ]);
  const chatBodyRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const generateBotResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };

    const formattedHistory = history
      .filter((msg) => msg.text !== "Thinking...")
      .map(({ role, text }) => ({
        role: role === "model" ? "assistant" : "user",
        content: text,
      }));

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_HF_TOKEN}`,
      },
      body: JSON.stringify({
        model: "deepseek-ai/DeepSeek-V4-Pro:novita",
        messages: formattedHistory,
        stream: false,
      }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_HF_API_URL,
        requestOptions,
      );

      const data = await response.json();

      // console.log("Status:", response.status);
      // console.log("Response:", data);

      if (!response.ok) {
        throw new Error(JSON.stringify(data));
      }

      const apiResponseText =
        data.choices[0].message.content || "No response received";

      // Clean up bold markings if any
      const cleanedText = apiResponseText
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();

    //   console.log(apiResponseText);

      updateHistory(cleanedText);
    } catch (error) {
      console.log("Router API Error:", error);
      updateHistory("Sorry, server drops request. Please try again.");
    }
  };

  useEffect(() => {
    // Auto-scroll whenever chat history updates
    const timer = setTimeout(() => {
      chatBodyRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [chatHistory]);

  return (
    <div>
      <div
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="bg-background rounded-full w-14 h-14 flex items-center justify-center fixed bottom-4 right-4 text-white z-50 shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        {isChatOpen ? <X size={22} /> : <MessageSquare size={22} />}
      </div>
      {isChatOpen && (
        <div className="fixed bottom-16 right-4 w-[300px] bg-white shadow-xl rounded-2xl border border-gray-100 flex flex-col overflow-hidden transition-all ease-out origin-bottom-right animate-in fade-in slide-in-from-bottom-5 zoom-in-95 duration-200 z-20 mb-4">
          <Header />
          <MessageBox ref={chatBodyRef} chatHistory={chatHistory} />
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
