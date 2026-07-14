import { motion } from "motion/react";

const crmLogos = [
  { name: "ServiceM8", width: 140 },
  { name: "Simpro", width: 120 },
  { name: "HubSpot", width: 130 },
  { name: "Salesforce", width: 140 },
  { name: "Zoho", width: 100 },
  { name: "JobAdder", width: 120 },
  { name: "WorkflowMax", width: 140 },
  { name: "Fergus", width: 110 },
];

export function CRMCarousel() {
  // Duplicate the logos for seamless loop
  const allLogos = [...crmLogos, ...crmLogos];

  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h3 className="text-2xl text-center text-gray-900 mb-2">
          Works alongside the tools you already use
        </h3>
        <p className="text-gray-600 text-center">
          Handsfree fits into how you already run things — no rip-and-replace
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <motion.div
          className="flex gap-16 items-center"
          animate={{
            x: [0, -1200],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-16"
              style={{ width: `${logo.width}px` }}
            >
              <div className="text-2xl font-bold text-gray-400 whitespace-nowrap">
                {logo.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
