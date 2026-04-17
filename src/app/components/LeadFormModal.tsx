import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Phone, Loader2 } from "lucide-react";
import { WEBHOOK_URL } from "../config/webhook";

const COUNTRY_CODES = [
  { code: "+61", label: "AU +61" },
  { code: "+64", label: "NZ +64" },
  { code: "+1", label: "US/CA +1" },
  { code: "+44", label: "UK +44" },
  { code: "+65", label: "SG +65" },
  { code: "+60", label: "MY +60" },
  { code: "+63", label: "PH +63" },
  { code: "+66", label: "TH +66" },
  { code: "+81", label: "JP +81" },
  { code: "+86", label: "CN +86" },
  { code: "+91", label: "IN +91" },
  { code: "+971", label: "AE +971" },
  { code: "+27", label: "ZA +27" },
];

const INDUSTRIES = [
  { label: "Plumbing", value: "plumbing" },
  { label: "Electrical", value: "electrical" },
  { label: "HVAC", value: "hvac" },
  { label: "Pest Control", value: "pestcontrol" },
  { label: "Landscaping / Gardening", value: "landscaping" },
  { label: "Carpentry", value: "carpentry" },
  { label: "Painting", value: "painting" },
  { label: "Roofing", value: "roofing" },
  { label: "Handyman Services", value: "handyman" },
  { label: "Flooring", value: "flooring" },
  { label: "Tiling", value: "tiling" },
];

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function LeadFormModal({ isOpen, onClose, onSuccess }: LeadFormModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+61",
    phoneNumber: "",
    businessName: "",
    industryValue: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Strip leading zero from local number before prepending country code
    const localNumber = formData.phoneNumber.replace(/^0+/, "").replace(/\s/g, "");
    const phone = `${formData.countryCode}${localNumber}`;

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone,
          businessName: formData.businessName,
          industryValue: formData.industryValue,
        }),
      });

      if (!response.ok) throw new Error("Webhook request failed");

      onSuccess();
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 transition-colors text-gray-900 text-sm placeholder:text-gray-400";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 px-8 py-8 text-white rounded-t-3xl">
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl mb-1">Get a Live Demo Call</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Enter your details below and we'll start your AI receptionist demo call.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
              {/* First + Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1.5">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className={inputClass}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1.5">Last Name</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className={inputClass}
                    placeholder="Smith"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={inputClass}
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Phone Number</label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleChange("countryCode", e.target.value)}
                    className="px-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 transition-colors text-gray-900 text-sm bg-white shrink-0"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => handleChange("phoneNumber", e.target.value)}
                    className={inputClass}
                    placeholder="400 123 456"
                  />
                </div>
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Business Name</label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => handleChange("businessName", e.target.value)}
                  className={inputClass}
                  placeholder="My Business Pty Ltd"
                />
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Industry</label>
                <select
                  required
                  value={formData.industryValue}
                  onChange={(e) => handleChange("industryValue", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 transition-colors text-gray-900 text-sm bg-white"
                >
                  <option value="" disabled>
                    Select your industry
                  </option>
                  {INDUSTRIES.map((industry) => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Error message */}
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-orange-500 text-white rounded-full text-base hover:bg-orange-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Starting your demo call...
                  </>
                ) : (
                  <>
                    <Phone className="w-5 h-5" />
                    Start Demo Call
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
