import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="bg-white">
      <Navbar />

      <main className="bg-white min-w-min max-w-screen max-h-max m-auto px-20 py-32">
        <div className="text-center mb-32">
          <h1 className="text-5xl font-bold text-black">Our Menu</h1>
          <h2 className="pt-5 md:text-lg text-black">
            Discover a variety of teas crafted to meet your specific needs, each with a unique purpose.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 px-6">
          {/* Beauty Teas */}
          <Link href="/beauty">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow border-2 border-opacity-0 transition-border duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:border-1 hover:border-orange-500 hover:border-opacity-20 hover:filter">
              <Image src="/photos/beauty/beauty.PNG" alt="Beauty Teas" width={300} height={300} className="w-full h-auto rounded-lg" />
              <h2 className="text-2xl font-semibold text-center mb-4">Beauty Teas</h2>
              <p className="text-gray-600 text-left">
                Rich in antioxidants and nutrients to support healthy skin, hair, and nails.<br />
                <br />
                Calories: 0-45<br />
                Net Carbs: 4g<br />
                Caffeine: 117mg<br />
                Contains: Biotin and Collagen
              </p>
            </div>
          </Link>

          {/* Specialty Teas */}
          <Link href="/specialty">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow border-2 border-opacity-0 transition-border duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:border-1 hover:border-orange-500 hover:border-opacity-20 hover:filter">
              <Image src="/photos/specialty/liam.PNG" alt="Specialty Teas" width={300} height={300} className="w-full h-auto rounded-lg" />
              <h2 className="text-2xl font-semibold text-center mb-4">Specialty Teas</h2>
              <p className="text-gray-600 text-left">
                Each crafted to deliver unique flavors and health benefits.<br /> Perfect for any tea enthusiast.<br />
                <br />
                Calories: 100<br />
                Protein: 17g<br />
                Net Carbs: 9-10g<br />
                Caffeine: 117mg<br />
                Contains: Biotin and Collagen
              </p>
            </div>
          </Link>

          {/* Meal Replacement Shakes */}
          <Link href="/meal">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow border-2 border-opacity-0 transition-border duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:border-1 hover:border-orange-500 hover:border-opacity-20 hover:filter">
              <Image src="/photos/meal/blueberry.PNG" alt="Meal Replacement Shakes" width={300} height={300} className="w-full h-auto rounded-lg" />
              <h2 className="text-2xl font-semibold text-center mb-4">Meal Replacement Shakes</h2>
              <p className="text-gray-600 text-left">
                Find our delicious and nutritious meal replacement shakes.<br />
                <br />
                Calories: 200-250<br />
                Soy Protein (whey substitute available): 25-60g<br />
                Net Carbs: 9-10g
              </p>
            </div>
          </Link>

          {/* Loaded Teas */}
          <Link href="/loaded">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-opacity-0 transition-shadow transition-border duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:border-1 hover:border-orange-500 hover:border-opacity-20 hover:filter">
              <Image src="/photos/loaded/november.PNG" alt="Loaded Teas" width={300} height={200} className="w-full h-auto rounded-lg" />
              <h2 className="text-2xl font-semibold text-center mb-4">Loaded Teas</h2>
              <p className="text-gray-600 text-left">
                Packed with energy and essential nutrients that keep you fueled throughout the day.<br />
                <br />
                Calories: 0-24<br />
                Net Carbs: 2g<br />
                Caffeine: 200mg
              </p>
            </div>
          </Link>

          {/* All-in-One */}
          <Link href="/allinone">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow border-2 border-opacity-0 transition-border duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:border-1 hover:border-orange-500 hover:border-opacity-20 hover:filter">
              <Image src="/photos/allinone/carnival.PNG" alt="All-in-One" width={300} height={300} className="w-full h-auto rounded-lg" />
              <h2 className="text-2xl font-semibold text-center mb-4">All-in-One</h2>
              <p className="text-gray-600 text-left">
                Rich in antioxidants and nutrients to support healthy skin, hair, and nails.<br />
                <br />
                Calories: 100<br />
                Protein: 17g<br />
                Net Carbs: 9-10g<br />
                Caffeine: 200mg<br />
                Contains: Biotin and Collagen
              </p>
            </div>
          </Link>
        </div>
      </main>

      <hr className="border-t border-black border-3" />
      <Footer />
    </div>
  );
};

export default Menu;
