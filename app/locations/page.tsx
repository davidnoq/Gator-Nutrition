import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import Footer from "@/components/footer/footer";

const locations = [
  {
    name: "Nutrition Escape",
    address: "263 N Temple Ave, Starke, FL 32091",
    imgMain: "/photos/loc1.PNG",
    imgHover: "/photos/loc1.2.PNG",
  },
  {
    name: "Herbalife Downtown Nutrition",
    address: "154 N Marion Ave, Lake City, FL 32055",
    imgMain: "/photos/loc2.PNG",
    imgHover: "/photos/2222.PNG",
  },
];

const Locations = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-screen-xl mx-auto px-6 py-32">
        {/* Heading */}
        <header className="text-center mb-32">
          <h1 className="text-5xl font-bold">Our Sister Locations</h1>
          <h2 className="pt-5 md:text-lg">
            Discover one of our nearby locations for your convenience!
          </h2>
        </header>

        {/* Cards */}
        <section className="flex flex-col md:flex-row gap-12 md:gap-20 justify-center">
          {locations.map(({ name, address, imgMain, imgHover }) => (
            <div
              key={name}
              className="group bg-white p-6 rounded-lg shadow-md border-2 border-transparent
                         transition duration-300 hover:shadow-orange-500/40 hover:border-orange-500/20"
            >
              {/* Image swap on hover */}
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                {/* default image */}
                <Image
                  src={imgMain}
                  alt={name}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* hover image */}
                <Image
                  src={imgHover}
                  alt={`${name} — interior`}
                  fill
                  className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              <h2 className="text-2xl font-semibold text-center mb-4">{name}</h2>
              <p className="text-gray-600 text-left">{address}</p>
            </div>
          ))}
        </section>
      </main>

      <hr className="border-t border-black" />
      <Footer />
    </div>
  );
};

export default Locations;
