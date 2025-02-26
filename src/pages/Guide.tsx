
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

  const documentSections = [
    {
      title: "1. Pre-Filing / Evidence Before Filing",
      items: [
        {
          subtitle: "Proof of In-Person Meeting",
          documents: [
            "Photographs together (including with friends/family) with time stamps",
            "Travel records (boarding passes, itineraries, hotel receipts)",
            "Communication records (emails, call logs, texts)"
          ]
        },
        {
          subtitle: "Statements from Friends/Family",
          documents: [
            "Letters of support attesting to the bona fide relationship"
          ]
        }
      ]
    },
    {
      title: "2. Form I-129F Supporting Evidence",
      items: [
        {
          subtitle: "Petitioner's U.S. Citizenship",
          documents: [
            "U.S. birth certificate, naturalization certificate, U.S. passport, or Consular Report of Birth Abroad (CRBA)"
          ]
        },
        {
          subtitle: "Evidence of Terminated Marriages (if applicable)",
          documents: [
            "Divorce decrees, annulment orders, or death certificates"
          ]
        },
        {
          subtitle: "Required Photos and Documents",
          documents: [
            "One recent color photograph of both petitioner and beneficiary (taken within 30 days)",
            "Name change documents (if applicable)",
            "Sworn statements from both fiancées affirming intent to marry within 90 days of entry",
            "Filing fee payment"
          ]
        }
      ]
    },
    {
      title: "3. Visa Application Stage",
      items: [
        {
          subtitle: "Required Forms and Documentation",
          documents: [
            "Form DS-160 confirmation page",
            "Valid passport (at least six months validity beyond intended U.S. entry)",
            "Birth certificate (with translation if not in English)",
            "Police certificates from relevant countries",
            "Sealed medical exam report from authorized panel physician",
            "Two 2×2 passport-style photographs",
            "Affidavit of Support (Form I-134) with financial documentation",
            "Evidence of relationship",
            "Visa application fee receipt"
          ]
        }
      ]
    },
    {
      title: "4. Post-Visa Issuance",
      items: [
        {
          subtitle: "Final Steps",
          documents: [
            "Sealed visa packet (do not open)",
            "Marriage certificate (must marry within 90 days of entry)",
            "Form I-485 and supporting documentation for adjustment of status"
          ]
        }
      ]
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

        <h2 className="text-3xl font-bold mt-16 mb-8">Document Checklist</h2>
        <p className="text-lg mb-12 text-muted-foreground">
          Use this comprehensive checklist to ensure you have all required documents for your K1 visa application.
        </p>

        <div className="grid gap-8">
          {documentSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-6">{section.title}</h3>
                  <div className="space-y-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-3">
                        <h4 className="text-lg font-medium text-primary">{item.subtitle}</h4>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          {item.documents.map((doc, docIndex) => (
                            <li key={docIndex}>{doc}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
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
