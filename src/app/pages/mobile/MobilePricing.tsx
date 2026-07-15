import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Phone, BarChart3, Settings, Check, ArrowLeft, Menu, Zap } from "lucide-react";
import logo from "figma:asset/af7ee8e2a310f2295e9721f16147dcd6876b81ea.png";

export function MobilePricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Essentials",
      tagline: "SMS-only — no receptionist",
      description: "Not ready for a receptionist? Start here.",
      monthlyPrice: 89,
      annualPrice: 71,
      icon: Phone,
      features: [
        "Automatic SMS text-back",
        "Up to 50 messages/month",
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
      description: "For small businesses wanting a professional front line",
      monthlyPrice: 249,
      annualPrice: 199,
      icon: Phone,
      features: [
        "Everything in Essentials",
        "digital receptionist",
        "Up to 200 mins/month",
        "24/7 after-hours coverage",
        "Call transcripts",
        "Business hours scheduling",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      tagline: "Full visibility & control",
      description: "For growing businesses that want complete oversight",
      monthlyPrice: 449,
      annualPrice: 359,
      icon: BarChart3,
      features: [
        "Everything in Receptionist",
        "Up to 400 mins/month",
        "Auto calendar booking",
        "Business dashboard",
        "Priority support",
        "Custom call flows",
        "Advanced reporting",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Custom",
      tagline: "Fully tailored solution",
      description: "For enterprise-grade features",
      monthlyPrice: null,
      annualPrice: null,
      icon: Settings,
      features: [
        "Everything in Pro",
        "Unlimited call minutes",
        "Custom call flows",
        "CRM integrations",
        "Multi-location support",
        "Dedicated account manager",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

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
          className="text-center"
        >
          <h1 className="text-3xl text-gray-900 mb-3 tracking-tight">
            Simple, honest pricing
          </h1>
          <p className="text-base text-gray-600 mb-6">
            No lock-in contracts. No hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className={`text-sm ${!isAnnual ? "text-gray-900 font-medium" : "text-gray-400"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isAnnual ? "bg-orange-500" : "bg-gray-300"
              }`}
            >
              <motion.div
                className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm ${isAnnual ? "text-gray-900 font-medium" : "text-gray-400"}`}>
              Annual
            </span>
          </div>
          {isAnnual && (
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-xs bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full border border-orange-200 inline-block"
            >
              💰 Save 20% with annual billing
            </motion.p>
          )}
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 space-y-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative bg-white rounded-2xl p-6 border-2 transition-all ${
              plan.popular
                ? "border-orange-500 shadow-lg"
                : "border-gray-200"
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs">
                Most Popular
              </div>
            )}

            {/* Icon */}
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
              <plan.icon className="w-5 h-5 text-white" />
            </div>

            {/* Plan Info */}
            <h3 className="text-xl text-gray-900 mb-1">{plan.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{plan.tagline}</p>
            <p className="text-xs text-gray-500 mb-4">{plan.description}</p>

            {/* Price */}
            <div className="mb-6">
              {plan.monthlyPrice ? (
                <div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl text-gray-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-lg text-gray-600">/mo</span>
                  </div>
                  {isAnnual && (
                    <p className="text-xs text-gray-500">
                      ${(plan.annualPrice! * 12).toLocaleString()} AUD billed annually
                    </p>
                  )}
                </div>
              ) : (
                <div className="text-2xl text-gray-900 mb-2">Custom pricing</div>
              )}
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              to="/onboarding"
              className={`block w-full text-center py-3 rounded-full transition-all text-sm font-medium ${
                plan.popular
                  ? "bg-orange-500 text-white"
                  : "bg-gray-900 text-white"
              }`}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="mt-12 px-6">
        <h2 className="text-2xl text-gray-900 mb-6 text-center">Common questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Can I change plans anytime?",
              a: "Yep. Upgrade or downgrade whenever you like. No penalties.",
            },
            {
              q: "What if it's not working out?",
              a: "If you're not happy in the first 30 days, cancel and you'll only pay for what you've used. No lock-in contracts, no cancellation fees.",
            },
            {
              q: "Do I need a new number?",
              a: "Nope. We can forward your existing number or give you a new one.",
            },
            {
              q: "What if I go over minutes?",
              a: "Extra usage is $0.50/min. For high-volume needs, our Custom plan offers the best value.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-gray-50 rounded-xl p-4 border border-gray-200"
            >
              <h4 className="text-sm text-gray-900 mb-2 font-medium">{faq.q}</h4>
              <p className="text-sm text-gray-600">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-12 px-6">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl mb-3">Ready to get started?</h2>
          <p className="text-orange-50 mb-6 text-sm">
            Cancel anytime • Only pay for what you've used
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
          <Link to="/mobile/pricing" className="text-orange-500 text-xs flex flex-col items-center gap-1">
            <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center">
              <Check className="w-4 h-4" />
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
    </div>
  );
}