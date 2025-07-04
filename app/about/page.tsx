import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Image from "next/image";

const About = () => (
  <div className="bg-white text-black min-h-screen flex flex-col">
    <Navbar />

    {/* HERO */}
    <header className="bg-orange-50 py-24">
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold">Who&nbsp;We&nbsp;Are</h1>
        <p className="md:text-lg">
          Gator&nbsp;Nutrition is a proudly family-owned business—rooted in
          Gator spirit and dedicated to fueling our community with healthy energy.
        </p>
      </div>
    </header>

    {/* STORY + PHOTO */}
    <main className="flex-1 max-w-screen-lg mx-auto px-6 md:px-12 lg:px-20 py-24">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Narrative */}
        <article className="flex-1 space-y-6">
          <p>
            My name is <strong>Kelsey Adams</strong>, owner of Gator Nutrition. I’m a proud
            University of Florida graduate, lifelong Floridian, and the heart behind our
            stores in Gainesville and Lake City.
          </p>

          <p>
            My husband serves on active duty in the U.S. Army, and our two amazing sons
            inspire everything we do. My parents run <em>Nutrition Escape</em> in Starke—
            another true Gator stronghold!
          </p>

          <p>
            Day-to-day, you’ll also meet <strong>Mackenna Freeman</strong> and{" "}
            <strong>Kimmie Palmer</strong>, our managers and partners who keep every shake and tea perfect.
          </p>

          <p className="font-semibold">
            From our upline to every smiling face behind the bar, we’re one family ready to
            serve yours. We can’t wait to meet you—<span className="text-orange-600">Go Gators!</span>
          </p>
        </article>

        {/* Just the image */}
        <div className="w-full max-w-xs mx-auto">
  <Image
    src="/photos/ab.png"
    alt="Gator Nutrition family team"
    width={400}
    height={400}
    className="object-cover rounded-xl shadow-md"
  />
</div>

      </div>
    </main>

    <Footer />
  </div>
);

export default About;
