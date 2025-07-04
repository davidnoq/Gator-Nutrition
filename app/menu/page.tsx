"use client";

import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import Link from "next/link";

const Menu = () => {
  const categories = [
    {
      href: "/beauty",
      title: "Beauty Teas",
      img: "/photos/beauty.jpg",
      blurb: "Supports healthy skin, hair & nails."
      
    },
    {
      href: "/specialty",
      title: "Specialty Teas",
      img: "/photos/jimmyspecial.jpg",
      blurb: "Unique flavors & added health benefits."
    
    },
    {
      href: "/meal",
      title: "Meal Replacement Shakes",
      img: "/photos/coff.jpg",
      blurb: "Delicious, balanced meal on‑the‑go."
      
    },
    {
      href: "/loaded",
      title: "Loaded Teas",
      img: "/photos/ohana.jpg",
      blurb: "Clean energy and hydration boost."
      
    },
    {
      href: "/allinone",
      title: "All‑in‑One",
      img: "/photos/allinone.jpg",
      blurb: "Protein, energy, collagen — all together."
      
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <header className="text-center mb-20 max-w-2xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4">Our Menu</h1>
          <p className="text-lg text-gray-700">
            Discover teas & shakes engineered for flavor and function.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {categories.map(({ href, title, img, blurb }) => (
            <Link key={href} href={href} className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-orange-400/40">
                <Image
  src={img}
  alt={title}
  width={400}
  height={300}                 // keeps the intrinsic ratio for <Image>
  className="w-full h-64 md:h-72 object-cover"  /* was h-48 */
 />

                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-center group-hover:text-orange-500 transition-colors">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 text-center">{blurb}</p>
                  
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
