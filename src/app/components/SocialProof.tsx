import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Medical Practice Owner",
    content: "Handsfree has completely transformed our patient experience. We never miss appointment requests, even after hours.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Restaurant Manager",
    content: "Our reservation rate increased by 40% since implementing Handsfree. It's like having a full-time host.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Law Firm Partner",
    content: "The professionalism and accuracy are remarkable. Clients can't tell they're speaking with AI.",
    rating: 5,
  },
];

const stats = [
  { value: "24/7", label: "Available" },
  { value: "< 2 sec", label: "Response Time" },
  { value: "99.9%", label: "Uptime" },
  { value: "100%", label: "Call Answer Rate" },
];

export function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-gray-900">
            Loved by <span className="text-orange-500">businesses</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-200"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <div className="text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}