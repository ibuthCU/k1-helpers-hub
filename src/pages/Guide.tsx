
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

const Guide = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="container mx-auto px-4 pt-24"
      >
        <h1 className="text-4xl font-bold mb-8">K1 Visa Guide</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Welcome to our comprehensive guide on the K1 visa process. Here you'll find
            step-by-step instructions and important information to help you navigate
            your journey.
          </p>
          {/* Placeholder for guide content */}
          <p className="text-muted-foreground">
            Guide content coming soon...
          </p>
        </div>
      </motion.main>
    </div>
  );
};

export default Guide;
