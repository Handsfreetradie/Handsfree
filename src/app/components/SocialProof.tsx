import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const others = [
  "Generic setup — same for every business",
  "You figure it out yourself",
  "No one checks if it's working",
  "Pay monthly, hope for the best",
  "Support tickets that go nowhere",
  "Set and forget",
];

const handsfree = [
  "Custom-built around how your trade works",
  "We set it up with you on a call",
  "We actively monitor every call",
  "We're invested in your results, not just your subscription",
  "Real people you can actually reach",
  "Constantly improving your setup over time",
];

export function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 text-gray-900">
            Not like the <span className="text-orange-500">rest.</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Most AI phone tools take your money and leave you to work it out. We actually stick around.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Others column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200"
          >
            <h3 className="text-xl sm:text-2xl text-gray-400 mb-6">Other AI tools</h3>
            <ul className="space-y-4">
              {others.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Handsfree column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-900 rounded-3xl p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl text-white mb-6">Handsfree</h3>
            <ul className="space-y-4">
              {handsfree.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
