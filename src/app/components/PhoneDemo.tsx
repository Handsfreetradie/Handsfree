import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, PhoneOff, Volume2, Mic, MicOff } from "lucide-react";
import { RetellWebClient } from "retell-client-js-sdk";
import { RETELL_CONFIG } from "../config/retell";

const DEMO_LIMIT = 2;
const DEMO_COUNT_KEY = "handsfree_demo_count";

function getDemoCount() {
  return parseInt(localStorage.getItem(DEMO_COUNT_KEY) || "0", 10);
}

function incrementDemoCount() {
  localStorage.setItem(DEMO_COUNT_KEY, String(getDemoCount() + 1));
}

export function PhoneDemo({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [callState, setCallState] = useState<"incoming" | "active" | "ended">("incoming");
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [transcript, setTranscript] = useState<string>("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string>("");
  
  const retellClient = useRef<RetellWebClient | null>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const resetCall = () => {
    setCallState("incoming");
    setCallDuration(0);
    setTranscript("");
    setIsConnecting(false);
    setError("");
    setIsMuted(false);
  };

  const handleCallEnd = () => {
    setCallState("ended");
    setTimeout(() => {
      onClose();
      resetCall();
    }, 1500);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Toggle mute in Retell client if needed
  };

  const handleAccept = async () => {
    if (getDemoCount() >= DEMO_LIMIT) {
      setError("You've used your 2 demo calls. Book a call with us to get your own receptionist set up.");
      return;
    }
    setIsConnecting(true);
    setError("");

    try {
      // Register the call and get the access token
      const response = await fetch("https://api.retellai.com/v2/create-web-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${RETELL_CONFIG.apiKey}`,
        },
        body: JSON.stringify({
          agent_id: RETELL_CONFIG.agentId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to register call");
      }

      const data = await response.json();
      
      // Start the call with the access token
      if (retellClient.current) {
        await retellClient.current.startCall({
          accessToken: data.access_token,
        });
        incrementDemoCount();
      }
    } catch (err) {
      console.error("Error starting call:", err);
      setError("Failed to start call. Please check your Retell configuration.");
      setIsConnecting(false);
      setCallState("incoming");
    }
  };

  const handleDecline = () => {
    if (retellClient.current) {
      retellClient.current.stopCall();
    }
    handleCallEnd();
  };

  useEffect(() => {
    if (callState === "active") {
      const timer = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [callState]);

  // Initialize Retell client
  useEffect(() => {
    retellClient.current = new RetellWebClient();

    // Setup event listeners
    retellClient.current.on("call_started", () => {
      console.log("Call started");
      setCallState("active");
      setIsConnecting(false);
    });

    retellClient.current.on("call_ended", () => {
      console.log("Call ended");
      setCallState("ended");
      setTimeout(() => {
        onClose();
        resetCall();
      }, 1500);
    });

    retellClient.current.on("agent_start_talking", () => {
      console.log("Agent started talking");
    });

    retellClient.current.on("agent_stop_talking", () => {
      console.log("Agent stopped talking");
    });

    retellClient.current.on("audio", (audio) => {
      // Audio is being transmitted
    });

    retellClient.current.on("update", (update) => {
      // Handle transcript updates
      if (update.transcript) {
        const latestTranscript = update.transcript[update.transcript.length - 1];
        if (latestTranscript) {
          setTranscript(latestTranscript.content);
        }
      }
    });

    retellClient.current.on("metadata", (metadata) => {
      console.log("Metadata:", metadata);
    });

    retellClient.current.on("error", (error) => {
      console.error("Retell error:", error);
      setError("Connection error. Please check your credentials.");
      setCallState("ended");
      setTimeout(() => {
        onClose();
        resetCall();
      }, 1500);
    });

    return () => {
      if (retellClient.current) {
        retellClient.current.stopCall();
      }
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[350px] h-[700px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden"
          >
            {/* iPhone notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />

            {/* Screen content */}
            <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black text-white">
              {/* Incoming call screen */}
              {callState === "incoming" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-between py-16 px-6"
                >
                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-2">Demo Call</p>
                    <h3 className="text-3xl mb-2">Your Receptionist</h3>
                    <p className="text-gray-400">Receptionist</p>
                    {error && (
                      <p className="text-red-400 text-sm mt-4 px-4">{error}</p>
                    )}
                  </div>

                  <motion.div
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <Phone className="w-16 h-16" />
                  </motion.div>

                  <div className="flex gap-8">
                    <button
                      onClick={handleDecline}
                      className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors"
                      disabled={isConnecting}
                    >
                      <PhoneOff className="w-8 h-8" />
                    </button>
                    <button
                      onClick={handleAccept}
                      className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-colors disabled:opacity-50"
                      disabled={isConnecting}
                    >
                      {isConnecting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-8 h-8 border-4 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <Phone className="w-8 h-8" />
                      )}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Active call screen */}
              {callState === "active" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-between py-16 px-6"
                >
                  <div className="text-center">
                    <h3 className="text-3xl mb-2">Your Receptionist</h3>
                    <p className="text-green-400 text-sm mb-4">{formatTime(callDuration)}</p>
                    
                    {/* Animated sound wave */}
                    <div className="flex gap-1 justify-center h-16 items-center">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-orange-500 rounded-full"
                          animate={{
                            height: ["20px", "40px", "20px"],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Live Transcript */}
                  <div className="w-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 min-h-[120px] max-h-[200px] overflow-y-auto flex items-center justify-center">
                    {transcript ? (
                      <p className="text-center text-lg">"{transcript}"</p>
                    ) : (
                      <p className="text-center text-gray-400">Listening...</p>
                    )}
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-6">
                      <button
                        onClick={toggleMute}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                          isMuted ? "bg-red-500 hover:bg-red-600" : "bg-gray-700 hover:bg-gray-600"
                        }`}
                      >
                        {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                      </button>
                      <button className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                        <Volume2 className="w-6 h-6" />
                      </button>
                    </div>
                    <button
                      onClick={handleDecline}
                      className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      <PhoneOff className="w-8 h-8" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Ended call screen */}
              {callState === "ended" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center"
                >
                  <p className="text-gray-400 text-xl">Call Ended</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}