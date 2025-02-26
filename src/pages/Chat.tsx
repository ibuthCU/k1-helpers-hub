
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

const Chat = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="container mx-auto px-4 pt-24"
      >
        <h1 className="text-4xl font-bold mb-8">Chat Support</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Get instant answers to your K1 visa questions through our AI-powered chat
            system.
          </p>
          {/* Placeholder for chat interface */}
          <p className="text-muted-foreground">
            Chat interface coming soon...
          </p>
        </div>
      </motion.main>
    </div>
  );
};

export default Chat;
