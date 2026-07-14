import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { FileText, User, CreditCard, Shield, AlertTriangle, Copyright, Server, Scale, Bell } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import logo from "figma:asset/af7ee8e2a310f2295e9721f16147dcd6876b81ea.png";

export function Terms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "acceptance", title: "Acceptance of Terms", icon: FileText },
    { id: "service", title: "Description of Service", icon: Server },
    { id: "account", title: "Account Responsibilities", icon: User },
    { id: "billing", title: "Subscription & Billing", icon: CreditCard },
    { id: "acceptable-use", title: "Acceptable Use Policy", icon: Shield },
    { id: "liability", title: "Limitation of Liability", icon: AlertTriangle },
    { id: "ip", title: "Intellectual Property", icon: Copyright },
    { id: "availability", title: "Service Availability", icon: Server },
    { id: "law", title: "Governing Law", icon: Scale },
    { id: "changes", title: "Changes to Terms", icon: Bell },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="Handsfree" className="h-24 w-auto mx-auto mb-8 object-contain" />
            <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Last updated: 20 March 2026
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plain English terms for using Handsfree. No legal jargon, just straightforward information 
              about what we provide and what we expect from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeSection === section.id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
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
            {/* Acceptance of Terms */}
            <div id="acceptance" className="bg-gray-50 rounded-3xl p-8 border border-gray-200 scroll-mt-32">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By signing up for Handsfree, you agree to these Terms of Service. If you don't agree, please don't use our service.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    These terms are a legal agreement between you (the customer) and Handsfree Pty Ltd (ABN: [To Be Registered]), 
                    an Australian company based in New South Wales.
                  </p>
                </div>
              </div>
            </div>

            {/* Description of Service */}
            <div id="service" className="bg-gray-50 rounded-3xl p-8 border border-gray-200 scroll-mt-32">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Description of Service</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Handsfree provides AI-powered phone answering services for Australian small businesses. Our service includes:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>AI voice receptionist:</strong> Answers calls in real-time using artificial intelligence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>SMS text-back service:</strong> Automatically sends text messages to missed callers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Auto booking:</strong> Books appointments directly into your calendar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Call analytics:</strong> Provides insights and transcripts of customer calls</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-6">
                    The service is provided on a monthly subscription basis. Features may vary depending on your chosen plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Account Responsibilities */}
            <div id="account" className="bg-gray-50 rounded-3xl p-8 border border-gray-200 scroll-mt-32">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Account Responsibilities</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You're responsible for:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Keeping your account login details secure and confidential</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>All activity that happens under your account</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Providing accurate business information and keeping it up to date</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Ensuring your use of the service complies with Australian law</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Notifying us immediately if you suspect unauthorized access to your account</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-6">
                    You must be at least 18 years old and authorized to bind your business to these terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Subscription & Billing */}
            <div id="billing" className="bg-gray-50 rounded-3xl p-8 border border-gray-200 scroll-mt-32">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Subscription & Billing</h2>
                  
                  <h3 className="text-xl text-gray-900 mb-3 mt-6">Pricing and Payment</h3>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Pricing is displayed on our website and varies by plan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>All prices are in Australian dollars (AUD) and include GST</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Subscriptions are billed monthly or annually (depending on your choice)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Payment is charged automatically via credit card or direct debit</span>
                    </li>
                  </ul>

                  <h3 className="text-xl text-gray-900 mb-3">Cancellation Policy</h3>
                  <div className="bg-orange-50 rounded-2xl p-6 mb-6 border border-orange-200">
                    <p className="text-gray-900 font-semibold mb-2">No lock-in contracts. Cancel anytime.</p>
                    <p className="text-gray-700 leading-relaxed">
                      We believe in earning your business every month. You can cancel your subscription at any time 
                      from your account dashboard. There are no cancellation fees or penalties.
                    </p>
                  </div>

                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Cancellations take effect at the end of your current billing period</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>You'll still have access to the service until the end of your paid period</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>No refunds for partial months or unused service</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>We reserve the right to change pricing with 30 days notice</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Acceptable Use Policy */}
            <div id="acceptable-use" className="bg-gray-50 rounded-3xl p-8 border border-gray-200 scroll-mt-32">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Acceptable Use Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You agree not to use Handsfree for:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Illegal activities or to promote illegal products/services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Spam, telemarketing, or unsolicited commercial messages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Harassment, abuse, or threatening behavior toward callers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Impersonating others or misrepresenting your business</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Attempting to hack, reverse engineer, or compromise the service</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Excessive use that impacts service quality for other customers</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-6">
                    We reserve the right to suspend or terminate accounts that violate this policy, with or without notice.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div id="liability" className="bg-gray-50 rounded-3xl p-8 border border-gray-200 scroll-mt-32">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We work hard to provide a reliable service, but technology isn't perfect. Here's what you need to know:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>The service is provided "as is" without warranties of any kind</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>We're not liable for missed calls, incorrect information provided by the AI, or lost business opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Our total liability is limited to the amount you paid us in the previous 12 months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>We're not responsible for third-party service interruptions (phone networks, internet outages, etc.)</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-6">
                    <strong>Important:</strong> Nothing in these terms excludes your rights under Australian Consumer Law. 
                    If we fail to meet a consumer guarantee, you may be entitled to remedies under the Competition and Consumer Act 2010.
                  </p>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div id="ip" className="bg-gray-50 rounded-3xl p-8 border border-gray-200 scroll-mt-32">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Copyright className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Intellectual Property</h2>
                  
                  <h3 className="text-xl text-gray-900 mb-3">What We Own</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Handsfree owns all rights to:
                  </p>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>The AI technology, software, and platform</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Our branding, logos, and marketing materials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Any improvements or updates we make to the service</span>
                    </li>
                  </ul>

                  <h3 className="text-xl text-gray-900 mb-3">What You Own</h3>
                  <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                    <p className="text-gray-900 font-semibold mb-2">You own your business data.</p>
                    <p className="text-gray-700 leading-relaxed">
                      All call recordings, transcripts, customer information, and business data remain your property. 
                      You can export or delete this data at any time.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mt-6">
                    By using our service, you grant us permission to use your data solely to deliver and improve the service. 
                    We won't use your data for any other purpose without your consent.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Availability */}
            <div id="availability" className="bg-gray-50 rounded-3xl p-8 border border-gray-200 scroll-mt-32">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Service Availability</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We target <strong>99.5% uptime</strong>, which means the service should be available and working properly 
                    at least 99.5% of the time (excluding scheduled maintenance).
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Scheduled maintenance windows will be announced at least 48 hours in advance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Emergency maintenance may be performed without notice if necessary</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>We monitor service status 24/7 and work quickly to resolve issues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Status updates are posted on our website during outages</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-6">
                    While we strive for maximum uptime, no online service can guarantee 100% availability. 
                    Factors beyond our control (like network outages) may impact service.
                  </p>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div id="law" className="bg-gray-50 rounded-3xl p-8 border border-gray-200 scroll-mt-32">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Governing Law</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These Terms of Service are governed by the laws of New South Wales, Australia.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Any disputes will be handled in the courts of New South Wales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>You agree to submit to the jurisdiction of those courts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Before going to court, we encourage you to contact us to resolve any issues informally</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div id="changes" className="bg-gray-50 rounded-3xl p-8 border border-gray-200 scroll-mt-32">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Bell className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Changes to These Terms</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may update these terms from time to time to reflect changes in our service, business practices, or legal requirements.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>We'll notify you of significant changes via email at least 30 days before they take effect</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Minor changes (like fixing typos) may be made without notice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>The "Last updated" date at the top will always reflect the most recent version</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Continuing to use the service after changes means you accept the updated terms</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-6">
                    If you don't agree with updated terms, you can cancel your subscription before they take effect.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-200">
              <h2 className="text-3xl text-gray-900 mb-4">Questions About These Terms?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If anything in these terms is unclear or you have questions, we're happy to help:
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> <a href="mailto:hello@handsfreetradie.com.au" className="text-orange-500 hover:underline">hello@handsfreetradie.com.au</a><br />
                <strong>Phone:</strong> [To Be Added]<br />
                <strong>Address:</strong> Handsfree Pty Ltd, Sydney, NSW, Australia
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
