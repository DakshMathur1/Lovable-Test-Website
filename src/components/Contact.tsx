
import React from "react";
import { Animate, GlassCard } from "./ui/motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Animate animation="fade-up">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-indigo-100 text-indigo-800 rounded-full mb-6">
              GET IN TOUCH
            </span>
          </Animate>
          <Animate animation="fade-up" delay={200}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Contact Me
            </h2>
          </Animate>
          <Animate animation="fade-up" delay={400}>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out to me using the contact form or through my social media.
            </p>
          </Animate>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <Animate animation="fade-up" delay={200} className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-gray-600 mb-8">
                  I'm currently open for part-time opportunities, internships, and collaborative projects. Drop me a line!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                    <Mail className="text-indigo-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <a href="mailto:alex@example.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                      alex@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                    <Phone className="text-indigo-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Phone</h4>
                    <a href="tel:+11234567890" className="text-gray-600 hover:text-indigo-600 transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                    <MapPin className="text-indigo-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-gray-600">
                      San Francisco, California
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Animate>

          <Animate animation="fade-up" delay={400} className="lg:col-span-3">
            <GlassCard>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg flex items-center"
                >
                  Send Message
                  <Send size={16} className="ml-2" />
                </button>
              </form>
            </GlassCard>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default Contact;
