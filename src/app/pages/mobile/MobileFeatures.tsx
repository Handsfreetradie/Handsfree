import { Link } from "react-router";
import { motion } from "motion/react";
import { Brain, Globe, Clock, Workflow, BarChart, Headphones, ArrowLeft, ChevronRight } from "lucide-react";
import logo from "figma:asset/af7ee8e2a310f2295e9721f16147dcd6876b81ea.png";

const features = [
  {
    icon: Brain,
    title: "Natural Conversations",
    description: "Advanced AI that understands context and responds like a real person.",
    details: [
      "Understands Australian slang and accents",
      "Context-aware responses",
      "Natural conversation flow",
      "Learns from each interaction",
    ],
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never close. Your AI receptionist works around the clock.",
    details: [
      "After-hours coverage included",
      "Weekend & public holiday support",
      "Never miss a call at 3am",
      "Always professional, never tired",
    ],
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Communicate with customers in their preferred language.",
    details: [
      "English, Mandarin, Spanish & more",
      "Automatic language detection",
      "Professional translations",
      "Cultural context awareness",
    ],
  },
  {
    icon: Workflow,
    title: "Custom Workflows",
    description: "Build automations tailored to your business needs.",
    details: [
      "Custom call routing rules",
      "Appointment booking flows",
      "FAQ automation",
      "CRM integration",
    ],
  },
  {
    icon: BarChart,
    title: "Real-Time Analytics",
    description: "Track call metrics and business insights in real-time.",
    details: [
      "Call volume tracking",
      "Customer sentiment analysis",
      "Peak time identification",
      "Conversion metrics",
    ],
  },
  {
    icon: Headphones,
    title: "Seamless Transfers",
    description: "Smart routing to your team when human interaction is needed.",
    details: [
      "VIP caller detection",
      "Skill-based routing",
      "Warm transfer with context",
      "Emergency call escalation",
    ],
  },
];

export function MobileFeatures() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/mobile" className="flex items-center gap-2 text-gray-600">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Back</span>
          </Link>
          <img src={logo} alt="Handsfree" className="h-16 w-auto" />
          <Link to="/onboarding" className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm">
            Sign Up
          </Link>
        </div>
      </header>

      {/* Page Title */}
      <section className="pt-8 pb-6 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl text-gray-900 mb-3 tracking-tight">
            Everything you need.
            <br />
            <span className="text-gray-400">Nothing you don't.</span>
          </h1>
          <p className="text-base text-gray-600">
            Built for modern businesses who demand excellence
          </p>
        </motion.div>
      </section>

      {/* Features List */}
      <section className="px-6 space-y-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-orange-500 transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
              </div>
            </div>

            {/* Feature Details */}
            <div className="space-y-2 pl-16">
              {feature.details.map((detail, i) => (
                <div key={i} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="mt-12 px-6">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl mb-3">Ready to get started?</h2>
          <p className="text-orange-50 mb-6 text-sm">
            See how Handsfree can transform your business
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
          <Link to="/mobile" className="text-gray-500 text-xs flex flex-col items-center gap-1">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span>Home</span>
          </Link>
          <Link to="/mobile/features" className="text-orange-500 text-xs flex flex-col items-center gap-1">
            <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center">
              <Brain className="w-4 h-4" />
            </div>
            <span>Features</span>
          </Link>
          <Link to="/mobile/pricing" className="text-gray-500 text-xs flex flex-col items-center gap-1">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center">
              <BarChart className="w-4 h-4" />
            </div>
            <span>Pricing</span>
          </Link>
          <Link to="/mobile/more" className="text-gray-500 text-xs flex flex-col items-center gap-1">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center">
              <Workflow className="w-4 h-4" />
            </div>
            <span>More</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}