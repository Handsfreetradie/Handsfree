import { useState } from "react";
import { motion } from "motion/react";
import { Check, Phone, BarChart3, Settings, ArrowLeft, TrendingDown, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router";
import logo from "figma:asset/af7ee8e2a310f2295e9721f16147dcd6876b81ea.png";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Essentials",
      tagline: "SMS-only — no receptionist",
      description: "Not ready for a receptionist? Start here.",
      monthlyPrice: 49,
      annualPrice: 39,
      icon: Phone,
      features: [
        "Automatic SMS text-back",
        "Friendly missed call messages",
        "Lead capture system",
        "Basic analytics",
        "Email notifications",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Receptionist",
      tagline: "digital receptionist",
      description: "Best for small businesses wanting a professional front line",
      monthlyPrice: 149,
      annualPrice: 119,
      icon: Phone,
      features: [
        "Everything in Essentials",
        "digital receptionist answers calls live",
        "Handles FAQs automatically",
        "24/7 after-hours coverage",
        "Up to 200 minutes of calls per month",
        "Call transcripts",
        "Business hours scheduling",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      tagline: "Full visibility and control",
      description: "Best for growing businesses that want complete oversight",
      monthlyPrice: 299,
      annualPrice: 239,
      icon: BarChart3,
      features: [
        "Everything in Receptionist",
        "Auto booking direct into your calendar",
        "Business dashboard with analytics",
        "Missed opportunity tracking",
        "Unlimited call minutes",
        "Priority support",
        "Custom greetings",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Custom",
      tagline: "Fully tailored solution",
      description: "For businesses needing enterprise-grade features",
      monthlyPrice: null,
      annualPrice: null,
      icon: Settings,
      features: [
        "Custom call flows",
        "CRM integrations",
        "Multi-location support",
        "VIP caller routing",
        "White label options",
        "Dedicated account manager",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header - matching home page style */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Handsfree" className="h-40 w-auto" />
          </Link>
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32">
        {/* Very subtle background gradient - Apple style */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />
        
        {/* Subtle decorative blur elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gray-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-gray-900 tracking-tight">
              Simple, honest pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              No lock-in contracts. No hidden fees. Just straight-up value for Australian tradies.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-lg ${!isAnnual ? "text-gray-900" : "text-gray-400"}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  isAnnual ? "bg-orange-500" : "bg-gray-300"
                }`}
              >
                <motion.div
                  className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{ x: isAnnual ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-lg ${isAnnual ? "text-gray-900" : "text-gray-400"}`}>
                Annual
              </span>
              {isAnnual && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-sm bg-orange-50 text-orange-600 px-3 py-1 rounded-full border border-orange-200"
                >
                  Save 20%
                </motion.span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-xl ${
                  plan.popular
                    ? "border-orange-500 shadow-lg"
                    : "border-gray-200"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                  <plan.icon className="w-6 h-6 text-white" />
                </div>

                {/* Plan Name & Tagline */}
                <h3 className="text-2xl text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-1">{plan.tagline}</p>
                <p className="text-sm text-gray-500 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  {plan.monthlyPrice ? (
                    <div>
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-5xl text-gray-900">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-xl text-gray-600">/mo</span>
                      </div>
                      {isAnnual && (
                        <p className="text-sm text-gray-500">
                          ${(plan.annualPrice! * 12).toLocaleString()} AUD billed annually
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="text-3xl text-gray-900 mb-4">Custom pricing</div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/onboarding"
                  className={`block w-full text-center py-3 rounded-full transition-all ${
                    plan.popular
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 text-lg">
              Built in Australia <span className="text-gray-900">for Australian tradies</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 tracking-tight">
              The real cost of missed calls
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compared to hiring an admin, Handsfree saves you thousands — and works 24/7
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional Admin Option */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-2xl text-gray-900">Hiring an Admin</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="text-gray-600">Part-time admin (20 hrs/week)</span>
                  <span className="text-gray-900">$2,400/mo</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="text-gray-600">Superannuation (11%)</span>
                  <span className="text-gray-900">$264/mo</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="text-gray-600">After-hours coverage</span>
                  <span className="text-red-600">Not available</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="text-gray-600">Weekend coverage</span>
                  <span className="text-red-600">Extra cost</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="text-gray-600">Sick days & holidays</span>
                  <span className="text-red-600">No coverage</span>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-gray-300">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg text-gray-900">Total monthly cost</span>
                  <span className="text-3xl text-gray-900">$2,664+</span>
                </div>
                <p className="text-sm text-gray-500">Based on $30/hr average admin wage in Australia</p>
              </div>
            </motion.div>

            {/* Handsfree Option */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border-2 border-orange-500 shadow-lg relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm whitespace-nowrap">
                Save $2,365+/month
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900">Handsfree Pro</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-orange-200">
                  <span className="text-gray-600">Monthly subscription</span>
                  <span className="text-gray-900">$299/mo</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-orange-200">
                  <span className="text-gray-600">No super or payroll tax</span>
                  <span className="text-orange-600">$0</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-orange-200">
                  <span className="text-gray-600 flex items-center gap-2">
                    After-hours coverage
                    <Clock className="w-4 h-4 text-orange-500" />
                  </span>
                  <span className="text-orange-600">24/7 included</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-orange-200">
                  <span className="text-gray-600">Weekend coverage</span>
                  <span className="text-orange-600">24/7 included</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-orange-200">
                  <span className="text-gray-600">Never sick or on holiday</span>
                  <span className="text-orange-600">Always on</span>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-orange-300">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg text-gray-900">Total monthly cost</span>
                  <span className="text-3xl text-orange-600">$299</span>
                </div>
                <p className="text-sm text-gray-600">Unlimited calls + 24/7 after-hours coverage included</p>
              </div>
            </motion.div>
          </div>

          {/* After-hours highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 max-w-3xl mx-auto bg-orange-50 rounded-2xl p-8 border border-orange-200"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-gray-900 mb-3">After-hours is where you really save</h3>
                <p className="text-gray-700 mb-4">
                  Ever tried getting an admin to answer calls at 7pm? Or on a Sunday? You'd be looking at penalty rates 
                  of <span className="text-gray-900">$45-60/hour</span> — if you can even find someone willing.
                </p>
                <p className="text-gray-700">
                  With Handsfree, <span className="text-orange-600">every call is answered 24/7</span> — after hours, 
                  weekends, public holidays — all for the same flat monthly rate. No extra charges, no rostering headaches.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Annual savings highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-2xl text-gray-900">
              That's over <span className="text-orange-600">$28,000 saved</span> in your first year
            </p>
            <p className="text-gray-600 mt-2">Plus you never miss a lead, even at 3am on Christmas Day</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 tracking-tight">
              Common questions
            </h2>
            <p className="text-xl text-gray-600">
              Straight answers, no BS
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yep. Upgrade or downgrade whenever you like. No penalties, no questions asked.",
              },
              {
                question: "What if it's not working out?",
                answer: "If you're not happy in the first 30 days, cancel and you'll only pay for what you've used. No lock-in contracts, no cancellation fees.",
              },
              {
                question: "Do I need a new phone number?",
                answer: "Nope. We can forward your existing number or give you a new one — whatever works best for you.",
              },
              {
                question: "What if I go over my minutes?",
                answer: "On Essentials and Receptionist plans, extra minutes are $0.50/min. Or upgrade to Pro for unlimited calls.",
              },
              {
                question: "Can I bypass your receptionist for important callers?",
                answer: "Absolutely. Set up VIP numbers that ring straight through to you, skipping your receptionist completely. Perfect for family, key clients, or urgent contacts.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200"
              >
                <h3 className="text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA with Return Home Button */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Very subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
              Ready to stop missing calls?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Not happy in the first 30 days? Cancel and only pay for what you've used. No lock-in contracts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/onboarding"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-full text-lg hover:bg-orange-600 transition-all"
              >
                Get Started
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 text-gray-700 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Return Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}