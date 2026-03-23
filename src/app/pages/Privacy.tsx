import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Shield, Lock, Eye, Trash2, Clock, Users } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import logo from "figma:asset/af7ee8e2a310f2295e9721f16147dcd6876b81ea.png";

export function Privacy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="Handsfree" className="h-24 w-auto mx-auto mb-8 object-contain" />
            <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Last updated: 20 March 2026
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to protecting your privacy and handling your data responsibly. 
              This policy explains what we collect, why we collect it, and what we do with it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Handsfree is an Australian company providing AI voice receptionist and SMS text-back services 
                to small businesses across Australia. We comply with the Australian Privacy Act 1988 and the 
                Australian Privacy Principles (APPs). This policy is written in plain English because we believe 
                you shouldn't need a law degree to understand how we handle your information.
              </p>
            </div>

            {/* What We Collect */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">What information we collect</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To provide our AI receptionist service, we need to collect certain information:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Call recordings and transcripts:</strong> When our AI answers calls for your business, we record and transcribe those conversations to deliver the service and improve accuracy.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Caller information:</strong> Phone numbers and any information callers share during conversations (like names, appointment requests, or questions).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Your business details:</strong> Business name, phone number, email address, and any information you provide about your business for AI customization.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Billing information:</strong> Payment details, billing address, and subscription information (processed securely through our payment provider).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Website usage:</strong> Basic analytics and cookies when you visit our website (see Cookie Policy below).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use It */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">How we use your information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We only use your information for legitimate business purposes:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Deliver the service:</strong> Answer calls, send SMS messages, book appointments, and provide call analytics.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Improve AI accuracy:</strong> Train and refine our AI models to better understand Australian accents, business terminology, and caller needs.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Send notifications:</strong> Email or SMS you about missed calls, new messages, service updates, or billing matters.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Billing and account management:</strong> Process payments and manage your subscription.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Legal compliance:</strong> Meet our obligations under Australian law.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Who We Share With */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Who we share information with</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>We do not sell your data to third parties. Ever.</strong>
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    However, we do share information with trusted service providers who help us deliver the service:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Cloud infrastructure providers:</strong> We use secure cloud hosting services to store and process data. These providers are bound by strict confidentiality agreements.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Payment processors:</strong> Credit card and payment information is processed by certified payment providers who comply with PCI-DSS standards.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>AI service providers:</strong> We use third-party AI and voice recognition services to power our receptionist. These providers only access data necessary to perform their function.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Legal obligations:</strong> We may disclose information if required by Australian law, court order, or to protect our rights or the safety of others.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">How long we keep your data</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Call recordings and transcripts:</strong> Kept for 12 months by default, or until you request deletion. You can adjust retention settings in your account.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Account information:</strong> Kept while your account is active and for 7 years after closure for tax and legal compliance purposes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Billing records:</strong> Kept for 7 years as required by Australian tax law.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Analytics data:</strong> Aggregated and anonymized analytics may be kept indefinitely for service improvement.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Trash2 className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Your privacy rights</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Under the Australian Privacy Principles, you have the right to:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Access your data:</strong> Request a copy of all personal information we hold about you.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Correct your data:</strong> Ask us to update or correct any inaccurate information.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Delete your data:</strong> Request deletion of call recordings, transcripts, or your entire account (subject to legal retention requirements).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Object to processing:</strong> Ask us to stop using your data for certain purposes, like marketing.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Lodge a complaint:</strong> Contact the Office of the Australian Information Commissioner (OAIC) if you're unhappy with how we've handled your data.</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-6">
                    To exercise any of these rights, email us at <a href="mailto:privacy@handsfree.com.au" className="text-orange-500 hover:underline">hello@handsfree.com.au</a>. 
                    We'll respond within 30 days.
                  </p>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Security</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We take data security seriously and use industry-standard encryption, access controls, and 
                    regular security audits to protect your information. For more details, see our{" "}
                    <a href="/security" className="text-orange-500 hover:underline">Security page</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookie Policy */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Cookie Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our website uses cookies to improve your browsing experience:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Essential cookies:</strong> Required for the website to function (login, session management).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Analytics cookies:</strong> Help us understand how visitors use our site (we use privacy-focused analytics).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Marketing cookies:</strong> Used to show relevant ads and measure campaign effectiveness (only with your consent).</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-6">
                    You can control cookie preferences in your browser settings. Blocking essential cookies may affect website functionality.
                  </p>
                </div>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <h2 className="text-3xl text-gray-900 mb-4">Changes to this policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We'll notify you of significant changes via 
                email or a notice on our website. The "Last updated" date at the top shows when this policy was 
                last revised.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-200">
              <h2 className="text-3xl text-gray-900 mb-4">Questions?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or how we handle your information, we're here to help:
              </p>
              <p className="text-gray-700">                <strong>Email:</strong><br /><strong>Address:</strong></p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}