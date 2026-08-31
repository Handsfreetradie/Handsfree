import { useState } from "react";
import { motion } from "motion/react";
import { Calculator, TrendingDown } from "lucide-react";
import { Link } from "react-router";

export function MissedCallCalculator() {
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(5);
  const [avgJobValue, setAvgJobValue] = useState(300);

  const weekly = missedCallsPerWeek * avgJobValue;
  const monthly = weekly * 4.33;
  const yearly = weekly * 52;

  const formatCurrency = (value: number) =>
    value.toLocaleString("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 });

  return (
    <section className="py-16 sm:py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 rounded-full mb-4 sm:mb-6">
            <Calculator className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-orange-700">Missed call calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-gray-900">
            What are missed calls <span className="text-orange-500">costing you?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Punch in your own numbers — this is your revenue at risk, not a generic stat.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 sm:p-10">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="missedCalls" className="block text-sm font-medium text-gray-700 mb-2">
                Missed calls per week
              </label>
              <input
                id="missedCalls"
                type="number"
                min={0}
                value={missedCallsPerWeek}
                onChange={(e) => setMissedCallsPerWeek(Math.max(0, Number(e.target.value)))}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-lg"
              />
            </div>
            <div>
              <label htmlFor="jobValue" className="block text-sm font-medium text-gray-700 mb-2">
                Average job value ($)
              </label>
              <input
                id="jobValue"
                type="number"
                min={0}
                value={avgJobValue}
                onChange={(e) => setAvgJobValue(Math.max(0, Number(e.target.value)))}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <motion.div
              key={weekly}
              initial={{ opacity: 0.5, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-50 rounded-2xl p-6 text-center"
            >
              <p className="text-sm text-gray-500 mb-1">Per week</p>
              <p className="text-2xl sm:text-3xl text-gray-900">{formatCurrency(weekly)}</p>
            </motion.div>
            <motion.div
              key={monthly}
              initial={{ opacity: 0.5, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-50 rounded-2xl p-6 text-center"
            >
              <p className="text-sm text-gray-500 mb-1">Per month</p>
              <p className="text-2xl sm:text-3xl text-gray-900">{formatCurrency(monthly)}</p>
            </motion.div>
            <motion.div
              key={yearly}
              initial={{ opacity: 0.5, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-orange-50 rounded-2xl p-6 text-center border-2 border-orange-200"
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <TrendingDown className="w-4 h-4 text-orange-600" />
                <p className="text-sm text-orange-700">Per year</p>
              </div>
              <p className="text-2xl sm:text-3xl text-orange-600">{formatCurrency(yearly)}</p>
            </motion.div>
          </div>

          <div className="text-center">
            <Link
              to="/onboarding"
              className="inline-block px-8 py-4 bg-orange-500 text-white rounded-full text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg"
            >
              Stop losing this revenue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
