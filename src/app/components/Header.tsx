import { motion } from "motion/react";
import logo from "figma:asset/af7ee8e2a310f2295e9721f16147dcd6876b81ea.png";
import { Link, useLocation, useNavigate } from "react-router";

export function Header({ onDemoClick }: { onDemoClick?: () => void }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If on home page, just scroll to section
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home with hash
      navigate("/" + sectionId);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Handsfree" className="h-24 sm:h-32 md:h-40 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#how-it-works"
            onClick={(e) => handleNavClick(e, "#how-it-works")}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            How It Works
          </a>
          <a 
            href="#features"
            onClick={(e) => handleNavClick(e, "#features")}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </a>
          <a 
            href="#demo"
            onClick={(e) => handleNavClick(e, "#demo")}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Demo
          </a>
          <a 
            href="#pricing"
            onClick={(e) => handleNavClick(e, "#pricing")}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Pricing
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {onDemoClick && (
            <button
              onClick={onDemoClick}
              className="hidden sm:block px-4 sm:px-6 py-2 sm:py-2.5 border border-gray-300 text-gray-700 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all text-sm sm:text-base"
            >
              Try Demo
            </button>
          )}
          <Link to="/onboarding" className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base whitespace-nowrap">
            Get Started
          </Link>
        </div>
      </div>
    </motion.header>
  );
}