import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-black ">
      <hr className="border-b border/20"></hr>
      {/* main row */}
      <div className="max-w-screen-xl mx-auto px-4  flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/photos/file.png"
            alt="Logo"
            width={90}   // slimmer logo
            height={36}
            className="object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex gap-3 font-semibold text-sm">
          {[
            { href: '/events', label: 'Events' },
            { href: '/contact-us', label: 'Contact Us' },
            { href: '/locations', label: 'Locations' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-2 py-1 rounded-lg transition hover:bg-orange-500 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex gap-3">
          <a href="https://www.facebook.com/p/Gator-Nutrition-61555407570486/" aria-label="Facebook">
            <Image src="/photos/facebook.png" alt="Facebook" width={18} height={18} />
          </a>
          <a href="https://www.instagram.com/gator.nutrition/" aria-label="Instagram">
            <Image src="/photos/instagram.png" alt="Instagram" width={18} height={18} />
          </a>
          <a href="https://www.tiktok.com/@gator.nutrition" aria-label="TikTok">
            <Image src="/photos/tik-tok.png" alt="TikTok" width={18} height={18} />
          </a>
        </div>
      </div>

      {/* Trademark bar */}
      <div className="text-center text-xs py-2 bg-white/80 backdrop-blur-sm">
        © 2025 Gator Nutrition™. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
