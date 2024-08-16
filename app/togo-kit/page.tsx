import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import Link from "next/link";

const TeaOnTheGo = () => {
  return (
    <div className="bg-white min-w-min max-w-screen max-h-max m-auto">
      <Navbar />
      <div className="text-center  max-w-2xl m-auto px-20 pt-32">
        <h1 className="text-3xl md:text-5xl font-bold text-black">Herbalife On the Go</h1>
        <p className="pt-10 md:text-lg text-black ">
          Enjoy the convenience of our tea kits, each priced at $9 with a flat rate shipping of $5. Order 3 or more kits at a time to stock up on your favorite flavors!
        </p>
        <p className="pt-10 md:text-lg text-black ">
          Our tea kits are individually packed for freshness and include Herbalife products such as Liftoff, Herbal Tea, Biotin, Collagen, and Stevia-sweetened flavors. Mega tea kits are shipped once weekly with an option to upgrade to a monthly supply. New flavors and menus are introduced each month, so there’s always something exciting to try!
        </p>
        
      </div>

      {/* Benefits Section */}
      <section className="py-16 ">
        <div className="text-center px-20 mb-40">
          <h2 className="text-3xl font-bold text-black">Why Choose Our Tea Kits?</h2>
          <p className="pt-4 md:text-lg text-black ">
            Our tea kits offer more than just a drink—they provide a range of benefits tailored to your needs:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 lg:px-20 mt-8">
  <div className="flex flex-col items-center text-center bg-white p-6 ">
    <Image src="/photos/energy.png" alt="Benefit 1" width={150} height={150} />
    <h3 className="text-xl font-semibold text-black mt-4">Boost Your Energy</h3>
    <p className="text-black text-base md:text-lg mt-2">
      Infused with Liftoff and Herbal Tea for a natural energy boost to keep you active throughout the day.
    </p>
  </div>
  <div className="flex flex-col items-center text-center bg-white p-6 ">
    <Image src="/photos/businessman.png" alt="Benefit 2" width={150} height={150} />
    <h3 className="text-xl font-semibold text-black mt-4">Anytime Convenience</h3>
    <p className="text-black text-base md:text-lg mt-2">
      Enjoy your favorite tea whenever you want, even when the shop is closed. Perfect for busy schedules and late nights.
    </p>
  </div>
  <div className="flex flex-col items-center text-center bg-white p-6 ">
    <Image src="/photos/quality-of-life.png" alt="Benefit 3" width={150} height={150} />
    <h3 className="text-xl font-semibold text-black mt-4">Support Your Wellness</h3>
    <p className="text-black text-base md:text-lg mt-2">
      Packed with Biotin and Collagen to support healthy skin, hair, and overall wellness.
    </p>
  </div>
 
  
  
</div>
      </section>

      

      <hr className="border-t border-black border-3" />
      <Footer />
    </div>
  );
};

export default TeaOnTheGo;
