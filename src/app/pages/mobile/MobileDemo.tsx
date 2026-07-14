import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Phone, PhoneOff, ArrowLeft, Volume2 } from "lucide-react";
import logo from "figma:asset/af7ee8e2a310f2295e9721f16147dcd6876b81ea.png";

export function MobileDemo() {
  const [callState, setCallState] = useState<"incoming" | "active" | "ended">("incoming");
  const [callDuration, setCallDuration] = useState(0);
  const [currentCaption, setCurrentCaption] = useState(0);

  const captions = [
    "G'day! This is Handsfree calling on behalf of Jake's Plumbing. How can I help you today?",
    "I can help you book an appointment, answer questions about our services, or connect you with Jake directly.",
    "What day works best for you? We have availability Tuesday and Thursday this week.",
    "Perfect! I've booked you in for Thursday at 2pm. You'll receive a confirmation SMS shortly.",
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (callState === "active") {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
        
        // Cycle through captions every 5 seconds
        if (callDuration > 0 && callDuration % 5 === 0) {
          setCurrentCaption((prev) => (prev + 1) % captions.length);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [callState, callDuration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswer = () => {
    setCallState("active");
  };

  const handleDecline = () => {
    setCallState("ended");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/mobile" className="flex items-center gap-2 text-gray-300">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Back</span>
          </Link>
          <span className="text-sm text-gray-400">Live Demo</span>
        </div>
      </header>

      {/* Call Screen */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-6 py-12">
        <AnimatePresence mode="wait">
          {callState === "incoming" && (
            <motion.div
              key="incoming"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center w-full max-w-sm"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center"
              >
                <Phone className="w-16 h-16 text-white" />
              </motion.div>

              <h2 className="text-3xl mb-2">Incoming Call</h2>
              <p className="text-xl text-gray-300 mb-1">Handsfree</p>
              <p className="text-sm text-gray-400 mb-12">Demo Call</p>

              {/* Action Buttons */}
              <div className="flex gap-6 justify-center">
                <button
                  onClick={handleDecline}
                  className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <PhoneOff className="w-8 h-8 text-white" />
                </button>
                <button
                  onClick={handleAnswer}
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Phone className="w-8 h-8 text-white" />
                </button>
              </div>
            </motion.div>
          )}

          {callState === "active" && (
            <motion.div
              key="active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center w-full max-w-sm"
            >
              <motion.div
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center"
              >
                <Phone className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-2xl mb-1">Handsfree</h2>
              <p className="text-sm text-gray-400 mb-6">{formatTime(callDuration)}</p>

              {/* Sound Wave Animation */}
              <div className="flex justify-center items-center gap-1 mb-8 h-16">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-orange-500 rounded-full"
                    animate={{
                      height: ["20px", "60px", "20px"],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>

              {/* Live Caption */}
              <motion.div
                key={currentCaption}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Volume2 className="w-4 h-4 text-orange-500" />
                  <span className="text-xs text-gray-400">Live Caption</span>
                </div>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {captions[currentCaption]}
                </p>
              </motion.div>

              {/* End Call Button */}
              <button
                onClick={handleDecline}
                className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto hover:bg-red-600 transition-colors"
              >
                <PhoneOff className="w-8 h-8 text-white" />
              </button>
            </motion.div>
          )}

          {callState === "ended" && (
            <motion.div
              key="ended"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center w-full max-w-sm"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-800 flex items-center justify-center">
                <PhoneOff className="w-12 h-12 text-gray-400" />
              </div>

              <h2 className="text-2xl mb-2">Call Ended</h2>
              <p className="text-sm text-gray-400 mb-8">
                Duration: {formatTime(callDuration)}
              </p>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700 text-left">
                <h3 className="text-sm text-gray-400 mb-3">Call Summary</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Receptionist handled initial greeting</li>
                  <li>• Customer inquiry answered</li>
                  <li>• Appointment booked successfully</li>
                  <li>• Confirmation SMS sent</li>
                </ul>
              </div>

              <button
                onClick={() => {
                  setCallState("incoming");
                  setCallDuration(0);
                  setCurrentCaption(0);
                }}
                className="w-full px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
              >
                Try Again
              </button>

              <Link
                to="/onboarding"
                className="block w-full mt-4 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
