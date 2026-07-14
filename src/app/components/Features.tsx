import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { PhoneCall, ClipboardList, Wrench, Search, RefreshCw, Users } from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Custom Onboarding Form",
    description: "Tell us your hours, your trade, your rules. We use this to build your AI correctly from day one — not guess.",
  },
  {
    icon: Users,
    title: "We Get on a Call With You",
    description: "Before we build anything, we jump on a call to understand exactly how your business works. No assumptions.",
  },
  {
    icon: Wrench,
    title: "Built From Scratch for You",
    description: "Your AI is configured around your specific business. Not a generic template you're left to tweak yourself.",
  },
  {
    icon: Search,
    title: "We Monitor Every Call",
    description: "We actively check how your AI is performing. If it's not handling something right, we catch it and fix it.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Improvements",
    description: "Your business changes — we keep your AI sharp. Regular tune-ups included, no extra charge.",
  },
  {
    icon: PhoneCall,
    title: "Real Support, Real People",
    description: "Got a question or want to change something? You can actually reach us. No ticket queue, no runaround.",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-12 sm:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-4 sm:mb-6 tracking-tight px-2">
            More than software.
            <br />
            <span className="text-orange-500">A service.</span>
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
            We're not another app that takes your money and disappears. We're invested in making your setup actually work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-3xl p-8 h-full border border-gray-100 hover:border-orange-500 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow border border-gray-200">
                  <feature.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}