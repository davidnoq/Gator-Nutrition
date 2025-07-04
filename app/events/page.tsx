import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import Link from "next/link";

const Events = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-32">
        {/* Intro Header */}
        <header className="text-center mb-20 max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">Our Events</h1>
          <p className="text-lg md:text-xl text-gray-700">
            We bring vibrant energy and healthy flavor to all types of events. Here&apos;s a look at what we do:

          </p>
        </header>

        {/* Event Types */}
        <section className="mb-28">
          <div className="grid md:grid-cols-2 gap-10 text-lg md:text-xl">
            <ul className="list-disc pl-6 space-y-4">
              <li>Cater weddings</li>
              <li>Private events</li>
              <li>Meet and greets</li>
              <li>Sip and socials</li>
              <li>School functions</li>
            </ul>
            <ul className="list-disc pl-6 space-y-4">
              <li>Birthday parties</li>
              <li>Bachelor & bachelorette parties</li>
              <li>Baby showers</li>
              <li>Corporate gatherings</li>
              <li>Anything you can dream up—we can bring it to life!</li>
            </ul>
          </div>
        </section>

        {/* Event Images */}
        <section className="grid md:grid-cols-2 gap-10 mb-28">
          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src="/photos/one.jpeg"
              alt="Event setup photo 1"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src="/photos/two.jpeg"
              alt="Event setup photo 2"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-6">
          <p className="text-lg md:text-xl">
            Interested in booking us for your next event? Let’s create something amazing together.
          </p>
          <Link href="/contact-us">
            <button className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-orange-600 transition">
              Contact Us
            </button>
          </Link>
        </section>
      </main>

      <hr className="border-t border-black" />
      <Footer />
    </div>
  );
};

export default Events;
