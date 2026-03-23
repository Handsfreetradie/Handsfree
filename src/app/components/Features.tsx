import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Brain, Globe, Clock, Workflow, BarChart, Headphones } from "lucide-react";
import { CRMCarousel } from "./CRMCarousel";

const features = [
  {
    icon: Brain,
    title: "Natural Conversations",
    description: "Advanced AI that understands context, intent, and responds like a real person.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never close. Your AI receptionist works around the clock, every day of the year.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Communicate with customers in their preferred language, automatically.",
  },
  {
    icon: Workflow,
    title: "Custom Business Logic",
    description: "Build custom workflows and automations tailored to your unique business needs.",
  },
  {
    icon: BarChart,
    title: "Real-Time Analytics",
    description: "Track call metrics, customer sentiment, and business insights in real-time.",
  },
  {
    icon: Headphones,
    title: "Seamless Transfers",
    description: "Smart routing to your team when human interaction is needed.",
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
            Everything you need.
            <br />
            <span className="text-gray-400">Nothing you don't.</span>
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
            Built for modern businesses who demand excellence
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
        
        {/* CRM Integrations Carousel */}
        <CRMCarousel />
      </div>
    </section>
  );
}