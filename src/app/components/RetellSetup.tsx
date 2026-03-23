import { motion } from "motion/react";
import { Settings, Key, CheckCircle } from "lucide-react";

export function RetellSetup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-50 max-w-md"
    >
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 shadow-2xl text-white">
        <div className="flex items-start gap-3 mb-4">
          <Settings className="w-6 h-6 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg mb-2">Retell Setup Required</h3>
            <p className="text-sm text-white/90 mb-4">
              To enable live AI calls, add your Retell credentials:
            </p>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <div>
              <p className="opacity-90">1. Open <code className="bg-white/20 px-1.5 py-0.5 rounded text-xs">/src/app/config/retell.ts</code></p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Key className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <div>
              <p className="opacity-90">2. Replace with your credentials:</p>
              <div className="mt-2 bg-black/30 rounded-lg p-3 text-xs font-mono">
                <div className="text-green-300">agentId: <span className="text-yellow-300">"agent_xxx"</span></div>
                <div className="text-green-300">apiKey: <span className="text-yellow-300">"key_xxx"</span></div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <div>
              <p className="opacity-90">3. Click "Try the Demo Call" to test!</p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/20 text-xs opacity-75">
          Get your credentials at <a href="https://retellai.com" target="_blank" rel="noopener noreferrer" className="underline">retellai.com</a>
        </div>
      </div>
    </motion.div>
  );
}