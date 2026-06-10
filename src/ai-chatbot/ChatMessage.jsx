import React from "react";
import { Bot } from "lucide-react";

const ChatMessage = ({ chat }) => {
  const isUser = chat.role === "user";

  return (
    !chat.hideInChat && (
      <div
        className={`flex gap-2 items-end ${isUser ? "justify-end" : "justify-start"}`}
      >
        {!isUser && (
          <div className="rounded-full bg-background text-white p-2 h-10 w-10 items-center justify-center">
            <Bot />
          </div>
        )}
        <div
          className={`p-2 rounded-2xl max-w-[75%] ${
            isUser
              ? "bg-background text-white rounded-br-none"
              : "bg-gray-300 rounded-bl-none"
          }`}
        >
          <p className="whitespace-pre-line">{chat.text}</p>
        </div>
      </div>
    )
  );
};

export default ChatMessage;
