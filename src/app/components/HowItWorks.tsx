import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ClipboardList, Wrench, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Tell Us How You Work",
    description: "Fill in your onboarding form — your hours, your rules, how you talk to customers. Then we jump on a call to make sure we've got everything right.",
  },
  {
    icon: Wrench,
    title: "2. We Build Your Digital Receptionist",
    description: "We configure your receptionist from scratch based on how you actually run your business. Not a generic template — your setup, built for you.",
  },
  {
    icon: TrendingUp,
    title: "3. We Monitor and Keep Improving",
    description: "We watch how your receptionist is performing and keep tuning it. If something's not right, we fix it. You get a solution that keeps getting better.",
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
            We build it. <span className="text-orange-500">We improve it.</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            We take the time to understand your trade before we build anything.
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