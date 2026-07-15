import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { PhoneCall, MessageSquare, ArrowUpRight } from "lucide-react";

const points = [
  {
    icon: PhoneCall,
    title: "Your phone stays exactly as it is",
    description:
      "Nothing answers your calls. No receptionist, no scripts. Your customers only ever talk to you.",
  },
  {
    icon: MessageSquare,
    title: "Missed calls get an instant text back",
    description:
      "The caller gets an SMS in your business name straight away, so the lead doesn't go ringing the next number on Google.",
  },
  {
    icon: ArrowUpRight,
    title: "Upgrade later — or don't",
    description:
      "If you like how it works, the full receptionist is there when you're ready. No pressure, no lock-in.",
  },
];

export function SmsOnlySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 text-gray-900 px-2">
            Not sold on a digital receptionist? <span className="text-orange-500">Fair enough.</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            You don't have to hand over your calls to stop losing leads. Start with SMS-only.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bg-white rounded-3xl p-8 h-full shadow-sm border border-gray-200">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 border border-gray-200">
                  <point.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="#pricing"
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full text-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-lg"
          >
            See the SMS-only plan
          </a>
        </motion.div>
      </div>
    </section>
  );
}
