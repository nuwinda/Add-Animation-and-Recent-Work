import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import worksData from "../data/works.json";

interface WorkItem {
  id: number;
  title: string;
  couple: string;
  date: string;
  location: string;
  category: string;
  description: string;
  images: string[];
}

// Map asset IDs to imported images
const assetMap: Record<string, string> = {
  "d6357cb650e2c6271722681aca236642dcf18f9e": new URL("figma:asset/d6357cb650e2c6271722681aca236642dcf18f9e.png", import.meta.url).href,
  "f0e39d0b53feea740b40eb7a86c70cf6af47236b": new URL("figma:asset/f0e39d0b53feea740b40eb7a86c70cf6af47236b.png", import.meta.url).href,
  "eef414e003559a055e07cfa1501cee7456af6ebc": new URL("figma:asset/eef414e003559a055e07cfa1501cee7456af6ebc.png", import.meta.url).href,
  "cecd0d25b58b5923a9a3869068e4100c512ad43d": new URL("figma:asset/cecd0d25b58b5923a9a3869068e4100c512ad43d.png", import.meta.url).href,
  "3a03317223e0ad3689b248e0e5afa2fbd66913c1": new URL("figma:asset/3a03317223e0ad3689b248e0e5afa2fbd66913c1.png", import.meta.url).href,
  "e2ce841658d34aec49bcb135cae4c7fb72387fbc": new URL("figma:asset/e2ce841658d34aec49bcb135cae4c7fb72387fbc.png", import.meta.url).href,
  "6e96637162a99a3f708709831dbe3955eb765b69": new URL("figma:asset/6e96637162a99a3f708709831dbe3955eb765b69.png", import.meta.url).href,
};

const works: WorkItem[] = (worksData as any[]).map((work) => ({
  ...work,
  images: work.images.map((id: string) => assetMap[id] || id),
}));

function WorkCard({ work, index }: { work: WorkItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        className="relative overflow-hidden shadow-2xl cursor-pointer"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4 }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.img
            src={work.images[0]}
            alt={work.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
        >
          <h3 className="font-['Gentium_Book_Basic'] text-2xl mb-2">
            {work.title}
          </h3>
          <p className="font-['Inria_Serif'] font-light text-sm">
            {work.couple} • {work.location}
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="overflow-hidden bg-[#ede4d8]"
      >
        <div className="p-8">
          <p className="font-['Josefin_Sans'] font-light text-lg leading-relaxed mb-6">
            {work.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {work.images.slice(1).map((img: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-video overflow-hidden shadow-lg"
              >
                <img
                  src={img}
                  alt={`${work.title} detail ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <p className="font-['Inria_Serif'] font-light text-sm text-black/60">
              {work.date}
            </p>
            <button className="border border-black px-6 py-2 font-['Inria_Serif'] font-light text-sm hover:bg-black hover:text-white transition-all duration-300">
              VIEW FULL ALBUM
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PageHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const mainImage = assetMap["d6357cb650e2c6271722681aca236642dcf18f9e"];

  return (
    <section ref={ref} className="relative h-[60vh] overflow-hidden" style={{ position: 'relative' }}>
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img
          src={mainImage}
          alt="Recent Work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="font-['Gentium_Book_Basic'] text-6xl mb-4">
            Recent <span className="font-['Gentium_Basic'] italic">Work</span>
          </h1>
          <p className="font-['Josefin_Sans'] font-light text-xl max-w-2xl mx-auto leading-relaxed">
            A collection of love stories told through the lens.
            <br />
            Each wedding is unique, each moment irreplaceable.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function FilterSection({ activeFilter, setActiveFilter }: { activeFilter: string; setActiveFilter: (filter: string) => void }) {
  const filters = ["All", "Weddings", "Pre-Wedding", "Destination", "Cultural"];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="py-12 bg-[#ede0c2]/30"
    >
      <div className="container mx-auto px-[8.33%]">
        <div className="flex items-center justify-center gap-6">
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              onClick={() => setActiveFilter(filter)}
              className={`font-['Inria_Serif'] font-light text-lg px-6 py-2 transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-black text-white"
                  : "border border-black text-black hover:bg-black/10"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function WorksGrid({ activeFilter }: { activeFilter: string }) {
  const filteredWorks: WorkItem[] = activeFilter === "All" 
    ? works 
    : works.filter(work => work.category === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-[8.33%]">
        <div className="grid grid-cols-3 gap-12">
          {filteredWorks.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-32 bg-gradient-to-b from-[#ede4d8] to-[#ede0c2]"
    >
      <div className="container mx-auto px-[8.33%] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Gentium_Book_Basic'] text-5xl mb-6 text-[rgba(0,0,0,0.85)]"
        >
          Let's Create <span className="font-['Gentium_Basic'] italic">Your Story</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-['Josefin_Sans'] font-light text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Every love story deserves to be told beautifully. Let's work together
          to capture the most magical moments of your life.
        </motion.p>
        <motion.button
          onClick={() => navigate("/contact")}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-12 py-4 font-['Inria_Serif'] text-lg hover:bg-[#996a4d] transition-all duration-300 shadow-xl cursor-pointer"
        >
          GET IN TOUCH
        </motion.button>
      </div>
    </motion.section>
  );
}

export default function RecentWorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <PageHero />
      <FilterSection activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <WorksGrid activeFilter={activeFilter} />
      <CTASection />
    </motion.div>
  );
}
