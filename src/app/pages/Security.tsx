import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Lock, Shield, Server, Key, Bell, CheckCircle, Mail, MapPin } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import logo from "figma:asset/af7ee8e2a310f2295e9721f16147dcd6876b81ea.png";

export function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All call data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Your customer conversations are protected at every step.",
    },
    {
      icon: Server,
      title: "Australian Data Hosting",
      description: "Your data is stored in secure Australian data centres (AWS Sydney region) to ensure compliance with Australian privacy laws and minimize latency.",
    },
    {
      icon: Key,
      title: "Access Controls",
      description: "Multi-factor authentication (MFA), role-based access controls, and encrypted API keys ensure only authorized users can access your account.",
    },
    {
      icon: Shield,
      title: "Call Recording Security",
      description: "Call recordings are stored with bank-level encryption. You control retention periods and can permanently delete recordings at any time from your dashboard.",
    },
    {
      icon: Bell,
      title: "Data Breach Notification",
      description: "In the unlikely event of a data breach, we'll notify affected customers within 72 hours in compliance with the Australian Notifiable Data Breaches scheme.",
    },
    {
      icon: CheckCircle,
      title: "Security Audits",
      description: "We conduct regular third-party security audits and penetration testing to identify and fix vulnerabilities before they become issues.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <img src={logo} alt="Handsfree" className="h-24 w-auto mx-auto mb-8 object-contain" />
            
            {/* Trust Banner */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 mb-12 border border-green-200">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl text-gray-900">
                  Your data and your customers' data is treated with the same care you give your own business
                </h2>
              </div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                We understand that when you trust us with your phone calls, you're trusting us with your reputation. 
                Security and privacy aren't just features—they're our foundation.
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
              Security & Data Protection
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade security built for Australian small businesses. 
              We protect your data so you can focus on your customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section ref={ref} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-green-500 transition-all hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Security Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Data Retention */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Call Recording Storage & Retention</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You're in complete control of your call recordings:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Default retention:</strong> Call recordings are stored for 12 months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Customizable:</strong> Adjust retention periods from your dashboard (30 days to 7 years)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Export anytime:</strong> Download recordings and transcripts in standard formats</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Permanent deletion:</strong> Delete individual recordings or your entire archive instantly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Post-cancellation:</strong> Data is securely deleted within 30 days of account closure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Infrastructure & Compliance</h2>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Where Your Data Lives</h3>
                      <p className="leading-relaxed">
                        All customer data is hosted in <strong>Australian data centres</strong> (AWS Sydney ap-southeast-2 region). 
                        This ensures compliance with Australian privacy laws and keeps your data sovereign on Australian soil.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Processing</h3>
                      <p className="leading-relaxed">
                        Our AI voice recognition services may process audio through secure offshore providers (OpenAI, Google Cloud). 
                        Audio is transmitted via encrypted channels and is never stored by these providers—only transcripts are retained, 
                        which are stored in Australia.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance Standards</h3>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Australian Privacy Act 1988 & Australian Privacy Principles (APPs)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Notifiable Data Breaches (NDB) scheme compliance</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>ISO 27001 aligned security practices</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>SOC 2 Type II certification (in progress)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Authentication */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Key className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Authentication & Access Controls</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use multiple layers of security to ensure only you and your authorized team members can access your account:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Multi-Factor Authentication (MFA):</strong> Optional but strongly recommended for all accounts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Role-based access:</strong> Assign team members different permission levels (Admin, Manager, Viewer)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Session management:</strong> Automatic logout after inactivity and suspicious login detection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>API security:</strong> Encrypted API keys with IP whitelisting and rate limiting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Audit logs:</strong> Track all account activity and access attempts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Breach Response */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Bell className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Data Breach Response</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We take data breaches seriously. While we invest heavily in prevention, we also have a clear plan in case the unexpected happens:
                  </p>
                  <div className="bg-orange-50 rounded-2xl p-6 mb-6 border border-orange-200">
                    <p className="text-gray-900 font-semibold mb-2">72-Hour Notification Guarantee</p>
                    <p className="text-gray-700 leading-relaxed">
                      If we identify an eligible data breach affecting your account, we'll notify you within 72 hours 
                      in compliance with the Australian Notifiable Data Breaches (NDB) scheme.
                    </p>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Immediate containment:</strong> Our security team acts within minutes to contain breaches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Transparent communication:</strong> We'll explain what happened, what data was affected, and what we're doing about it</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Support:</strong> Dedicated support team to answer questions and help you respond</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Regulatory notification:</strong> We'll notify the OAIC and any other required authorities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third Party Security */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Third-Party Security Audits</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We believe in independent verification. Our security approach includes:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Annual penetration testing:</strong> Ethical hackers attempt to find vulnerabilities in our systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Code reviews:</strong> Third-party security experts review our codebase for security flaws</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Vulnerability scanning:</strong> Automated daily scans for known security issues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Bug bounty program:</strong> Security researchers are rewarded for responsibly disclosing issues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Compliance audits:</strong> Regular reviews to maintain ISO 27001 alignment and SOC 2 certification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security Badges */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
              <h2 className="text-3xl mb-8 text-center">Security Certifications & Standards</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-3 text-green-400" />
                  <p className="font-semibold mb-1">ISO 27001</p>
                  <p className="text-sm text-gray-300">Aligned</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                  <Lock className="w-12 h-12 mx-auto mb-3 text-green-400" />
                  <p className="font-semibold mb-1">AES-256</p>
                  <p className="text-sm text-gray-300">Encryption</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-400" />
                  <p className="font-semibold mb-1">Privacy Act</p>
                  <p className="text-sm text-gray-300">Compliant</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                  <Server className="w-12 h-12 mx-auto mb-3 text-green-400" />
                  <p className="font-semibold mb-1">Australian</p>
                  <p className="text-sm text-gray-300">Data Centres</p>
                </div>
              </div>
            </div>

            {/* Contact Security Team */}
            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl text-gray-900 mb-4">Security Concerns?</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    If you have security questions, concerns, or need to report a vulnerability, our security team is here to help:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Security inquiries:</strong> <a href="mailto:hello@handsfreetradie.com.au" className="text-orange-500 hover:underline">hello@handsfreetradie.com.au</a></p>
                    <p><strong>Vulnerability reports:</strong> <a href="mailto:hello@handsfreetradie.com.au" className="text-orange-500 hover:underline">hello@handsfreetradie.com.au</a></p>
                    <p><strong>Privacy questions:</strong> <a href="mailto:hello@handsfreetradie.com.au" className="text-orange-500 hover:underline">hello@handsfreetradie.com.au</a></p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    We respond to all security reports within 24 hours and maintain confidentiality throughout the disclosure process.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
