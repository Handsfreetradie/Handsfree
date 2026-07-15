import { Link } from "react-router";
import { motion } from "motion/react";
import { Phone, Zap, CheckCircle, Target, Users, Heart, ArrowLeft, Menu } from "lucide-react";
import logo from "figma:asset/af7ee8e2a310f2295e9721f16147dcd6876b81ea.png";

export function MobileAbout() {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/mobile" className="flex items-center gap-2 text-gray-600">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Back</span>
          </Link>
          <img src={logo} alt="Handsfree" className="h-16 w-auto" />
          <Link to="/mobile/more" className="text-gray-600">
            <Menu className="w-5 h-5" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-8 pb-6 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl text-gray-900 mb-3 tracking-tight">
            About <span className="text-orange-500">Handsfree</span>
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            We're on a mission to help Australian businesses never miss another call.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-8 px-6 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl text-gray-900 mb-4">Our Story</h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              We're Kyle and Cassie — two regular people who got tired of missing calls.
            </p>
            <p>
              Kyle's an electrician. Still is. On the tools, you can't answer your phone —
              and the customer calling just rings the next number on Google. For a long time
              the fix was Cassie answering his calls between everything else in her day.
              It worked — the jobs stopped slipping away.
            </p>
            <p>
              But most tradies don't have a Cassie. So we built one. A digital receptionist
              that answers every call, takes down the job, and books it in — even at 3am on
              Christmas Day.
            </p>
            <p>
              We're not a big company. We're two people solving a problem we actually had.
              When you call us, you get us.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-8 px-6">
        <h2 className="text-2xl text-gray-900 mb-6 text-center">Our Values</h2>
        <div className="space-y-4">
          {[
            {
              icon: Target,
              title: "Customer First",
              desc: "Everything we build is focused on helping you win more business.",
            },
            {
              icon: Heart,
              title: "Built for Tradies",
              desc: "We understand the unique challenges of running a trade business.",
            },
            {
              icon: Users,
              title: "Simple & Honest",
              desc: "No BS pricing, no lock-in contracts, just straight-up value.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-gray-50 rounded-xl p-4 flex items-start gap-3 border border-gray-200"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <value.icon className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-1">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <h2 className="text-2xl mb-6 text-center">By the Numbers</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-3xl font-bold mb-1">24/7</div>
            <div className="text-sm text-orange-50">Always Available</div>
          </div>
          <div className="text-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-3xl font-bold mb-1">&lt; 2 sec</div>
            <div className="text-sm text-orange-50">Answer Speed</div>
          </div>
          <div className="text-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-3xl font-bold mb-1">100%</div>
            <div className="text-sm text-orange-50">Calls Answered</div>
          </div>
          <div className="text-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-3xl font-bold mb-1">AU</div>
            <div className="text-sm text-orange-50">Built &amp; Supported</div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-8 px-6">
        <h2 className="text-2xl text-gray-900 mb-4 text-center">Built in Australia</h2>
        <p className="text-sm text-gray-600 text-center max-w-md mx-auto leading-relaxed">
          Two Aussies, one electrical business worth of missed calls, and a receptionist
          we wished existed. Everything we build is tested on real jobs, by a real tradie.
        </p>
      </section>

      {/* CTA */}
      <section className="py-8 px-6">
        <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
          <h2 className="text-2xl text-gray-900 mb-3">Join us on our mission</h2>
          <p className="text-sm text-gray-600 mb-6">
            Start capturing every lead with your digital receptionist
          </p>
          <Link 
            to="/onboarding" 
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full font-medium"
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
