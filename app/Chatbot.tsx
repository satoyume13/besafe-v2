"use client";
import { useState, useEffect, useRef } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! How can Besafe protect your business today?" }
  ]);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when messages change or chat opens
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userText = inputValue.toLowerCase();
    setMessages((prev) => [...prev, { role: "user", text: inputValue }]);
    setInputValue("");

    // Simulated Smart Response Logic
    setTimeout(() => {
      let botResponse = "I've received your inquiry. A Besafe analyst will respond shortly.";

      if (userText.includes("hack") || userText.includes("attack") || userText.includes("emergency")) {
        botResponse = "🚨 CRITICAL: Our Incident Response team in Riyadh has been alerted. Please stay active.";
      } 
      else if (userText.includes("price") || userText.includes("cost") || userText.includes("audit")) {
        botResponse = "We offer competitive security audits for the KSA market. Check our 'About' page for details.";
      }
      else if (userText.includes("hi") || userText.includes("hello")) {
        botResponse = "Welcome to Besafe. How can we secure your digital frontier today?";
      }

      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans flex flex-col items-end gap-3">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header - Besafe Deep Green */}
          <div className="bg-[#1b4332] p-4 text-white">
            <p className="font-bold text-sm text-white">Besafe Security Assistant</p>
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-[#52b788] rounded-full animate-pulse"></span>
               <p className="text-[10px] text-emerald-200 uppercase tracking-widest font-medium">System Secure</p>
            </div>
          </div>
          
          {/* Message History */}
          <div 
            ref={scrollRef}
            className="h-72 overflow-y-auto p-4 bg-[#f7fdfa] space-y-4 flex flex-col scroll-smooth"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                  msg.role === "user" 
                    ? "bg-[#2d6a4f] text-white rounded-br-none" 
                    : "bg-white border border-emerald-100 text-slate-700 rounded-bl-none"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t bg-white flex items-center gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Secure message..." 
              className="flex-1 p-2 outline-none text-sm bg-slate-50 rounded-lg focus:ring-1 focus:ring-emerald-500 transition-all"
            />
            <button 
              onClick={handleSend}
              className="bg-[#1b4332] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#081c15] transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Help Label (Visible only when chat is closed) */}
      {!isOpen && (
        <div className="relative bg-[#1b4332] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-lg animate-bounce border border-emerald-500/20">
          Help
          {/* Small triangle arrow pointing down */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1b4332] rotate-45"></div>
        </div>
      )}

      {/* Main Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#1b4332] hover:bg-[#081c15] text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 border border-emerald-500/30 flex items-center justify-center"
      >
        <span className="text-xl leading-none">
          {isOpen ? "✖" : "🛡️"}
        </span>
      </button>
    </div>
  );
}