import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Phone, Zap, CheckCircle, Menu, Mail, Send, Instagram, Linkedin, ArrowLeft, MapPin } from "lucide-react";
import logo from "figma:asset/af7ee8e2a310f2295e9721f16147dcd6876b81ea.png";

export function MobileContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/send-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formType: "contact", ...formData }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/mobile/more" className="flex items-center gap-2 text-gray-600">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Back</span>
          </Link>
          <img src={logo} alt="Handsfree" className="h-16 w-auto" />
          <div className="w-16"></div>
        </div>
      </header>

      {/* Page Title */}
      <section className="pt-8 pb-6 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl text-gray-900 mb-3 tracking-tight">Get in Touch</h1>
          <p className="text-base text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Options */}
      <section className="px-6 pb-6">
        <div className="space-y-3">
          <a
            href="mailto:hello@handsfreetradie.com.au"
            className="bg-gray-50 rounded-xl p-4 flex items-center gap-3 border border-gray-200"
          >
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Email</h3>
              <p className="text-sm text-gray-600">hello@handsfreetradie.com.au</p>
            </div>
          </a>

          <a
            href="tel:1300HANDSFREE"
            className="bg-gray-50 rounded-xl p-4 flex items-center gap-3 border border-gray-200"
          >
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Phone</h3>
              <p className="text-sm text-gray-600">1300 HANDSFREE</p>
            </div>
          </a>

          <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3 border border-gray-200">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Location</h3>
              <p className="text-sm text-gray-600">Sydney, Australia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 pb-8">
        <h2 className="text-xl text-gray-900 mb-4">Send us a message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone (optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
              placeholder="0400 000 000"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 resize-none"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : submitStatus === "success"
                ? "bg-green-500 text-white"
                : submitStatus === "error"
                ? "bg-red-500 text-white"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            {isSubmitting ? (
              "Sending..."
            ) : submitStatus === "success" ? (
              "Message Sent!"
            ) : submitStatus === "error" ? (
              "Error - Try Again"
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </section>

      {/* Social Media */}
      <section className="px-6 pb-8">
        <h2 className="text-xl text-gray-900 mb-4">Connect with us</h2>
        <div className="flex gap-3">
          <a
            href="https://instagram.com/handsfree.calling"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-4 flex items-center justify-center gap-2 font-medium"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
          <a
            href="#"
            className="flex-1 bg-blue-600 text-white rounded-xl p-4 flex items-center justify-center gap-2 font-medium"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
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
    </div>
  );
}
