"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Car,
  ShieldCheck,
  Truck,
  MessageCircle,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Award,
  Star,
  ChevronRight,
  Search,
  DollarSign,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Why Choose Us */}
      <WhyChooseSection />

      {/* Trust & CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-neutral-200/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <img
              src="/dermiellelogo.png"
              alt="Dermielle Logo"
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#services" className="text-neutral-700 hover:text-brand-primary transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="text-neutral-700 hover:text-brand-primary transition-colors">
              How It Works
            </a>
            <a href="#why-choose" className="text-neutral-700 hover:text-brand-primary transition-colors">
              Why Us
            </a>
            <a href="#contact" className="text-neutral-700 hover:text-brand-primary transition-colors">
              Contact
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-gold text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Started
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-brand opacity-90" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-brand-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20"
          >
            <Sparkles className="w-5 h-5 text-brand-accent" />
            <span className="text-white/90 text-sm font-medium uppercase tracking-wider">
              The Modern Approach to Car Buying
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Stress-Free,
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Data-Driven Car Buying
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
          >
            Our expert guides find your perfect lightly used or luxury car—at up to 30-50% off new car prices. Nationwide service with white-glove delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#services"
              className="group bg-white text-brand-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Find My Car</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              How It Works
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60"
          >
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm">Verified Vehicles</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span className="text-sm">Expert Negotiators</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span className="text-sm">1000+ Happy Drivers</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Starter Package",
      description: "Perfect for those who want expert guidance and research support.",
      features: [
        "1-on-1 consultation with car buying expert",
        "Personalized vehicle recommendations (2-4 picks)",
        "Nationwide inventory sourcing",
        "Verified vehicle listings with history reports",
        "Purchase assistance available",
      ],
      price: "$450",
      popular: false,
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Full Dermielle Experience",
      description: "Complete concierge service for those ready to buy stress-free.",
      features: [
        "Everything in Starter Package",
        "Full purchase negotiation & dealer coordination",
        "Expert price negotiation (save thousands)",
        "Paperwork handling & contract review",
        "Final delivery assistance & shipping coordination",
        "Post-purchase support",
      ],
      price: "$950",
      popular: true,
    },
  ];

  return (
    <section id="services" className="py-24 bg-neutral-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
            Car Buying,
            <span className="bg-gradient-gold bg-clip-text text-transparent"> Done For You</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Choose the service that fits your needs. Expert guidance, premium vehicles, transparent pricing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={cn(
                "relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300",
                service.popular && "ring-2 ring-brand-accent scale-105 md:scale-110"
              )}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-gold text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center text-white">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-brand-primary">{service.price}</div>
                  <div className="text-sm text-neutral-500">one-time fee</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-brand-primary mb-3">{service.title}</h3>
              <p className="text-neutral-600 mb-6">{service.description}</p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={cn(
                  "block w-full text-center py-4 rounded-full font-semibold transition-all duration-300",
                  service.popular
                    ? "bg-gradient-gold text-white hover:shadow-xl hover:scale-105"
                    : "bg-brand-primary text-white hover:bg-brand-secondary hover:shadow-lg"
                )}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            <strong className="text-brand-primary">We save you time, money, and stress.</strong> Skip the dealer hassle. We help you buy smarter—with expert guidance, zero pressure, and one flat fee.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Start Your Journey",
      description: "Choose a service package and book your onboarding call. We'll discuss your needs, budget, and dream car to understand exactly what you're looking for.",
      icon: <MessageCircle className="w-8 h-8" />,
    },
    {
      number: "02",
      title: "Receive Expert Recommendations",
      description: "We hand-select your ideal vehicles based on your lifestyle, reliability needs, and long-term goals. Data-backed recommendations, not sales pitches.",
      icon: <Search className="w-8 h-8" />,
    },
    {
      number: "03",
      title: "Get Matched with Available Inventory",
      description: "We source the best available listings nationwide, verify them with detailed inspections and history reports, and present them to you with key details.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      number: "04",
      title: "Enjoy Purchase & Delivery Support",
      description: "We negotiate the best price, manage all paperwork, coordinate delivery or shipping nationwide—so you can buy with confidence and ease.",
      icon: <Truck className="w-8 h-8" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0A2540 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
            Our Proven
            <span className="bg-gradient-gold bg-clip-text text-transparent"> 4-Step Process</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            How We Save You Time, Money, and Stress
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div className={cn(
                "flex flex-col md:flex-row items-center gap-8 mb-16",
                index % 2 === 1 && "md:flex-row-reverse"
              )}>
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-gradient-brand bg-clip-text text-transparent text-7xl font-bold mb-4 opacity-20">
                    {step.number}
                  </div>
                  <h3 className="text-3xl font-bold text-brand-primary mb-4">{step.title}</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-brand rounded-2xl flex items-center justify-center text-white shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-300">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-brand-accent to-transparent" style={{ top: '100%' }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const features = [
    {
      icon: <Search className="w-10 h-10" />,
      title: "Personalized Recommendations",
      description: "We provide tailored vehicle suggestions based on your needs, budget, and lifestyle—not what's sitting on a dealer's lot.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Verified & Inspected",
      description: "Every vehicle is thoroughly vetted with detailed history reports, inspection data, and market analysis before we present it to you.",
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Nationwide Sourcing",
      description: "We find the best deals anywhere in the continental U.S., expanding your options far beyond local inventory.",
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Expert Negotiation",
      description: "Our experienced negotiators work exclusively for you—no dealer kickbacks, no hidden incentives. Just the best price.",
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "White-Glove Delivery",
      description: "We coordinate shipping, handle all logistics, and ensure your vehicle arrives exactly as promised—stress-free.",
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "Ongoing Support",
      description: "From first call to final delivery and beyond, we're here to answer questions and provide guidance every step of the way.",
    },
  ];

  return (
    <section id="why-choose" className="py-24 bg-brand-primary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/4 w-full h-full bg-brand-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose
            <span className="bg-gradient-gold bg-clip-text text-transparent"> Dermielle</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experience the difference of truly personalized car buying service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass text-white p-8 rounded-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gradient-brand relative overflow-hidden">
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-10 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            "Experience the joy of
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              compassionate car buying."
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Get expert guidance and stress-free car buying at the best prices.
            Ready to find your perfect vehicle?
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.a
              href="tel:+18885204314"
              whileHover={{ scale: 1.05 }}
              className="glass text-white p-6 rounded-2xl hover:bg-white/20 transition-all"
            >
              <Phone className="w-8 h-8 mx-auto mb-3 text-brand-accent" />
              <div className="font-semibold mb-1">Call Us</div>
              <div className="text-white/70 text-sm">(888) 520-4314</div>
            </motion.a>

            <motion.a
              href="mailto:hello@dermielle.com"
              whileHover={{ scale: 1.05 }}
              className="glass text-white p-6 rounded-2xl hover:bg-white/20 transition-all"
            >
              <Mail className="w-8 h-8 mx-auto mb-3 text-brand-accent" />
              <div className="font-semibold mb-1">Email Us</div>
              <div className="text-white/70 text-sm">hello@dermielle.com</div>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="glass text-white p-6 rounded-2xl hover:bg-white/20 transition-all"
            >
              <MapPin className="w-8 h-8 mx-auto mb-3 text-brand-accent" />
              <div className="font-semibold mb-1">Nationwide</div>
              <div className="text-white/70 text-sm">Continental U.S.</div>
            </motion.a>
          </div>

          <motion.a
            href="tel:+18885204314"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-brand-primary px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300"
          >
            Schedule Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/dermiellelogo.png"
                alt="Dermielle Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-neutral-400 mb-6 max-w-md">
              Dermielle is a nationwide car brokerage providing a concierge service for stress-free purchases.
              Our expert guides research, source and negotiate to deliver you the best new and lightly used vehicles—saving you time, money, and stress.
            </p>
            <div className="flex items-center space-x-2 text-neutral-400">
              <Phone className="w-4 h-4" />
              <span>(888) 520-4314</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-neutral-400 hover:text-brand-accent transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="text-neutral-400 hover:text-brand-accent transition-colors">How It Works</a></li>
              <li><a href="#why-choose" className="text-neutral-400 hover:text-brand-accent transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-brand-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-brand-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-brand-accent transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-brand-accent transition-colors">SMS Terms and Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500">
          <p>© {new Date().getFullYear()} Dermielle, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
