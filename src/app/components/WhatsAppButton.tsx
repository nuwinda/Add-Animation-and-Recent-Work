import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";

export default function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 bg-white rounded-lg shadow-2xl p-6 w-80 border border-gray-100"
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-4">
              <h3 className="font-['Gentium_Book_Basic'] text-xl mb-2 text-black">
                Chat with us on WhatsApp
              </h3>
              <p className="font-['Josefin_Sans'] font-light text-sm text-black/70 leading-relaxed">
                Got questions about our services or pricing? We're here to help!
              </p>
            </div>

            <div className="bg-[#ede4d8] p-4 rounded-lg mb-4">
              <p className="font-['Inria_Serif'] font-light text-sm text-black/80 mb-3">
                Quick replies:
              </p>
              <div className="space-y-2">
                <a
                  href="https://wa.me/94763200883?text=Hi%20Sakshmina,%20I'd%20like%20to%20inquire%20about%20wedding%20photography%20packages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white hover:bg-gray-50 px-3 py-2 rounded text-sm font-['Josefin_Sans'] font-light transition-colors"
                >
                  💍 Wedding packages
                </a>
                <a
                  href="https://wa.me/94763200883?text=Hi%20Sakshmina,%20I'm%20interested%20in%20a%20pre-wedding%20shoot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white hover:bg-gray-50 px-3 py-2 rounded text-sm font-['Josefin_Sans'] font-light transition-colors"
                >
                  📸 Pre-wedding shoot
                </a>
                <a
                  href="https://wa.me/94763200883?text=Hi%20Sakshmina,%20I'd%20like%20to%20check%20your%20availability%20for%20my%20event"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white hover:bg-gray-50 px-3 py-2 rounded text-sm font-['Josefin_Sans'] font-light transition-colors"
                >
                  📅 Check availability
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/94763200883?text=Hi%20Sakshmina,%20I'm%20interested%20in%20your%20photography%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white w-full py-3 rounded-lg hover:bg-[#1fb855] transition-colors font-['Inria_Serif']"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Start Chat</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#1fb855] transition-colors relative"
      >
        <motion.div
          animate={isExpanded ? { rotate: 90, opacity: 0 } : { rotate: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </motion.div>

        <motion.div
          animate={isExpanded ? { rotate: 0, opacity: 1 } : { rotate: -90, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <X className="w-6 h-6" />
        </motion.div>

        <motion.div
          className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          1
        </motion.div>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="absolute -top-12 right-0 bg-white rounded-lg shadow-lg px-4 py-2 whitespace-nowrap"
      >
        <p className="font-['Josefin_Sans'] font-light text-sm text-black">
          👋 Need help? Chat with us!
        </p>
        <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white" />
      </motion.div>
    </div>
  );
}
