"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { useState, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export default function Home() {
  /* ---------------- subscription popup logic (unchanged) ---------------- */
  const [showPopup, setShowPopup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!firstName || !email) {
      toast.remove();
      toast.error("Please fill out all fields.");
      return;
    }
    toast.loading("Loading...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "subscribe", firstName, email }),
      });
      const data = await res.json();
      toast.remove();
      if (res.ok && data.message === "Success") {
        toast.success("Thanks for subscribing!");
        setFirstName("");
        setEmail("");
      } else toast.error(data.message || "Something went wrong");
    } catch {
      toast.remove();
      toast.error("Network error");
    }
  };

  /* ----------------------------- hero images ---------------------------- */
  const slides = [
    "chocolate.jpg",
    "coffee.jpg",
    "strawber.jpg",
    "red.jpg",
    "orange.jpg",
    "peep.jpg",
  ];

  const doubled = slides.concat(slides); // for seamless loop

  return (
    <div className="bg-white text-black">
      <Navbar />
      <Toaster position="top-right" />

      {/* ------------------------------- HERO ------------------------------ */}
      <section className="pt-24 pb-10 text-center flex flex-col items-center gap-6 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          DRINK <span className="text-orange-500">SMARTER</span>
        </h1>
        <p className="max-w-xl text-lg font-medium">
          All your nutrition in one bold sip.
        </p>

        {/* Image carousel */}
        <div className="w-full overflow-hidden py-4">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {doubled.map((src, i) => (
              <Image
                key={i}
                src={`/photos/${src}`}
                alt="drink"
                width={160}
                height={160}
                className="object-cover w-40 h-40 mx-2 rounded-lg shadow-md flex-shrink-0"
              />
            ))}
          </motion.div>
        </div>

        <div className="flex gap-4 mt-4">
          <Link
            href="/menu"
            className="bg-orange-500 text-white px-5 py-2 rounded-lg font-bold hover:scale-105 transition"
          >
            View Menu
          </Link>
          <Link
            href="/togo-kit"
            className="border border-orange-500 text-orange-500 px-5 py-2 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition"
          >
            To‑Go Kits
          </Link>
        </div>
      </section>

      {/* -------------------------- PROMOTIONS ---------------------------- */}
      <section className="max-w-screen-xl mx-auto px-4 py-20 grid sm:grid-cols-2 gap-10">
        {/* Event card */}
        <div className="relative h-72 sm:h-80 md:h-96 rounded-2xl shadow-lg group">
          <Image
            src="/photos/image1.jpeg"
            alt="events"
            fill
            className="object-cover transition-transform duration-500 "
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-end p-6 text-white">
            <h3 className="text-3xl font-bold mb-1">Cater Your Event</h3>
            <p className="text-sm mb-4">Custom teas & shakes tailored to your crowd.</p>
            <Link
              href="/events"
              className="self-start bg-orange-500 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:brightness-110 transition"
            >
              Events
            </Link>
          </div>
        </div>

        {/* Subscribe card */}
        <div className="relative h-72 sm:h-80 md:h-96 rounded-2xl shadow-lg group">
          <Image
            src="/photos/image3.jpeg"
            alt="subscribe"
            fill
            className="object-cover transition-transform duration-500 "
          />
          <div className="absolute inset-0 bg-blue-900/50 backdrop-blur-sm flex flex-col justify-end p-6 text-white">
            <h3 className="text-3xl font-bold mb-1">Stay in the Loop</h3>
            <p className="text-sm mb-4">Get first dibs on new flavors.</p>
            <button
              onClick={() => setShowPopup(true)}
              className="self-start bg-orange-500 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:brightness-110 transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* --------------------------- HOURS + MAP --------------------------- */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-screen-lg mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Hours</h2>
            <ul className="space-y-1 font-medium">
              {[
                "Mon – Fri · 7 AM – 3 PM",
                "Sat · 10 AM – 2 PM",
                "Sun · Closed",
              ].map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <Link
              href="https://www.google.com/maps/place/Gator+Nutrition/@29.632644,-82.3733485,17z"
              target="_blank"
              className="inline-block mt-4 text-orange-600 underline"
            >
              3314 SW 35th Blvd, Gainesville, FL
            </Link>
          </div>
          <div className="flex-1 w-full h-64 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.4304755405654!2d-82.3759237!3d29.632644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8a3f220440665%3A0xf91a6467369349ac!2sGator%20Nutrition!5e0!3m2!1sen!2sus!4v1689988888888!5m2!1sen!2sus"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />

      {/* ------------------------- SUBSCRIBE POPUP ------------------------- */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-center">Subscribe</h3>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded-md"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 rounded-md font-bold hover:brightness-110"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              className="text-sm text-gray-500 underline mx-auto"
            >
              Close
            </button>
          </motion.form>
        </div>
      )}
    </div>
  );
}
