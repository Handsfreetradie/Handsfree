import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Phone, Settings, Zap } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "1. Set Up in Minutes",
    description: "Connect your phone number and customize your AI receptionist's voice and responses.",
  },
  {
    icon: Phone,
    title: "2. Go Live Instantly",
    description: "Your AI starts answering calls immediately. No training required, no hardware needed.",
  },
  {
    icon: Zap,
    title: "3. Watch It Work",
    description: "Monitor calls in real-time, get transcripts, and insights through your dashboard.",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="py-12 sm:py-24 bg-gray-50/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 text-gray-900 px-2">
            Get started in <span className="text-orange-500">three steps</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            From signup to your first answered call in under 5 minutes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 transform translate-x-full" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}