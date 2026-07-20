import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Envelope, Phone, MapPin, PaperPlaneRight, GithubLogo, LinkedinLogo, CheckCircle } from "phosphor-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate API submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-base-200 flex items-center min-h-screen overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto w-full flex flex-col gap-12"
      >
        <div>
          <h2 className="title text-5xl md:text-6xl mb-4">Contact</h2>
          <p className="text-base-content/60 max-w-lg text-sm md:text-base">
            Get in touch! I am actively looking for internship opportunities. Whether you have a project idea, a position to fill, or just want to say hi, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold font-mono tracking-tight text-base-content mb-2">Connect Info</h3>
              
              <div className="flex gap-4 items-center">
                <div className="text-primary bg-primary/5 p-3.5 rounded-2xl border border-base-300/30">
                  <Envelope size={24} weight="regular" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-base-content/50 font-mono">Email</p>
                  <a href="mailto:yako.rabeson@gmail.com" className="text-sm font-medium hover:text-primary transition-colors duration-200">
                    yako.rabeson@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="text-primary bg-primary/5 p-3.5 rounded-2xl border border-base-300/30">
                  <Phone size={24} weight="regular" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-base-content/50 font-mono">Phone</p>
                  <a href="tel:+261345678910" className="text-sm font-medium hover:text-primary transition-colors duration-200">
                    +261 34 56 789 10
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="text-primary bg-primary/5 p-3.5 rounded-2xl border border-base-300/30">
                  <MapPin size={24} weight="regular" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-base-content/50 font-mono">Location</p>
                  <p className="text-sm font-medium">Antananarivo, Madagascar</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-base-300/40">
              <h4 className="text-xs uppercase font-bold tracking-wider text-base-content/40 font-mono mb-4">Follow Me</h4>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/Yako-Rabeson" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline btn-circle border-base-300 hover:bg-primary hover:border-primary hover:text-primary-content transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <GithubLogo size={20} weight="regular" />
                </a>
                <a 
                  href="https://linkedin.com/in/yako-rabeson" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline btn-circle border-base-300 hover:bg-primary hover:border-primary hover:text-primary-content transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinLogo size={20} weight="regular" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="lg:col-span-7 bg-base-100 border border-base-300 rounded-3xl p-6 md:p-8 shadow-xs">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control w-full">
                      <label className="label py-1 text-xs font-mono font-bold tracking-wide uppercase text-base-content/60">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="input input-bordered w-full bg-base-200/50 border-base-300 focus:outline-none focus:border-primary text-sm font-mono"
                      />
                    </div>
                    <div className="form-control w-full">
                      <label className="label py-1 text-xs font-mono font-bold tracking-wide uppercase text-base-content/60">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="input input-bordered w-full bg-base-200/50 border-base-300 focus:outline-none focus:border-primary text-sm font-mono"
                      />
                    </div>
                  </div>

                  <div className="form-control w-full">
                    <label className="label py-1 text-xs font-mono font-bold tracking-wide uppercase text-base-content/60">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Collaboration opportunity"
                      className="input input-bordered w-full bg-base-200/50 border-base-300 focus:outline-none focus:border-primary text-sm font-mono"
                    />
                  </div>

                  <div className="form-control w-full">
                    <label className="label py-1 text-xs font-mono font-bold tracking-wide uppercase text-base-content/60">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project..."
                      rows="5"
                      className="textarea textarea-bordered w-full bg-base-200/50 border-base-300 focus:outline-none focus:border-primary text-sm font-mono h-32 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary mt-2 font-mono flex items-center justify-center gap-2 text-sm w-full"
                  >
                    {loading ? (
                      <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                      <>
                        Send Message <PaperPlaneRight size={18} weight="bold" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-12 px-4 text-center gap-4"
                >
                  <div className="text-success bg-success/10 p-4 rounded-full border border-success/20">
                    <CheckCircle size={48} weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-mono text-base-content">Message Sent!</h3>
                    <p className="text-sm text-base-content/70 mt-2 max-w-sm">
                      Thank you for reaching out, your message has been sent successfully. I will get back to you as soon as possible!
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline btn-sm font-mono mt-4 border-base-300 hover:bg-base-200"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
