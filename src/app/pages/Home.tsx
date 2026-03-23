import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useIsMobile } from "../hooks/useIsMobile";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { PhoneDemo } from "../components/PhoneDemo";
import { HowItWorks } from "../components/HowItWorks";
import { Features } from "../components/Features";
import { DemoCallSection } from "../components/DemoCallSection";
import { PricingSection } from "../components/PricingSection";
import { SocialProof } from "../components/SocialProof";
import { InquiryForm } from "../components/InquiryForm";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";

export function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // Redirect mobile users to mobile-optimized version
  useEffect(() => {
    if (isMobile) {
      navigate("/mobile");
    }
  }, [isMobile, navigate]);

  const handleDemoClick = () => {
    setIsDemoOpen(true);
  };

  // Handle scrolling to hash sections when navigating from other pages
  useEffect(() => {
    if (location.hash) {
      // Wait a bit for the page to fully render
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  // Don't render desktop version on mobile (will redirect)
  if (isMobile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Ensure content is above texture */}
      <div className="relative z-10">
        <Header onDemoClick={handleDemoClick} />
        <Hero onDemoClick={handleDemoClick} />
        <HowItWorks />
        <Features />
        <DemoCallSection onDemoClick={handleDemoClick} />
        <PricingSection />
        <SocialProof />
        <InquiryForm />
        <FinalCTA />
        <Footer />
        
        <PhoneDemo isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      </div>
    </div>
  );
}