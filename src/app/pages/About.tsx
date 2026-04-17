import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Phone, Zap, Clock, Users } from "lucide-react";
import { useState } from "react";
import { PhoneDemo } from "../components/PhoneDemo";
import { LeadFormModal } from "../components/LeadFormModal";
import { Link } from "react-router";

export function About() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleDemoClick = () => {
    setIsLeadFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onDemoClick={handleDemoClick} />
      
      {/* Hero Section */}
      <section className="pt-56 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl mb-6"
          >
            About Handsfree
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We're on a mission to help businesses never miss another call, powered by cutting-edge AI technology.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We built Handsfree because we've been on the tools when the phone rang and couldn't answer. 
                We've watched good jobs go to the next bloke simply because we missed a call.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Every missed call is a missed invoice. We're here to make sure that never happens again.
              </p>
              <p className="text-lg text-gray-600">
                Handsfree is not another generic AI receptionist. It's a fully customisable AI solution built 
                around how your business actually runs — your hours, your customers, your language, your rules.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl mb-8">What that means for your business</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl mb-2">Never miss a call</h4>
                    <p className="text-gray-600">Day, night, weekend, or when you're under a house with no signal</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl mb-2">Answers in seconds</h4>
                    <p className="text-gray-600">No hold music, no voicemail, no lost jobs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl mb-2">Sounds like you</h4>
                    <p className="text-gray-600">Configured to your business, not a one-size-fits-all script</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl mb-2">Works while you work</h4>
                    <p className="text-gray-600">So you can stay on the tools and still win the job</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Handsfree started with a problem every Australian tradie, healthcare provider, and small business 
                owner knows too well — you can't be on the phone and on the job at the same time.
              </p>
              <p>
                Call centres cost a fortune. Voicemail gets ignored. And in a world where customers just ring the 
                next number on Google if you don't pick up, neither option cuts it anymore.
              </p>
              <p>
                We combined AI, natural language processing, and voice technology to build something different — 
                an AI receptionist that listens, understands, and handles calls exactly the way you'd want them 
                handled. Not a robot. Not a script. A smart, flexible solution that learns your business.
              </p>
              <p>
                From a one-man plumbing operation in Penrith to a multi-location allied health clinic in Brisbane — 
                Handsfree adapts to you, not the other way around.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-16 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">1</span>
              </div>
              <h3 className="text-2xl mb-4">Built for the real world</h3>
              <p className="text-gray-600">
                We understand what it means to run a business in Australia. We don't build for the brochure, 
                we build for the job site.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">2</span>
              </div>
              <h3 className="text-2xl mb-4">Genuinely customisable</h3>
              <p className="text-gray-600">
                Your industry, your call flows, your VIP clients, your after-hours rules. You control it all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">3</span>
              </div>
              <h3 className="text-2xl mb-4">Reliability without excuses</h3>
              <p className="text-gray-600">
                When your livelihood depends on not missing a call, "mostly working" isn't good enough. We're on, always.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Ready to join us?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the future of phone answering for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDemoClick}
                className="px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors text-lg"
              >
                Try Demo
              </button>
              <Link
                to="/"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors text-lg inline-block"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <LeadFormModal
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        onSuccess={() => {
          setIsLeadFormOpen(false);
          setIsDemoOpen(true);
        }}
      />
      <PhoneDemo isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}