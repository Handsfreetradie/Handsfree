import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Phone, Play } from "lucide-react";

export function DemoCallSection({ onDemoClick }: { onDemoClick: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="demo" ref={ref} className="py-24 bg-gray-900 text-white relative overflow-hidden scroll-mt-24">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl mb-6">
              Experience it
              <br />
              <span className="text-orange-500">yourself</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Try our live demo to hear how natural and responsive your AI receptionist can be. 
              It's like talking to a real person.
            </p>
            <button
              onClick={onDemoClick}
              className="group px-8 py-4 bg-orange-500 text-white rounded-full text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Try the Demo Call
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Demo video placeholder / interactive element */}
            <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 flex items-center justify-center border border-gray-700 shadow-2xl">
              <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onDemoClick}
              >
                <Phone className="w-16 h-16 text-white" />
              </motion.div>

              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-orange-500"
                animate={{
                  scale: [1, 1.5, 1.5],
                  opacity: [0.5, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}