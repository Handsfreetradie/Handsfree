import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Seo } from "../components/Seo";

const CRM_FORM_URL = "https://crm.handsfreetradie.com.au/f/your-details";

export function Onboarding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <Seo
        title="Get Started — Handsfree AI Receptionist"
        description="Tell us about your trade and call volume, and we'll build your custom AI receptionist set up around how you work."
        canonicalPath="/onboarding"
      />
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
            Get started with <span className="text-orange-500">Handsfree</span>
          </h1>
          <p className="text-xl text-gray-600">
            Get your digital receptionist up and running in minutes
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <iframe
            src={CRM_FORM_URL}
            title="Handsfree onboarding form"
            className="w-full"
            style={{ height: "900px", border: "none" }}
          />
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
