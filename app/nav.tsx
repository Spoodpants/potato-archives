'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/arguments', label: 'ARGUMENTS' },
    { href: '/steam-family', label: 'STEAM FAMILY' },
  ];

  return (
    <nav className="bg-neutral-800 border-b border-neutral-700 py-3 px-6 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-yellow-300 font-extrabold text-lg">Potato Archives</span>
        <div className="flex gap-2 sm:gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition ${
                  isActive
                    ? 'bg-yellow-400 text-neutral-950'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-700'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}