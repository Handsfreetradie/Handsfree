import { Link } from "react-router";
import { motion } from "motion/react";
import { Phone, Zap, CheckCircle, Menu, Info, Mail, Shield, FileText, Building, ChevronRight } from "lucide-react";
import logo from "figma:asset/af7ee8e2a310f2295e9721f16147dcd6876b81ea.png";

export function MobileMore() {
  const menuItems = [
    {
      icon: Info,
      title: "About Us",
      desc: "Learn about our mission",
      link: "/mobile/about",
    },
    {
      icon: Mail,
      title: "Contact",
      desc: "Get in touch with us",
      link: "/mobile/contact",
    },
    {
      icon: Phone,
      title: "Demo",
      desc: "Try the interactive demo",
      link: "/mobile/demo",
    },
    {
      icon: Shield,
      title: "Privacy Policy",
      desc: "How we protect your data",
      link: "/privacy",
    },
    {
      icon: FileText,
      title: "Terms of Service",
      desc: "Legal terms and conditions",
      link: "/terms",
    },
    {
      icon: Building,
      title: "Security",
      desc: "Our security practices",
      link: "/security",
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Handsfree" className="h-20 w-auto" />
        </div>
      </header>

      {/* Page Title */}
      <section className="pt-8 pb-6 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl text-gray-900 mb-3 tracking-tight">More</h1>
          <p className="text-base text-gray-600">
            Explore additional resources and information
          </p>
        </motion.div>
      </section>

      {/* Menu Items */}
      <section className="px-6 space-y-3">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={item.link}
              className="bg-white rounded-xl p-4 flex items-center gap-4 border border-gray-200 hover:border-orange-500 transition-all active:scale-95"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Social Links */}
      <section className="py-8 px-6">
        <h2 className="text-lg text-gray-900 mb-4">Follow Us</h2>
        <div className="flex gap-3">
          <a
            href="https://instagram.com/handsfree.calling"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-4 text-center font-medium"
          >
            Instagram
          </a>
          <a
            href="#"
            className="flex-1 bg-gray-900 text-white rounded-xl p-4 text-center font-medium"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* App Info */}
      <section className="px-6 pb-8">
        <div className="text-center text-sm text-gray-500">
          <p>Handsfree v1.0.0</p>
          <p className="mt-1">© 2026 Handsfree. All rights reserved.</p>
          <p className="mt-2 text-xs">Made with ❤️ in Sydney, Australia</p>
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
          <Link to="/mobile/more" className="text-orange-500 text-xs flex flex-col items-center gap-1">
            <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center">
              <Menu className="w-4 h-4" />
            </div>
            <span>More</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
