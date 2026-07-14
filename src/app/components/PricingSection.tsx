import { useState, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Check, Phone, BarChart3, Settings, TrendingDown, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Essentials",
      tagline: "Stop missing quote requests",
      description: "For solo tradies tired of chasing cold leads",
      monthlyPrice: 89,
      annualPrice: 71,
      icon: Phone,
      features: [
        "Automatic SMS reply when you miss a call",
        "100 SMS/month included",
        "Captures customer name, number, and job details",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Receptionist",
      tagline: "Professional call handling without the wages",
      description: "For small crews who can't afford to miss a call",
      monthlyPrice: 249,
      annualPrice: 199,
      icon: Phone,
      features: [
        "Everything in Essentials",
        "Your digital receptionist answers calls in your business name",
        "150 mins of call answering + 150 SMS/month",
        "Captures job type, address, and urgency every time",
        "24/7 after-hours answering",
        "Cal.com calendar booking included",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      tagline: "Own every lead. Close more jobs.",
      description: "For high-volume tradies who can't afford downtime",
      monthlyPrice: 449,
      annualPrice: 359,
      icon: BarChart3,
      features: [
        "Everything in Receptionist",
        "400 mins of call answering + 400 SMS/month",
        "Cal.com calendar booking included",
        "Priority support — faster response times, dedicated contact",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Custom",
      tagline: "Big operation? Let's talk.",
      description: "We'll build a plan around your crew, your volume, and how you work",
      monthlyPrice: null,
      annualPrice: null,
      icon: Settings,
      features: [
        "Custom call and SMS volume",
        "Dedicated onboarding and setup",
        "Priority account management",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-12 sm:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white" ref={ref}>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 text-gray-900 tracking-tight px-2">
            Simple, honest pricing
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 leading-relaxed px-2">
            No lock-in contracts. No hidden fees. Just straight-up value for Australian tradies.
          </p>

          {/* Billing Toggle */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-4">
            <span className={`text-base sm:text-lg ${!isAnnual ? "text-gray-900" : "text-gray-400"}`}>
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
            <span className={`text-base sm:text-lg ${isAnnual ? "text-gray-900" : "text-gray-400"}`}>
              Annual
            </span>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs sm:text-sm bg-orange-50 text-orange-600 px-3 py-1 rounded-full border border-orange-200"
              >
                Save 20%
              </motion.span>
            )}
          </div>
        </motion.div>
      </div>

      {/* Cost Comparison Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 tracking-tight">
            The real cost of missed calls
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compared to hiring an admin, Handsfree saves you thousands — and works 24/7
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Admin Option */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="text-2xl text-gray-900">Hiring an Admin</h4>
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
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border-2 border-orange-500 shadow-lg relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm whitespace-nowrap">
              Save $2,215+/month
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl text-gray-900">Handsfree Pro</h4>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-3 border-b border-orange-200">
                <span className="text-gray-600">Monthly subscription</span>
                <span className="text-gray-900">$449/mo</span>
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
                <span className="text-3xl text-orange-600">$449</span>
              </div>
              <p className="text-sm text-gray-600">Up to 400 mins + 24/7 after-hours coverage included</p>
            </div>
          </motion.div>
        </div>

        {/* After-hours highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 max-w-3xl mx-auto bg-orange-50 rounded-2xl p-8 border border-orange-200"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-2xl text-gray-900 mb-3">After-hours is where you really save</h4>
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-2xl text-gray-900">
            That's over <span className="text-orange-600">$28,000 saved</span> in your first year
          </p>
          <p className="text-gray-600 mt-2">Plus you never miss a lead, even at 3am on Christmas Day</p>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-xl flex flex-col ${
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
              <ul className="space-y-3 mb-8 flex-grow">
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
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg">
            Trusted by <span className="text-gray-900">500+ Australian businesses</span>
          </p>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 tracking-tight">
            Common questions
          </h3>
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
              question: "What's the money-back guarantee?",
              answer: "If you're not happy in the first 30 days, we'll give you a full refund. No questions asked.",
            },
            {
              question: "Do I need a new phone number?",
              answer: "Nope. We can forward your existing number or give you a new one — whatever works best for you.",
            },
            {
              question: "What if I go over my minutes?",
              answer: "Get in touch and we'll sort something out. Pro includes 400 mins + 400 SMS which covers most busy tradies. For bigger operations, Custom pricing is available.",
            },
            {
              question: "Can I bypass your receptionist for important callers?",
              answer: "Absolutely. Set up VIP numbers that ring straight through to you, skipping your receptionist completely. Perfect for family, key clients, or urgent contacts.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-200"
            >
              <h4 className="text-lg text-gray-900 mb-2">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}