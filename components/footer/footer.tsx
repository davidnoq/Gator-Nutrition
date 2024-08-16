import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="mb-4">
          <Image src="/photos/file.png" alt="Logo" width={150} height={40} />
        </div>

        {/* Navigation Links */}
        <div className="mb-4 flex space-x-8 font-bold">
          <div className="hover:bg-opacity-50 bg-opacity-0 hover:bg-orange-500 transition rounded-xl">
            <Link href="/events" className="block py-2 px-4">
              Events
            </Link>
          </div>
          <div className="hover:bg-opacity-50 bg-opacity-0 hover:bg-orange-500 transition rounded-xl">
            <Link href="/contact-us" className="block py-2 px-4">
              Contact Us
            </Link>
          </div>
          <div className="hover:bg-opacity-50 bg-opacity-0 hover:bg-orange-500 transition rounded-xl">
            <Link href="/locations" className="block py-2 px-4">
              Locations
            </Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4">
          <a href="https://www.facebook.com/p/Gator-Nutrition-61555407570486/" className="flex items-center">
            <Image src="/photos/facebook.png" alt="Facebook" width={20} height={20} />
          </a>
          <a href="https://www.instagram.com/gator.nutrition/" className="flex items-center">
            <Image src="/photos/instagram.png" alt="Instagram" width={20} height={20} />
          </a>
          <a href="https://www.tiktok.com/@gator.nutrition" className="flex items-center">
            <Image src="/photos/tik-tok.png" alt="TikTok" width={20} height={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
