'use client';
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Toaster } from 'react-hot-toast';
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import {motion} from "framer-motion"
import { FormEvent, useState } from "react";
import Link from "next/link";

export default function Home() {
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
            action: "subscribe", // Ensure 'action' field is included
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
    <div className="bg-white relative">
      <Navbar />
      <Toaster position="top-right" />

      {/* First section for title and photo */}
      <div className="flex flex-col md:flex-row gap-60 px-4 md:px-6 lg:px-10 max-w-screen-lg mt-20 mx-auto text-center">
        {/* Left Section for text */}
        <section className="py-6 md:py-10 flex-1 text-center md:text-left">
          <h1 className="text-xl font-bold text-gray-500 mb-2">DRINK SMARTER</h1>
          <p className="text-2xl md:text-3xl font-semibold mb-2">
            We have all your<br />
            specialized needs<br />
            <span className="text-orange-500">in one drink.</span>
          </p>
          <p className="text-md md:text-lg mb-4">
            Discover the world of Custom Brewed Teas, where every sip is tailored just for you! Whether you need high-protein teas to boost your day, teas with low calories for balanced nourishment, or caffeine for an energizing pick-me-up, we've got you covered.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg border-2  font-bold border-transparent hover-shine">
              <Link href="/menu">View Menu</Link>
            </button>
            <button className="bg-orange-500 border-2   border-transparent hover-shine text-white py-2 px-4 rounded-lg font-bold">
              <Link href="/togo-kit">To-go Kits</Link>
            </button>
          </div>
        </section>

        {/* Right section for picture */}
        <section className="flex-1">
          <Image
            src="/photos/meal/strawberry.PNG"
            alt="Strawberry"
            layout="responsive"
            width={500}
            height={400}
            className="w-auto rounded-lg mx-auto"
          />
        </section>
      </div>

      <hr className="border-t border-black border-1 my-8" />

      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-6 lg:px-10 max-w-screen-lg mx-auto">
        {/* First Card */}
        <div className="bg-gray-200 hover:bg-orange-500 hover:bg-opacity-20 transition-bg py-6 px-4 md:px-6 lg:px-10 max-w-md mx-auto rounded-lg flex-1 flex flex-col">
          {/* Photo */}
          <div className="flex justify-center mb-4">
            <Image
              src="/photos/image1.jpeg"
              alt="Placeholder"
              layout="responsive"
              width={200}
              height={150}
              className="rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="text-left flex-1">
            <p className="text-xl md:text-2xl font-bold mb-2">
              Want us to cater your event?<br />
              Find out more here!<br />
            </p>
            <p className="text-md md:text-lg mb-4">
              We offer a diverse range of teas and shakes that can be customized to meet your event's needs. Reach out to us to explore options and create a unique experience for your guests.
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-start mb-4">
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg font-bold">
              <Link href="/events">Events</Link>
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-gray-200 hover:bg-blue-700 hover:bg-opacity-20 transition-bg py-6 px-4 md:px-6 lg:px-10 max-w-md mx-auto rounded-lg flex-1 flex flex-col">
          {/* Photo */}
          <div className="flex justify-center mb-4">
            <Image
              src="/photos/image3.jpeg"
              alt="Placeholder"
              layout="responsive"
              width={300}
              height={250}
              className="rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="text-left flex-1">
            <p className="text-xl md:text-2xl font-bold mb-2">
              Subscribe for updates on new teas!
            </p>
            <p className="text-md md:text-lg mb-4">
              Sign up for updates and enjoy exclusive access to new teas that perfectly complement the changing seasons.
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-start mb-4">
            <button onClick={() => setShowPopup(true)} className="bg-orange-500 text-white py-2 px-4 rounded-lg font-bold">
              Subscribe
            </button>
          </div>
        </div>
        
        
      </div>
      

      <hr className="border-t border-black border-1 my-8" />

      {/* Operating Hours Section */}
      <div className="bg-gray-200 py-6 px-4 md:px-6 lg:px-10 max-w-screen-lg mx-auto rounded-lg transition-bg hover:bg-orange-500 hover:bg-opacity-20">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/photos/gat.PNG" // replace with the actual path to your image
            alt="Gator Nutrition"
            layout="responsive"
            width={80}
            height={80}
            className="w-fit rounded-lg"
          />
          <h2 className="text-xl font-bold underline mt-10">Gator Nutrition Hours</h2>
          <ul className="text-md space-y-1 mb-4 text-left">
            <li>Monday: 7 AM – 3 PM</li>
            <li>Tuesday: 7 AM – 3 PM</li>
            <li>Wednesday: 7 AM – 3 PM</li>
            <li>Thursday: 7 AM – 3 PM</li>
            <li>Friday: 7 AM – 3 PM</li>
            <li>Saturday: 10 AM – 2 PM</li>
            <li>Sunday: Closed</li>
          </ul>
          
          <a
            href="https://www.google.com/maps/place/Gator+Nutrition/@29.6535184,-82.3840044,14z/data=!4m6!3m5!1s0x88e8a3f220440665:0xf91a6467369349ac!8m2!3d29.632644!4d-82.3733485!16s%2Fg%2F11ld97mqly?entry=ttu" // replace with your actual address link
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View on Google Maps
          </a>
        </div>
      </div>

      <hr className="border-t border-black border-1 my-8" />
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
