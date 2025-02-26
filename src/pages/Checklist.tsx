
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Checklist = () => {
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
        <h1 className="text-4xl font-bold mb-8">K1 Visa Document Checklist</h1>
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
      </motion.main>
    </div>
  );
};

export default Checklist;
