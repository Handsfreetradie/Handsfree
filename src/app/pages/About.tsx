import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Phone, Zap, Clock, Users } from "lucide-react";
import { useState } from "react";
import { PhoneDemo } from "../components/PhoneDemo";
import { LeadFormModal } from "../components/LeadFormModal";
import { Link } from "react-router";

// Joint photo of Kyle & Cassie. To turn it on: drop the photo into the
// public folder as kyle-cassie.jpg, then change this to "/kyle-cassie.jpg".
const FOUNDER_PHOTO = "/kyle-cassie.jpg";

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
            We're Kyle <span className="text-orange-500">&amp;</span> Cassie
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Two regular people who got tired of missing calls — and built something
            to help others in the same situation.
          </motion.p>
        </div>
      </section>

      {/* Who we are */}
      <section className="pb-20 px-6">
        {FOUNDER_PHOTO && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <img
              src={FOUNDER_PHOTO}
              alt="Kyle and Cassie, founders of Handsfree"
              className="w-full rounded-3xl shadow-lg border border-gray-200 object-cover"
            />
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200"
        >
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="text-center px-2 py-8 md:py-2 md:px-8">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-white font-bold">K</span>
              </div>
              <h3 className="text-2xl text-gray-900 mb-1">Kyle</h3>
              <p className="text-orange-500 mb-4">Co-founder · Electrician</p>
              <p className="text-gray-600 leading-relaxed">
                Still on the tools. Kyle lived the missed-call problem every day — he knows
                exactly what a tradie needs from a receptionist, because he needed one himself.
              </p>
            </div>

            <div className="text-center px-2 py-8 md:py-2 md:px-8">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-white font-bold">C</span>
              </div>
              <h3 className="text-2xl text-gray-900 mb-1">Cassie</h3>
              <p className="text-orange-500 mb-4">Co-founder · Marketing &amp; Customers</p>
              <p className="text-gray-600 leading-relaxed">
                Cassie spent years answering the calls for Kyle's electrical business, on top of
                everything else in her day. Now she looks after our marketing and our customers.
              </p>
            </div>
          </div>
        </motion.div>
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
                Handsfree is not another generic digital receptionist. It's a fully customisable solution built 
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
                Handsfree didn't start in an office. It started with a phone that wouldn't stop ringing
                — and no way to answer it.
              </p>
              <p>
                Kyle's an electrician. Still is. When you're up a ladder or wiring a switchboard, you
                can't answer your phone — but the customer calling doesn't know that. They just ring
                the next number on Google. Every missed call was money walking out the door.
              </p>
              <p>
                For a long time the fix was Cassie, Kyle's partner, answering his calls between
                everything else in her day. Customer details, job descriptions, callbacks — she was
                the receptionist the business needed. And it worked. The jobs stopped slipping away.
              </p>
              <p>
                But even then, the phone ran our lives. Miss a call and you're playing phone tag for
                two days. Leave it to voicemail and half of them never leave a message — they just
                call the next sparky. We were tired of missing out on jobs, and tired of missing out
                on life, because of a phone.
              </p>
              <p>
                We knew we weren't the only ones dealing with this. So we built Handsfree — a
                digital receptionist that answers every call, takes down the job, and books it in.
                It never misses a call because it's asleep, on another job, or trying to have a life.
              </p>
              <p>
                We're not a big company. We're two regular people who ran into a problem, solved it
                for ourselves, and want to help others in the same situation. When we say we monitor
                your setup and keep improving it — that's us, personally. When you call, you get us.
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
            <h2 className="text-4xl md:text-5xl mb-6">Ready to stop missing calls?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's build your receptionist together
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