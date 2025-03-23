import React, { useState } from "react";
import { Send, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 glass-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center title-gradient">
          Contact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Restons en contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <span>email@example.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-400" />
                <span>+33 6 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span>Mesnil-Esnard, France</span>
              </div>
            </div>

            <div className="flex space-x-6 mt-8">
              <a
                href="#"
                className="hover-card p-4 rounded-full hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover-card p-4 rounded-full hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="input-style"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input-style"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="input-style"
                placeholder="Votre message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="button-style flex items-center justify-center w-full"
            >
              <Send className="w-5 h-5 mr-2" />
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
