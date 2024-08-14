'use client';
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Toaster } from 'react-hot-toast'; // Import the Toaster component
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import useIntersectionObserver from "@/components/useIntersectionObserver/useIntersectionObserver";

export default function Home() {
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.1 });
  const [ref4, isVisible4] = useIntersectionObserver({ threshold: 0.1 });
  const [ref5, isVisible5] = useIntersectionObserver({ threshold: 0.1 });
  const [ref6, isVisible6] = useIntersectionObserver({ threshold: 0.1 });

  const [showPopup, setShowPopup] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (
      firstName.length === 0 ||
      email.length === 0
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
            email,
          }),
        });

        const data = await response.json();
        if (response.ok && data.message === "Success") {
          toast.remove();
          toast.success("Message submitted successfully!");
          // Clear form fields
          setFirstName("");
          setEmail("");
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
    <div className="bg-white relative ">
      

      <Navbar />
      <Toaster position="top-right" /> {/* Include the Toaster component */} 

      {/* First section for title and photo */}
      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-10 lg:px-40 min-w-min max-w-screen mx-auto text-center">
        {/* Left Section for text */}
        <motion.section
          ref={ref1}
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="m-auto py-10 md:py-20 md:pr-20 lg:pr-40 z-0 min-w-0"
        >
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-xl font-bold text-left"
          >
            DRINK SMARTER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-left"
          >
            We have all your<br />
            specialized needs<br />
            <span className="text-orange-500">in one drink.</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="mt-4 text-left md:pr-10 lg:pr-60"
          >
            Discover the world of Custom Brewed Teas, where every sip is tailored just for you!
            Whether you need high-protein teas to boost your day, teas with low calories for balanced nourishment, or caffeine
            for an energizing pick-me-up, we've got you covered. Enjoy a drink that perfectly fits your lifestyle and taste preferences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            className="flex justify-center md:justify-start"
          >
            <button className="border-transparent border-2 font-bold hover-shine mt-8 bg-orange-500 text-white py-2 px-4 rounded-lg transition">
              <Link href="/menu">View the menu</Link>
            </button>
          </motion.div>
        </motion.section>

        {/* Right section for picture */}
        <motion.section
          ref={ref2}
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="m-auto py-10 md:py-20 px-4 z-0 md:px-10 lg:px-20"
        >
          <Image
            src="/photos/meal/strawberry.PNG"
            alt="Strawberry"
            width={600}
            height={500}
            className="w-full mx-auto rounded-lg"
          />
        </motion.section>
      </div>

      {/* Border */}
      <hr className="border-t border-black border-3" />

      {/* Mid section with items */}
      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-10 lg:px-40 pt-20 text-center mx-auto">
        {/* Left Section for photo */}
        <motion.section
          ref={ref3}
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="m-auto py-10 md:py-20 z-0 px-4 md:px-10"
        >
          <Image
            src="/photos/image2.jpeg"
            alt="Placeholder"
            width={300}
            height={250}
            className="w-full mx-auto rounded-lg"
          />
        </motion.section>

        {/* Right section for text */}
        <motion.section
          ref={ref4}
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="m-auto py-10 md:py-20 z-0 px-4 md:px-10"
        >
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-2xl md:text-3xl font-bold text-center"
          >
            Want us to cater your event?<br />
            Find out more here!<br />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="mt-4 text-md md:text-lg"
          >
            We offer a diverse range of teas and shakes that can be customized to meet your event's needs. Reach out to us to explore options and create a unique experience for your guests.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible5 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <button   className="border-transparent border-2 hover-shine mt-8 bg-orange-500 text-white py-2 px-4 rounded-lg font-bold transition">
            <Link href="/events">
    Events
  </Link>
            </button>
          </motion.div>
        </motion.section>
      </div>

      {/* Border */}
      

      {/* Newsletter section */}
      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-10 lg:px-40 pt-20 text-center mx-auto">
        {/* Left section for text */}
        <motion.section
          ref={ref5}
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible5 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="m-auto py-20 z-0"
        >
          
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible5 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-2xl md:text-3xl font-bold z-0 text-center w-full"
          >
            Subscribe for updates on new teas!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible5 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="mt-4 text-center px-40"
          >
            Sign up for updates and enjoy exclusive access to new teas that perfectly complement the changing seasons.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible5 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <button  onClick={() => setShowPopup(true)} className="border-transparent border-2 hover-shine mt-8 bg-orange-500 text-white py-2 px-4 rounded-lg font-bold transition">
              Subscribe
            </button>
          </motion.div>
        </motion.section>

        {/* Right section for photo */}
        <motion.section
          ref={ref6}
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible6 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="m-auto py-20 px-20 z-0"
        >
          <Image
            src="/photos/image3.jpeg"
            alt="Placeholder"
            width={370}
            height={967}
            className="min-w-min mx-auto rounded-lg"
          />
        </motion.section>
      </div>
      <hr className="border-t border-black border-3" />
      {/* Footer */}
      <Footer />

      {/* Subscription Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          
          <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "backOut" }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 border bg-gray-200 p-10 rounded-lg max-w-lg m-auto"
            >
              <button
        className="text-center items-center  m-auto w-10  bg-orange-500  text-white  rounded-full "
        onClick={() => setShowPopup(false)}
        aria-label="Close"
      >
        x
      </button>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
                className="text-gray-600 mb-10 text-center"
              >
                Subscribe to our updates by providing your first name and email.
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
                Email
              </motion.p>
              <motion.input
                type="email"
                id="email"
                placeholder="mail@example.com"
                className="p-2 rounded-lg placeholder:text-gray-500 text-black bg-white outline-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "backOut" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <motion.button
                className="border-transparent border-2 font-bold hover-shine mt-8 bg-orange-500 text-white py-2 px-4 rounded-lg transition"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "backOut" }}
                type="submit"
              >
                Submit
              </motion.button>
            </motion.form>
        </div>
      )}
    </div>
  );
}
