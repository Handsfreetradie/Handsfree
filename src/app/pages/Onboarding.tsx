import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, User, Mail, Phone, Building2, MessageCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { Seo } from "../components/Seo";

// Workaround: the custom domain isn't routing /api/* to serverless functions
// (separate unresolved issue) - hit the vercel.app URL directly instead,
// which works. CORS is set up on the function to allow this origin.
const SEND_FORM_URL = "https://handsfreewebsite.vercel.app/api/send-form";

const BUSINESS_TYPES = [
  { label: "Plumbing", value: "plumbing" },
  { label: "Electrical", value: "electrical" },
  { label: "HVAC", value: "hvac" },
  { label: "Construction", value: "construction" },
  { label: "Landscaping", value: "landscaping" },
  { label: "Cleaning Services", value: "cleaning" },
  { label: "Property Management", value: "property" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Legal Services", value: "legal" },
  { label: "Other", value: "other" },
];

const CONTACT_METHODS = [
  { label: "Phone Call", value: "phone" },
  { label: "Text (SMS)", value: "text" },
  { label: "Email", value: "email" },
];

export function Onboarding() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "",
    email: "",
    preferredContact: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(SEND_FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "signup", ...formData }),
      });

      if (!response.ok) throw new Error("Send failed");

      setSubmitted(true);
    } catch (error) {
      console.error("Error sending signup:", error);
      setSubmitError(
        "Something went wrong sending your details. Please try again, or email us directly at hello@handsfreetradie.com.au"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
            Welcome to <span className="text-orange-500">Handsfree</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Thanks, {formData.name}! We've got your details and will be in touch shortly to set up your digital receptionist.
          </p>

          <Link
            to="/"
            className="inline-block px-8 py-4 bg-orange-500 text-white rounded-full text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg"
          >
            Return to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <Seo
        title="Get Started — Handsfree AI Receptionist"
        description="Tell us about your business and we'll build your custom AI receptionist set up around how you work."
        canonicalPath="/onboarding"
      />
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
              Get started with <span className="text-orange-500">Handsfree</span>
            </h1>
            <p className="text-xl text-gray-600">Tell us a bit about your business and we'll be in touch</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Smith"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="0400 000 000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                Business Type *
              </label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="" disabled>
                    Select your industry
                  </option>
                  {BUSINESS_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method *
              </label>
              <div className="relative">
                <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="" disabled>
                    How should we reach you?
                  </option>
                  {CONTACT_METHODS.map((method) => (
                    <option key={method.value} value={method.value}>
                      {method.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {submitError && <p className="text-red-500 text-sm text-center">{submitError}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-orange-500 text-white rounded-full text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? "Submitting..." : "Get Started"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </motion.div>
      </div>
    </div>
  );
}
