import { motion } from "motion/react";
import { useState } from "react";
import { Instagram, Facebook, Mail, Phone, MapPin, Send } from "lucide-react";
import imgRectangle9 from "figma:asset/6e96637162a99a3f708709831dbe3955eb765b69.png";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        eventType: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <section className="relative h-[50vh] bg-gradient-to-br from-[#996a4d] to-[#747761] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={imgRectangle9}
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="font-['Gentium_Book_Basic'] text-6xl mb-6">
              Get in <span className="font-['Gentium_Basic'] italic">Touch</span>
            </h1>
            <p className="font-['Josefin_Sans'] font-light text-xl max-w-2xl mx-auto leading-relaxed">
              Let's start a conversation about capturing your special moments.
              <br />
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-[8.33%]">
          <div className="grid grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-['Gentium_Book_Basic'] text-4xl mb-6 text-[rgba(0,0,0,0.85)]">
                  Let's Create <span className="font-['Gentium_Basic'] italic">Together</span>
                </h2>
                <p className="font-['Josefin_Sans'] font-light text-lg leading-relaxed text-black/70 mb-8">
                  Whether you're planning a wedding, engagement, or special event,
                  I'm here to help capture your story. Fill out the form and I'll
                  get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-[#ede0c2] p-3 rounded-full">
                    <Phone className="w-5 h-5 text-[#996a4d]" />
                  </div>
                  <div>
                    <p className="font-['Inria_Serif'] text-sm text-black/60 mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+94763200883"
                      className="font-['Gentium_Book_Basic'] text-lg hover:text-[#996a4d] transition-colors"
                    >
                      +94 76 320 0883
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-[#ede0c2] p-3 rounded-full">
                    <Mail className="w-5 h-5 text-[#996a4d]" />
                  </div>
                  <div>
                    <p className="font-['Inria_Serif'] text-sm text-black/60 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:sakshmina@dinushan.com"
                      className="font-['Gentium_Book_Basic'] text-lg hover:text-[#996a4d] transition-colors"
                    >
                      sakshmina@dinushan.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-[#ede0c2] p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-[#996a4d]" />
                  </div>
                  <div>
                    <p className="font-['Inria_Serif'] text-sm text-black/60 mb-1">
                      Location
                    </p>
                    <p className="font-['Gentium_Book_Basic'] text-lg">
                      Colombo, Sri Lanka
                    </p>
                  </div>
                </motion.div>
              </div>

              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="font-['Inria_Serif'] text-sm text-black/60 mb-4"
                >
                  Follow us on social media
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex gap-4"
                >
                  <a
                    href="https://instagram.com/sakshmina_dinushan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#996a4d] p-3 rounded-full hover:bg-[#7d5640] transition-colors group"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://facebook.com/sakshmina.dinushan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#996a4d] p-3 rounded-full hover:bg-[#7d5640] transition-colors group"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="mailto:sakshmina@dinushan.com"
                    className="bg-[#996a4d] p-3 rounded-full hover:bg-[#7d5640] transition-colors group"
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://wa.me/94763200883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] p-3 rounded-full hover:bg-[#1fb855] transition-colors group"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="col-span-3 bg-[#ede4d8] p-12 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-['Inria_Serif'] text-sm mb-2 text-black/80"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-black/20 focus:border-[#996a4d] focus:outline-none transition-colors font-['Josefin_Sans'] font-light"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-['Inria_Serif'] text-sm mb-2 text-black/80"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-black/20 focus:border-[#996a4d] focus:outline-none transition-colors font-['Josefin_Sans'] font-light"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-['Inria_Serif'] text-sm mb-2 text-black/80"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-black/20 focus:border-[#996a4d] focus:outline-none transition-colors font-['Josefin_Sans'] font-light"
                      placeholder="+94 xxx xxx xxx"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="eventDate"
                      className="block font-['Inria_Serif'] text-sm mb-2 text-black/80"
                    >
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-black/20 focus:border-[#996a4d] focus:outline-none transition-colors font-['Josefin_Sans'] font-light"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="eventType"
                    className="block font-['Inria_Serif'] text-sm mb-2 text-black/80"
                  >
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-black/20 focus:border-[#996a4d] focus:outline-none transition-colors font-['Josefin_Sans'] font-light"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="pre-wedding">Pre-Wedding Shoot</option>
                    <option value="engagement">Engagement</option>
                    <option value="destination">Destination Wedding</option>
                    <option value="event">Other Event</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-['Inria_Serif'] text-sm mb-2 text-black/80"
                  >
                    Tell us about your event *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-black/20 focus:border-[#996a4d] focus:outline-none transition-colors font-['Josefin_Sans'] font-light resize-none"
                    placeholder="Share details about your event, vision, and any specific requirements..."
                  />
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
                  >
                    <p className="font-['Josefin_Sans'] font-light">
                      Thank you! We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#996a4d] text-white py-4 font-['Inria_Serif'] text-lg hover:bg-[#7d5640] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <span className="font-light">Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#ede0c2]/30 to-white">
        <div className="container mx-auto px-[8.33%] text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-['Gentium_Book_Basic'] text-4xl mb-6 text-[rgba(0,0,0,0.85)]"
          >
            Prefer to <span className="font-['Gentium_Basic'] italic">Chat Directly?</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Josefin_Sans'] font-light text-lg text-black/70 mb-8 max-w-2xl mx-auto"
          >
            Click the button below to start a WhatsApp conversation with us. We're
            available to answer your questions and discuss your photography needs.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="https://wa.me/94763200883?text=Hi%20Sakshmina,%20I'm%20interested%20in%20your%20photography%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 font-['Inria_Serif'] text-lg hover:bg-[#1fb855] transition-all duration-300 shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </motion.a>
        </div>
      </section>
    </motion.div>
  );
}
