
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Guide = () => {
  const { toast } = useToast();

  const compilePacket = () => {
    toast({
      title: "Packet Compilation Started",
      description: "We're preparing your visa packet for download...",
    });
    // Future implementation: Add actual packet compilation logic
  };

  const steps = [
    {
      title: "Check Eligibility",
      description: "Ensure you meet the requirements for a K1 visa.",
      link: "https://www.uscis.gov/family/family-of-us-citizens/visas-for-fiancees-of-us-citizens",
      linkText: "Read more"
    },
    {
      title: "Gather Required Documents",
      description: "Collect necessary documents like Form I-129F, proof of relationship, and financial evidence.",
      link: "https://www.uscis.gov/i-129f",
      linkText: "Form I-129F Details"
    },
    {
      title: "Submit Your Petition",
      description: "File Form I-129F with the correct fee and supporting documents.",
      link: "https://www.uscis.gov/forms/filing-fees",
      linkText: "Check Fees"
    },
    {
      title: "Wait for Processing",
      description: "Monitor your case status online and prepare for next steps.",
      link: "https://egov.uscis.gov/casestatus/landing.do",
      linkText: "Check Case Status"
    },
    {
      title: "Attend the Interview",
      description: "Attend the K1 visa interview at the U.S. embassy with your fiancé(e).",
      link: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/interview.html",
      linkText: "Interview Guide"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="container mx-auto px-4 pt-24 pb-16"
      >
        <h1 className="text-4xl font-bold mb-8">K1 Visa Application Guide</h1>
        <p className="text-lg mb-12 text-muted-foreground">
          Follow the steps below to complete your K1 visa application. Click on each step for official USCIS details.
        </p>

        <div className="grid gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3">
                    Step {index + 1}: {step.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    {step.linkText}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={compilePacket}
            className="animate-fade-in"
          >
            Compile Visa Packet
          </Button>
        </div>
      </motion.main>
    </div>
  );
};

export default Guide;
