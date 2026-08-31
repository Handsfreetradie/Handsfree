import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useIsMobile } from "../hooks/useIsMobile";
import { Seo } from "../components/Seo";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { MissedCallCalculator } from "../components/MissedCallCalculator";
import { PhoneDemo } from "../components/PhoneDemo";
import { LeadFormModal } from "../components/LeadFormModal";
import { HowItWorks } from "../components/HowItWorks";
import { Features } from "../components/Features";
import { DemoCallSection } from "../components/DemoCallSection";
import { SmsOnlySection } from "../components/SmsOnlySection";
import { PricingSection } from "../components/PricingSection";
import { SocialProof } from "../components/SocialProof";
import { InquiryForm } from "../components/InquiryForm";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";

export function Home() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
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
    setIsLeadFormOpen(true);
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
      <Seo
        title="Handsfree — AI Receptionist for Tradies. Never Miss a Call."
        description="Handsfree builds a custom AI digital receptionist around how your trade works. Every call answered, every job captured — built, monitored, and improved for you."
        canonicalPath="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Handsfree",
          url: "https://www.handsfreetradie.com.au/",
          logo: "https://www.handsfreetradie.com.au/assets/af7ee8e2a310f2295e9721f16147dcd6876b81ea-BaJvfsTb.png",
          description: "Custom AI digital receptionist for Australian tradies — call answering, missed-call SMS text-back, and job capture.",
        }}
      />
      {/* Ensure content is above texture */}
      <div className="relative z-10">
        <Header onDemoClick={handleDemoClick} />
        <Hero onDemoClick={handleDemoClick} />
        <MissedCallCalculator />
        <HowItWorks />
        <Features />
        <DemoCallSection onDemoClick={handleDemoClick} />
        <SmsOnlySection />
        <PricingSection />
        <SocialProof />
        <InquiryForm />
        <FinalCTA />
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
    </div>
  );
}