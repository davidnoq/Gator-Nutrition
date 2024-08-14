"use client";

import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

import { FormEvent, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

import Link from "next/link";

export default function Contact() {

  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      email.length === 0 ||
      message.length === 0
    ) {
      toast.remove();
      toast.error("Please fill out all fields.");
    } else {
      toast.loading("Loading...");
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "contactForm", // Ensure 'action' field is included
            firstName,
            lastName,
            email,
            message,
          }),
        });
  
        const data = await response.json();
        if (response.ok && data.message === "Success") {
          toast.remove();
          toast.success("Message submitted successfully!");
          // Clear form fields
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
        } else {
          toast.remove();
          toast.error(data.message || "An error occurred while submitting the message.");
        }
      } catch (error) {
        console.error("Error submitting contact form: ", error);
        toast.remove();
        toast.error("An error occurred while submitting the message.");
      }
    }
  };
  

  return (
    <>
      <Toaster position="top-right" />
      <div className="bg-white"><Navbar />
      <div className="max-w-screen text-black bg-white min-h-screen flex items-center flex-col justify-center overflow-x-hidden">
        
      <div className="text-center  px-20 pt-32">
          <h1 className="text-5xl font-bold text-black">Contact Us</h1>
          <h2 className="pt-5 text-black">We are open to all inquiries.</h2>
          <button className="border-transparent border-2 font-bold hover-shine mt-8 bg-orange-500 text-white py-2 px-4 rounded-lg  transition">
          <Link href="/">Go Home</Link>
          </button>
        </div>
        <div className="flex-1 px-6 py-20">
          <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "backOut" }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 border bg-gray-200 p-10 rounded-lg max-w-lg m-auto"
          >
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
              className="text-gray-600 mb-10 text-center"
            >
              Submit a ticket, and we will get back to you as soon as possible.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "backOut" }}
            >
              First Name
            </motion.p>
            <motion.input
              type="text"
              id="firstName"
              placeholder="David"
              className="p-2 rounded-lg placeholder:text-gray-500 text-black bg-white outline-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "backOut" }}
            >
              Last Name
            </motion.p>
            <motion.input
              type="text"
              id="lastName"
              placeholder="Noguera"
              className="p-2 rounded-lg placeholder:text-gray-500 text-black bg-white outline-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "backOut" }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "backOut" }}
            >
              Email
            </motion.p>
            <motion.input
              type="email"
              id="email"
              placeholder="mail@example.com"
              className="p-2 rounded-lg placeholder:text-gray-500 text-black bg-white outline-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "backOut" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9, ease: "backOut" }}
            >
              Message
            </motion.p>

            <motion.textarea
              placeholder="Maximum 250 characters"
              id="message"
              className="p-2 h-48 rounded-lg placeholder:text-gray-500 text-black bg-white outline-none no-resize"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0, ease: "backOut" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={250}
            />
            <motion.button
              className="border-transparent border-2 font-bold hover-shine mt-8 bg-orange-500 text-white py-2 px-4 rounded-lg  transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1, ease: "backOut" }}
            >
              Submit
            </motion.button>
          </motion.form>
        </div>
        <hr className="border-t border-black border-3 w-full my-10" />
        <Footer />
      </div>
      </div>
    </>
  );
}
