import { motion } from "motion/react";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function Hero({ onDemoClick }: { onDemoClick: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-32 px-4 sm:px-6">
      {/* Very subtle background gradient - Apple style */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />
      
      {/* Subtle decorative blur elements - much more muted */}
      <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gray-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-100/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto py-12 sm:py-24 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 rounded-full mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-gray-700">Now available for all businesses</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 text-gray-900 tracking-tight px-2"
          >
            Never miss a call.
            <br />
            <span className="text-orange-500">Ever again.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          >
            Your AI phone receptionist that answers every call, books appointments, 
            and handles customer inquiries — 24/7, in your brand's voice.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            <Link to="/onboarding" className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-full text-base sm:text-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={onDemoClick}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-full text-base sm:text-lg border-2 border-gray-200 hover:border-orange-500 hover:text-orange-500 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Try Live Demo
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xs sm:text-sm text-gray-500 px-4"
          >
            Not just another AI receptionist • Fully customisable to your business needs
          </motion.div>
        </motion.div>

        {/* Floating iPhone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-12 sm:mt-20"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mx-auto w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] bg-white rounded-[2.5rem] sm:rounded-[3rem] border-4 sm:border-8 border-gray-900 shadow-2xl overflow-hidden"
          >
            {/* iPhone notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-5 sm:h-6 bg-gray-900 rounded-b-2xl z-20" />

            {/* Screen content */}
            <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center p-6 sm:p-8">
              <motion.div
                className="w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-4 sm:mb-6"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Phone className="w-10 sm:w-12 h-10 sm:h-12 text-white" />
              </motion.div>
              <p className="text-gray-600 text-xs sm:text-sm mb-2">Incoming Call</p>
              <h3 className="text-xl sm:text-2xl text-gray-900 mb-1">Handsfree AI</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Your Business Assistant</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}