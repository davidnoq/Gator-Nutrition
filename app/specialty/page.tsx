import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import Link from "next/link";

const Specialty = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="text-center px-4 sm:px-10 md:px-20 pt-32">
        <h1 className="text-3xl md:text-5xl font-bold text-black">Specialty Teas</h1>
        <h2 className="pt-5 text-base md:text-lg text-black">
          Discover a variety of teas crafted to meet your specific needs, each with a unique purpose.
        </h2>
        <button className="border-transparent border-2 font-bold hover-shine mt-8 bg-orange-500 text-white py-2 px-4 rounded-lg transition">
          <Link href="/menu">Go Back</Link>
        </button>
      </div>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-20 px-4 sm:px-10 lg:px-20">
        {[
          { src: "/photos/specialty/liam.PNG", title: "Liam", description: "This tea is a blend of natural herbs and flowers known for their skin-enhancing properties. Ingredients: Chamomile, Rose Petals, Hibiscus." },
          { src: "/photos/specialty/legend.PNG", title: "Legend", description: "This tea is a blend of natural herbs and flowers known for their skin-enhancing properties. Ingredients: Chamomile, Rose Petals, Hibiscus." },
          { src: "/photos/specialty/southerstraw.PNG", title: "Southern Strawberry", description: "This tea is a blend of natural herbs and flowers known for their skin-enhancing properties. Ingredients: Chamomile, Rose Petals, Hibiscus." },
          { src: "/photos/specialty/jimmy.PNG", title: "Pineapple Dolewhip", description: "This tea is a blend of natural herbs and flowers known for their skin-enhancing properties. Ingredients: Chamomile, Rose Petals, Hibiscus." },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-black bg-white rounded-lg shadow-lg border-2 border-opacity-0 transition-shadow hover:shadow-lg hover:shadow-orange-500/50 hover:border-orange-500 hover:border-opacity-20 duration-300">
            <div className="flex justify-center items-center p-6">
              <Image src={item.src} alt={item.title} width={300} height={400} className="rounded-lg" />
            </div>
            <div className="flex flex-col justify-center items-center text-2xl font-black text-center p-6">
              {item.title}
            </div>
            <div className="flex flex-col justify-center items-start text-left p-6">
              {item.description}
            </div>
          </div>
        ))}
      </div>
      
      <hr className="border-t border-black border-3" />
      <Footer />
    </div>
  );
};

export default Specialty;
