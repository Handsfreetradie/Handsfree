import { Link } from "react-router";
import { motion } from "motion/react";
import { PhoneCall, CalendarCheck, Clock, ClipboardList, MessageSquare, Mic, ArrowLeft, ChevronRight } from "lucide-react";
import logo from "figma:asset/af7ee8e2a310f2295e9721f16147dcd6876b81ea.png";

const features = [
  {
    icon: PhoneCall,
    title: "Answers Every Call",
    description: "When you're on the tools, under a house, or up a pole, your AI picks up.",
    details: [
      "Never miss a lead while you're working",
      "Answers in your business name",
      "Professional every time",
      "Works on your existing number",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Books Jobs Straight In",
    description: "Customers pick a time and it lands straight in your calendar.",
    details: [
      "Cal.com calendar integration",
      "No back-and-forth with customers",
      "No double-bookings",
      "Sends customer a confirmation",
    ],
  },
  {
    icon: Clock,
    title: "Always On — Even at 3am",
    description: "Emergency calls, weekend enquiries, after-hours leads. All captured.",
    details: [
      "After-hours coverage included",
      "Weekend & public holiday support",
      "Never miss a call at 3am",
      "Always professional, never tired",
    ],
  },
  {
    icon: ClipboardList,
    title: "Captures the Job Details",
    description: "Name, number, address, and what's wrong — ready when you finish the job.",
    details: [
      "Customer name and contact number",
      "Job address and description",
      "Urgency level captured",
      "Sent straight to you after every call",
    ],
  },
  {
    icon: MessageSquare,
    title: "Instant SMS Text-Back",
    description: "Miss a call? They get an instant text to keep the lead warm.",
    details: [
      "100–400 SMS/month included",
      "Automatic reply within seconds",
      "Keeps leads warm while you work",
      "Custom message in your voice",
    ],
  },
  {
    icon: Mic,
    title: "Sounds Like Your Business",
    description: "Answers in your business name with a greeting you set.",
    details: [
      "Custom greeting and business name",
      "Sounds professional every time",
      "Set your own call handling rules",
      "You control when it answers",
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
            Get Started
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