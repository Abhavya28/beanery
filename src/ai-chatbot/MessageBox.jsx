import { Bot } from "lucide-react";
import React, { forwardRef } from "react";
import ChatMessage from "./ChatMessage";

const MessageBox = forwardRef(({ chatHistory }, ref) => {
  return (
    <div className="p-4 flex flex-col gap-4 h-[250px] overflow-y-auto scrollbar-thin">
      <div className="flex gap-2 items-end">
        <div className="rounded-full bg-background text-white p-2 h-10 w-10 items-center justify-center">
          <Bot />
        </div>
        <div className="bg-gray-300 p-2 rounded-2xl rounded-bl-none">
          <p className="">
            Welcome to Beanery Cafe! How can I help you today?
          </p>
        </div>
      </div>

      {chatHistory.map((chat, index) => (
        <ChatMessage key={index} chat={chat} />
      ))}

      {/* <div className="flex justify-end">
        <div className="bg-purple-500 p-2 rounded-2xl rounded-br-none text-white max-w-[75%] right-2">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div> */}

      <div ref={ref} />
    </div>
  );
});

export default MessageBox;
