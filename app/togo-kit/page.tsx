import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Image from "next/image";

const TeaOnTheGo = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="flex-1 max-w-screen-lg mx-auto px-6 md:px-12 lg:px-20 py-32 text-center space-y-10">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Herbalife&nbsp;On&nbsp;the&nbsp;Go
        </h1>

        <p className="md:text-lg">
          Enjoy the convenience of our tea kits — just&nbsp;$9 each with flat-rate
          $5 shipping. Order&nbsp;3 or more kits at once to stock up on your favorite flavors!
        </p>

        <p className="md:text-lg">
          Every kit is packed for freshness and includes Herbalife products like&nbsp;Liftoff,
          Herbal&nbsp;Tea, Biotin, Collagen, and Stevia-sweetened flavors. Mega kits ship weekly
          (upgrade to a monthly supply available). New flavors drop every month — always
          something exciting to try!
        </p>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-screen-lg mx-auto px-6 md:px-12 lg:px-20">
          <header className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose Our Tea Kits?
            </h2>
            <p className="md:text-lg">
              More than just a drink — each kit delivers real benefits tailored to you:
            </p>
          </header>

          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Energy */}
            <li className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-8">
              <Image
                src="/photos/energy.png"
                alt="Boost Your Energy icon"
                width={120}
                height={120}
              />
              <h3 className="text-xl font-semibold mt-6">Boost Your Energy</h3>
              <p className="mt-3">
                Liftoff + Herbal Tea combine for a natural pick-me-up that keeps
                you going all day.
              </p>
            </li>

            {/* Convenience */}
            <li className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-8">
              <Image
                src="/photos/businessman.png"
                alt="Anytime Convenience icon"
                width={120}
                height={120}
              />
              <h3 className="text-xl font-semibold mt-6">Anytime Convenience</h3>
              <p className="mt-3">
                Enjoy your favorite tea even when the shop is closed — perfect
                for busy days and late nights.
              </p>
            </li>

            {/* Wellness */}
            <li className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-8">
              <Image
                src="/photos/quality-of-life.png"
                alt="Support Your Wellness icon"
                width={120}
                height={120}
              />
              <h3 className="text-xl font-semibold mt-6">Support Your Wellness</h3>
              <p className="mt-3">
                Biotin & Collagen help nourish healthy skin, hair, and overall
                well-being.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeaOnTheGo;
