import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Phone, ArrowRight, CheckCircle, Star, Zap, Clock, Menu } from "lucide-react";
import logo from "figma:asset/af7ee8e2a310f2295e9721f16147dcd6876b81ea.png";
import { LeadFormModal } from "../../components/LeadFormModal";

export function MobileHome() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Handsfree" className="h-20 w-auto" />
          <Link 
            to="/onboarding" 
            className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-700">Available now</span>
          </div>

          <h1 className="text-4xl mb-4 text-gray-900 tracking-tight leading-tight">
            Never miss a call.
            <br />
            <span className="text-orange-500">Ever again.</span>
          </h1>

          <p className="text-base text-gray-600 mb-8 leading-relaxed">
            Your AI phone receptionist that answers every call 24/7
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 mb-12">
            <Link 
              to="/onboarding" 
              className="w-full px-6 py-3 bg-gray-900 text-white rounded-full text-base flex items-center justify-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setIsLeadFormOpen(true)}
              className="w-full px-6 py-3 bg-white text-gray-900 rounded-full text-base border-2 border-gray-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Try Live Demo
            </button>
          </div>

          {/* Floating iPhone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mx-auto w-[280px] h-[560px] bg-white rounded-[2.5rem] border-4 border-gray-900 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-b-2xl z-20" />
            <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center p-6">
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Phone className="w-10 h-10 text-white" />
              </motion.div>
              <p className="text-gray-600 text-xs mb-2">Incoming Call</p>
              <h3 className="text-xl text-gray-900 mb-1">Handsfree AI</h3>
              <p className="text-gray-500 text-xs">Your Business Assistant</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Features */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl text-gray-900 mb-6 text-center">Why Handsfree?</h2>
        <div className="space-y-4">
          {[
            { icon: Clock, title: "24/7 Availability", desc: "Never miss a call, even at 3am" },
            { icon: Zap, title: "Instant Setup", desc: "Live in under 5 minutes" },
            { icon: CheckCircle, title: "No Contracts", desc: "Cancel anytime, no questions" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 flex items-start gap-3 border border-gray-200"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-6 bg-white">
        <div className="text-center">
          <div className="flex justify-center items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
            ))}
          </div>
          <p className="text-gray-600 text-sm mb-6">
            Trusted by <span className="font-medium text-gray-900">500+ Australian businesses</span>
          </p>
          <p className="text-gray-500 text-xs italic max-w-sm mx-auto">
            "Handsfree answers every call like a real person. Our customers love it and we never miss a lead anymore."
          </p>
          <p className="text-gray-700 text-sm mt-2">— Jake, Sydney Plumber</p>
        </div>
      </section>

      {/* Explore More Sections */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl text-gray-900 mb-6 text-center">Explore</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link 
            to="/mobile/features" 
            className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-orange-500 transition-colors"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-base font-medium text-gray-900">Features</h3>
          </Link>
          <Link 
            to="/mobile/pricing" 
            className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-orange-500 transition-colors"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-base font-medium text-gray-900">Pricing</h3>
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Ready to get started?</h2>
          <p className="text-orange-50 mb-6 text-sm">
            14-day free trial • No credit card required
          </p>
          <Link 
            to="/onboarding" 
            className="inline-block px-8 py-3 bg-white text-orange-600 rounded-full font-medium"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex justify-around items-center">
          <Link to="/mobile" className="text-orange-500 text-xs flex flex-col items-center gap-1">
            <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <span>Home</span>
          </Link>
          <Link to="/mobile/features" className="text-gray-500 text-xs flex flex-col items-center gap-1">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
            <span>Features</span>
          </Link>
          <Link to="/mobile/pricing" className="text-gray-500 text-xs flex flex-col items-center gap-1">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-4 h-4" />
            </div>
            <span>Pricing</span>
          </Link>
          <Link to="/mobile/more" className="text-gray-500 text-xs flex flex-col items-center gap-1">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center">
              <Menu className="w-4 h-4" />
            </div>
            <span>More</span>
          </Link>
        </div>
      </nav>

      <LeadFormModal
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        onSuccess={() => {
          setIsLeadFormOpen(false);
          navigate("/mobile/demo");
        }}
      />
    </div>
  );
}