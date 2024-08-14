import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Link from "next/link";

const Events = () => {
  return (
    <div className="bg-white">
      <Navbar />

      <main className="bg-white min-w-min max-w-screen max-h-max m-auto px-20 py-32">
        <div className="text-center mb-32">
        <h1 className="text-4xl md:text-5xl font-bold text-black">Our Events</h1>
          <h2 className="pt-4 text-black ">
            We cater to a wide range of events. Here are some of the services we offer:
          </h2>
        </div>

        <div className="flex flex-col items-center px-6">
          <ul className="list-disc text-left text-black space-y-4 text-lg md:text-xl">
            <li>Cater weddings</li>
            <li>Private events</li>
            <li>Set up meet and greets</li>
            <li>Sip and socials</li>
            <li>School events</li>
            <li>Birthday parties</li>
            <li>Bachelor & bachelorette parties</li>
            <li>Baby showers</li>
            <li>Basically anything you can think of, we can set up and do</li>
          </ul>
        </div>

        <div className="text-center mt-32">
          <p className="text-black text-lg md:text-xl mb-4">
            Interested in planning an event? Let us help you make it special!
          </p>
          <Link href="/contact-us">
            <button className="border-transparent border-2 font-bold hover-shine bg-orange-500 text-white py-2 px-6 rounded-lg transition">
              Contact Us
            </button>
          </Link>
        </div>
      </main>

      <hr className="border-t border-black border-3" />
      <Footer />
    </div>
  );
};

export default Events;
