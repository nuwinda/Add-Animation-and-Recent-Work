import { motion } from "motion/react";
import { Link } from "react-router";
import imgRectangle3 from "figma:asset/f0e39d0b53feea740b40eb7a86c70cf6af47236b.png";
import imgRectangle5 from "figma:asset/cecd0d25b58b5923a9a3869068e4100c512ad43d.png";
import imgRectangle8 from "figma:asset/e2ce841658d34aec49bcb135cae4c7fb72387fbc.png";
import imgRectangle9 from "figma:asset/6e96637162a99a3f708709831dbe3955eb765b69.png";

const services = [
  {
    title: "Wedding Photography",
    description: "Complete coverage of your special day, from preparation to reception. Capturing every emotion, every detail, every precious moment.",
    features: [
      "Full day coverage (8-12 hours)",
      "Second photographer included",
      "300+ edited high-resolution images",
      "Online gallery for easy sharing",
      "Pre-wedding consultation",
    ],
    price: "Starting from LKR 150,000",
    image: imgRectangle3,
  },
  {
    title: "Pre-Wedding Shoot",
    description: "Celebrate your love story before the big day with a personalized engagement or pre-wedding photography session.",
    features: [
      "2-3 hour photo session",
      "Choice of location",
      "100+ edited images",
      "Outfit changes welcome",
      "Props and styling guidance",
    ],
    price: "Starting from LKR 50,000",
    image: imgRectangle5,
  },
  {
    title: "Destination Weddings",
    description: "Available for travel across Sri Lanka and internationally. Capturing your destination wedding with the beauty of your chosen location.",
    features: [
      "Full destination coverage",
      "Travel and accommodation arranged",
      "Multi-day packages available",
      "Location scouting",
      "Unlimited edited images",
    ],
    price: "Custom pricing",
    image: imgRectangle8,
  },
  {
    title: "Event Photography",
    description: "Professional coverage for engagement parties, homecoming ceremonies, and other special celebrations.",
    features: [
      "Flexible hours",
      "Candid and posed shots",
      "Quick turnaround time",
      "High-resolution images",
      "Professional editing",
    ],
    price: "Starting from LKR 35,000",
    image: imgRectangle9,
  },
];

const packages = [
  {
    name: "Essential",
    ideal: "Perfect for intimate weddings",
    features: [
      "6 hours coverage",
      "Single photographer",
      "200+ edited images",
      "Online gallery",
      "Basic retouching",
    ],
    price: "LKR 120,000",
  },
  {
    name: "Premium",
    ideal: "Our most popular package",
    featured: true,
    features: [
      "10 hours coverage",
      "Two photographers",
      "400+ edited images",
      "Online gallery + USB",
      "Advanced retouching",
      "Pre-wedding consultation",
      "Engagement shoot included",
    ],
    price: "LKR 250,000",
  },
  {
    name: "Luxury",
    ideal: "For the ultimate experience",
    features: [
      "Full day unlimited coverage",
      "Three photographers",
      "600+ edited images",
      "Premium album + USB",
      "Cinematic editing",
      "Pre-wedding shoot",
      "Same-day highlight reel",
      "Drone coverage",
    ],
    price: "LKR 450,000",
  },
];

function PageHero() {
  return (
    <section className="relative h-[50vh] bg-gradient-to-br from-[#ede0c2] via-[#ede4d8] to-[#996a4d]/20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-['Gentium_Book_Basic'] text-6xl mb-6 text-[rgba(0,0,0,0.85)]">
            Our <span className="font-['Gentium_Basic'] italic">Offerings</span>
          </h1>
          <p className="font-['Josefin_Sans'] font-light text-xl max-w-3xl mx-auto leading-relaxed text-black/70">
            Tailored photography services to capture your most precious moments.
            <br />
            Every package is designed with love, care, and artistic vision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`grid grid-cols-2 gap-12 items-center mb-32 ${!isEven ? 'flex-row-reverse' : ''}`}
    >
      <div className={isEven ? 'order-1' : 'order-2'}>
        <motion.h3
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Gentium_Book_Basic'] text-4xl mb-4 text-[rgba(0,0,0,0.85)]"
        >
          {service.title}
        </motion.h3>
        <p className="font-['Josefin_Sans'] font-light text-lg mb-6 leading-relaxed text-black/70">
          {service.description}
        </p>
        <ul className="space-y-3 mb-6">
          {service.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="font-['Inria_Serif'] font-light text-base flex items-start gap-3"
            >
              <span className="text-[#996a4d] mt-1">✓</span>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <p className="font-['Gentium_Book_Basic'] text-2xl text-[#996a4d]">
            {service.price}
          </p>
          <Link
            to="/contact"
            className="border border-black px-6 py-3 font-['Inria_Serif'] font-light text-sm hover:bg-black hover:text-white transition-all duration-300"
          >
            INQUIRE NOW
          </Link>
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.4 }}
        className={`relative h-[500px] overflow-hidden shadow-2xl ${isEven ? 'order-2' : 'order-1'}`}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </motion.div>
    </motion.div>
  );
}

function PackagesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#ede0c2]/30">
      <div className="container mx-auto px-[8.33%]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Gentium_Book_Basic'] text-5xl mb-4 text-[rgba(0,0,0,0.85)]">
            Wedding <span className="font-['Gentium_Basic'] italic">Packages</span>
          </h2>
          <p className="font-['Josefin_Sans'] font-light text-lg text-black/70 max-w-2xl mx-auto">
            Choose the perfect package for your special day
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative bg-white p-8 shadow-xl ${
                pkg.featured ? 'border-2 border-[#996a4d] scale-105' : 'border border-black/10'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#996a4d] text-white px-6 py-1 font-['Inria_Serif'] text-sm">
                  MOST POPULAR
                </div>
              )}

              <h3 className="font-['Gentium_Book_Basic'] text-3xl mb-2 text-center">
                {pkg.name}
              </h3>
              <p className="font-['Inria_Serif'] font-light text-sm text-center text-black/60 mb-6">
                {pkg.ideal}
              </p>

              <div className="text-center mb-8">
                <p className="font-['Gentium_Book_Basic'] text-4xl text-[#996a4d] mb-2">
                  {pkg.price}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li
                    key={i}
                    className="font-['Inria_Serif'] font-light text-sm flex items-start gap-3"
                  >
                    <span className="text-[#996a4d] mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block text-center py-3 font-['Inria_Serif'] font-light transition-all duration-300 ${
                  pkg.featured
                    ? 'bg-[#996a4d] text-white hover:bg-[#7d5640]'
                    : 'border border-black hover:bg-black hover:text-white'
                }`}
              >
                SELECT PACKAGE
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AddOnsSection() {
  const addOns = [
    { name: "Premium Photo Album", price: "LKR 35,000" },
    { name: "Drone Coverage", price: "LKR 25,000" },
    { name: "Same-Day Highlight Reel", price: "LKR 40,000" },
    { name: "Additional Hour", price: "LKR 15,000/hr" },
    { name: "Photo Booth", price: "LKR 30,000" },
    { name: "Cinematic Video", price: "LKR 120,000" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-[8.33%]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Gentium_Book_Basic'] text-4xl mb-4">
            Add-On <span className="font-['Gentium_Basic'] italic">Services</span>
          </h2>
          <p className="font-['Josefin_Sans'] font-light text-lg text-black/70">
            Enhance your package with additional services
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {addOns.map((addon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-[#ede4d8] p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <p className="font-['Inria_Serif'] text-lg mb-2">{addon.name}</p>
              <p className="font-['Gentium_Book_Basic'] text-xl text-[#996a4d]">
                {addon.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-24 bg-[#996a4d]"
    >
      <div className="container mx-auto px-[8.33%] text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Gentium_Book_Basic'] text-5xl mb-6"
        >
          Ready to <span className="font-['Gentium_Basic'] italic">Begin?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-['Josefin_Sans'] font-light text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Let's discuss your vision and create a custom package that perfectly
          fits your needs and budget.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="bg-white text-[#996a4d] px-12 py-4 font-['Inria_Serif'] text-lg hover:bg-[#ede4d8] transition-all duration-300 shadow-xl"
          >
            GET IN TOUCH
          </Link>
          <a
            href="https://wa.me/94763200883?text=Hi%20Sakshmina,%20I'm%20interested%20in%20your%20photography%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-12 py-4 font-['Inria_Serif'] text-lg hover:bg-white hover:text-[#996a4d] transition-all duration-300"
          >
            WHATSAPP US
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function OfferingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <PageHero />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-[8.33%]">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>
      <PackagesSection />
      <AddOnsSection />
      <CTASection />
    </motion.div>
  );
}
