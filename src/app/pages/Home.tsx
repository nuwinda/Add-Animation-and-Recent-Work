import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import imgMainPhoto from "figma:asset/d6357cb650e2c6271722681aca236642dcf18f9e.png";
import imgRectangle3 from "figma:asset/f0e39d0b53feea740b40eb7a86c70cf6af47236b.png";
import imgRectangle4 from "figma:asset/eef414e003559a055e07cfa1501cee7456af6ebc.png";
import imgRectangle5 from "figma:asset/cecd0d25b58b5923a9a3869068e4100c512ad43d.png";
import imgRectangle6 from "figma:asset/3a03317223e0ad3689b248e0e5afa2fbd66913c1.png";
import imgRectangle8 from "figma:asset/e2ce841658d34aec49bcb135cae4c7fb72387fbc.png";
import imgRectangle9 from "figma:asset/6e96637162a99a3f708709831dbe3955eb765b69.png";

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden" style={{ position: 'relative' }}>
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div className="relative w-full h-full">
          <img
            src={imgMainPhoto}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-[16.67%] top-1/3 z-10 text-[rgba(0,0,0,0.85)]"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-['Gentium_Basic'] italic text-5xl mb-2 tracking-tight"
        >
          VISUAL
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-['Gentium_Book_Basic'] text-5xl mb-2 tracking-tight"
        >
          STORYTELLER
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-['Gentium_Book_Basic'] text-5xl mb-2 tracking-tight"
        >
          FOR THE WILDLY
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="font-['Gentium_Basic'] italic text-5xl tracking-tight"
        >
          IN LOVE
        </motion.p>
      </motion.div>
    </section>
  );
}

function RecentWorkPreview() {
  return (
    <section className="relative py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="absolute left-0 top-0 bg-[#ede0c2] h-44 w-[32%] flex items-center px-[8.33%]"
      >
        <h2 className="font-['Gentium_Book_Basic'] text-4xl">
          Recent <span className="font-['Gentium_Basic'] italic">Work</span>
        </h2>
      </motion.div>

      <div className="container mx-auto px-[16.67%] pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-8 mb-20"
        >
          <div>
            <h3 className="font-['Inria_Serif'] font-light text-2xl mb-6 leading-tight">
              Romantic & Allegiant
              <br />
              Wedding
            </h3>
            <Link
              to="/recent-work"
              className="inline-block border border-black px-6 py-3 font-['Inria_Serif'] font-light text-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              SEE ALBUM
            </Link>
          </div>

          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.4 }}
            className="relative h-[468px] shadow-xl overflow-hidden"
          >
            <img
              src={imgRectangle3}
              alt="Wedding"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <img
            src={imgRectangle4}
            alt="Wedding detail"
            className="w-full max-w-[434px] ml-auto h-[272px] object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

function SecondWorkSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-[8.33%]">
        <div className="grid grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.4 }}
              className="relative h-[488px] shadow-xl overflow-hidden"
            >
              <img
                src={imgRectangle5}
                alt="Couple"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <img
              src={imgRectangle6}
              alt="Detail"
              className="w-full max-w-[426px] ml-12 h-[280px] object-cover shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-['Inria_Serif'] font-light text-2xl mb-6 leading-tight">
              We capture the most magical
              <br />
              moments of your life...
            </h3>
            <Link
              to="/recent-work"
              className="inline-block border border-black px-6 py-3 font-['Inria_Serif'] font-light text-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              SEE ALBUM
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="relative bg-[#996a4d] py-20 overflow-hidden">
      <div className="container mx-auto px-[8.33%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center font-['Gentium_Book_Basic'] text-4xl text-white mb-16"
        >
          LOVING <span className="font-['Gentium_Basic'] italic">WORDS</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[411px] overflow-hidden rounded-sm shadow-2xl"
          >
            <img
              src={imgRectangle8}
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <p className="font-['Gentium_Book_Basic'] text-2xl mb-4 leading-relaxed">
              "I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.
            </p>
            <p className="font-['Glory'] font-light text-lg leading-relaxed mb-12">
              Let your customers review you and tell their friends how great you
              are. Testimonials provide a sense of what it's like to work with
              you, or what it's like to use your products and services. This can
              show people that you're credible and reliable, and can build trust
              with potential customers."
            </p>
            <p className="font-['Gentium_Book_Basic'] text-2xl">
              Wikum & Sachini
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <div className="w-3 h-3 rounded-full bg-[#3F3F3F]" />
          <div className="w-3 h-3 rounded-full bg-[#D9D9D9]/50" />
          <div className="w-3 h-3 rounded-full bg-[#D9D9D9]/50" />
        </div>
      </div>
    </section>
  );
}

function ReachOutSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-[16.67%]">
        <div className="grid grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[441px] overflow-hidden shadow-2xl"
          >
            <img
              src={imgRectangle9}
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#ede4d8] p-12 shadow-xl"
          >
            <h2 className="font-['Josefin_Sans'] text-4xl mb-6 text-[rgba(0,0,0,0.8)] leading-tight tracking-tight">
              PLANNING <span className="font-['Gentium_Book_Basic'] italic">TOGETHER</span> THE
              <br />
              BEST DAY OF
              <br />
              <span className="font-['Gentium_Book_Basic'] italic">YOUR LIFE</span>
            </h2>
            <p className="font-['Josefin_Sans'] font-light text-xl mb-8 leading-relaxed tracking-tight">
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click "Edit Text" or double click me to add your own
              content and make changes to the font.
            </p>
            <button className="border border-black px-8 py-3 font-['Inria_Serif'] font-light text-lg hover:bg-black hover:text-white transition-all duration-300">
              REACH OUT
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  const images = [
    imgRectangle3,
    imgRectangle5,
    imgMainPhoto,
    imgRectangle4,
    imgRectangle6,
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-[8.33%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Gentium_Book_Basic'] text-4xl mb-12"
        >
          FOLLOW ME
          <br />
          ON <span className="font-['Gentium_Basic'] italic">INSTAGRAM</span>
        </motion.h2>

        <div className="grid grid-cols-5 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="aspect-square overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={img}
                alt={`Instagram ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="bg-[#747761] text-white py-16">
      <div className="container mx-auto px-[8.33%]">
        <div className="grid grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-['Josefin_Sans'] text-lg mb-4">
              Sakshmina Dinushan
            </h3>
            <p className="font-['Inria_Serif'] font-light text-sm mb-2">
              Wedding & Event
              <br />
              Photographer
            </p>
            <p className="font-['Inria_Serif'] font-light text-sm mb-1">
              sakshmina@dinushan.com
            </p>
            <p className="font-['Inria_Serif'] font-light text-sm">
              +94763200883
            </p>
          </div>

          <div className="col-span-2">
            <p className="font-['Josefin_Sans'] text-lg leading-relaxed tracking-tight">
              Sakshmina is a wedding photographer based in Sri Lanka whose style
              is candid and inspiring, with a touch of cinematic flair.
              Experienced in intimate weddings, destination weddings and
              elopements, he is available for world travel wherever love may take
              him.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-white/20">
          <p className="font-['Josefin_Sans'] text-sm">
            © 2026 by Sakshmina Dinushan.
            <br />
            Powered and secured by Nuwinda Lakshan
          </p>

          <div className="flex gap-8">
            <Link
              to="/"
              className="font-['Inria_Serif'] font-light text-sm hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <Link
              to="/recent-work"
              className="font-['Inria_Serif'] font-light text-sm hover:opacity-70 transition-opacity"
            >
              Recent Work
            </Link>
            <Link
              to="/offering"
              className="font-['Inria_Serif'] font-light text-sm hover:opacity-70 transition-opacity"
            >
              Offering
            </Link>
            <Link
              to="/contact"
              className="font-['Inria_Serif'] font-light text-sm hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <RecentWorkPreview />
      <SecondWorkSection />
      <TestimonialSection />
      <ReachOutSection />
      <InstagramSection />
      <FooterSection />
    </motion.div>
  );
}
