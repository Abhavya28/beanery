import { Bot } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-background text-white border-b shadow-sm">
      <div className="flex items-center gap-4">
        <div className="bg-white/20 p-1.5 rounded-lg">
          <Bot size={28} className="text-white" />
        </div>
        <div>
          <h1 className="text-lg font-semibold leading-tight">Beanery AI Chatbot</h1>
          <span className="text-sm text-purple-200 flex items-center gap-1">
            <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse"></span>
            Online
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
