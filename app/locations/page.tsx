import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import Footer from "@/components/footer/footer";

const Locations = () => {
  return (
    <div className="bg-white">
      <Navbar />

      <main className="bg-white min-w-min max-w-screen max-h-max m-auto px-6 py-32">
        <div className="text-center mb-32">
        <h1 className="text-5xl font-bold text-black">Our Sister Locations</h1>
        <h2 className="pt-5 md:text-lg text-black">Discover one of our nearby locations for your convenience!</h2>
        </div>

        <div className="flex flex-col justify-center md:flex-row  gap-12 md:gap-20">
          {/* Location 1 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg border-2 border-opacity-0 transition-shadow transition-border duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:border-1 hover:border-orange-500 hover:border-opacity-20 hover:filter">
            {/* Image Container */}
            <div className="relative mb-4">
              {/* Large Photo */}
              <Image
                src="/photos/loc1.PNG"
                alt="Location Photo"
                width={300}
                height={200}
                
                className="object-cover rounded-lg"
              />
              {/* Hidden Photo */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300 opacity-0 hover:opacity-100">
                <Image
                  src="/photos/loc1.2.PNG"
                  alt="Location Hidden Photo"
                  layout="fill"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">Nutrition Escape</h2>
            <p className="text-gray-600 text-left">
              263 N Temple Ave, Starke, FL 32091
            </p>
          </div>

          {/* Location 2 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg border-2 border-opacity-0 transition-shadow transition-border duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:border-1 hover:border-orange-500 hover:border-opacity-20 hover:filter">
            {/* Image Container */}
            <div className="relative mb-4">
              {/* Large Photo */}
              <Image
                src="/photos/loc2.PNG"
                alt="Location Photo"
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
              {/* Hidden Photo */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300 opacity-0 hover:opacity-100">
                <Image
                  src="/photos/2222.PNG"
                  alt="Location Hidden Photo"
                  layout="fill"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">Herbalife Downtown Nutrition</h2>
            <p className="text-gray-600 text-left">
              154 N Marion Ave, Lake City, FL 32055
            </p>
          </div>
        </div>
      </main>

      <hr className="border-t border-black border-3" />
      <Footer />
    </div>
  );
};

export default Locations;
