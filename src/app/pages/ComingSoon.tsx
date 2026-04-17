import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { PhoneDemo } from "../components/PhoneDemo";
import { LeadFormModal } from "../components/LeadFormModal";
import { Link } from "react-router";

interface ComingSoonProps {
  title: string;
  description: string;
}

export function ComingSoon({ title, description }: ComingSoonProps) {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleDemoClick = () => {
    setIsLeadFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onDemoClick={handleDemoClick} />
      
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-7xl mb-6 text-gray-900">
              {title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-xl mx-auto">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors text-lg inline-block"
              >
                Back to Home
              </Link>
              <button
                onClick={handleDemoClick}
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors text-lg"
              >
                Try Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
      <LeadFormModal
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        onSuccess={() => {
          setIsLeadFormOpen(false);
          setIsDemoOpen(true);
        }}
      />
      <PhoneDemo isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
