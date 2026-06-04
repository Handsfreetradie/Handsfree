import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-gray-900">
            Ready to transform
            <br />
            your <span className="text-orange-500">customer calls?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses using AI to never miss a customer again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/onboarding" className="group px-8 py-4 bg-gray-900 text-white rounded-full text-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-lg flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 rounded-full text-lg border-2 border-gray-200 hover:border-orange-500 hover:text-orange-500 transition-all">
              Schedule a Demo
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            30-day money-back guarantee • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}