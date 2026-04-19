import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-[8.33%] py-5 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="font-['Inria_Serif'] text-lg text-black hover:opacity-70 transition-opacity">
          Sakshmina Dinushan
        </Link>

        <div className="flex items-center gap-10">
          <Link
            to="/"
            className={`font-['Inria_Serif'] font-light text-sm transition-all hover:text-black ${
              location.pathname === "/" ? "text-black" : "text-[#505050]"
            }`}
          >
            About
          </Link>
          <Link
            to="/recent-work"
            className={`font-['Inria_Serif'] font-light text-sm transition-all hover:text-black ${
              location.pathname === "/recent-work" ? "text-black" : "text-[#505050]"
            }`}
          >
            Recent Work
          </Link>
          <Link
            to="/offering"
            className={`font-['Inria_Serif'] font-light text-sm transition-all hover:text-black ${
              location.pathname === "/offering" ? "text-black" : "text-[#505050]"
            }`}
          >
            Offering
          </Link>
          <Link
            to="/contact"
            className={`font-['Inria_Serif'] font-light text-sm transition-all hover:text-black ${
              location.pathname === "/contact" ? "text-black" : "text-[#505050]"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
