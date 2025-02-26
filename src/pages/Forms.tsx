
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

const Forms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="container mx-auto px-4 pt-24"
      >
        <h1 className="text-4xl font-bold mb-8">K1 Visa Forms</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Access and download all the necessary forms for your K1 visa application
            process. Each form comes with helpful instructions and tips.
          </p>
          {/* Placeholder for forms content */}
          <p className="text-muted-foreground">
            Forms content coming soon...
          </p>
        </div>
      </motion.main>
    </div>
  );
};

export default Forms;
