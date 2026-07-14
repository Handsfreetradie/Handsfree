import logo from "figma:asset/af7ee8e2a310f2295e9721f16147dcd6876b81ea.png";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="Handsfree" className="h-20 sm:h-24 w-auto mb-4 object-contain" />
            <p className="text-sm text-gray-400 leading-relaxed">
              The digital receptionist that never sleeps.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-orange-500 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-orange-500 transition-colors">Pricing</a></li>
              <li><a href="#demo" className="hover:text-orange-500 transition-colors">Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About</Link></li>
              <li><a href="/#inquiry" className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-orange-500 transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-orange-500 transition-colors">Terms</Link></li>
              <li><Link to="/security" className="hover:text-orange-500 transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p className="text-center md:text-left">© 2026 Handsfree. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="https://instagram.com/handsfree.calling" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}