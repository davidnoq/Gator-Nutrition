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
          <Link href="/events">Events</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/locations">Locations</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <Image src="/photos/facebook.png" alt="Facebook" width={20} height={20} />
          <Image src="/photos/instagram.png" alt="Instagram" width={20} height={20} />
          <Image src="/photos/tik-tok.png" alt="TikTok" width={20} height={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
