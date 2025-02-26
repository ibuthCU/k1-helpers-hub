
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    // Add user message to chat
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);

    try {
      const response = await fetch("/functions/v1/chat-with-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      
      // Add AI response to chat
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response from AI. Please try again.",
        variant: "destructive",
      });
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="flex-1 container mx-auto px-4 pt-24 pb-6"
      >
        <h1 className="text-4xl font-bold mb-8">K1 Visa AI Assistant</h1>
        <div className="prose max-w-none mb-6">
          <p className="text-lg">
            Get instant answers to your K1 visa questions through our AI-powered assistant.
            While our AI provides helpful information, remember that it's not a substitute
            for legal advice.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8">
          <div className="bg-card rounded-lg p-4 mb-4 h-[500px] overflow-y-auto flex flex-col gap-4">
            {messages.length === 0 ? (
              <p className="text-muted-foreground text-center my-auto">
                Start the conversation by asking a question about the K1 visa process.
              </p>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground ml-auto"
                        : "bg-muted"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question here..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </div>
      </motion.main>
    </div>
  );
};

export default Chat;
