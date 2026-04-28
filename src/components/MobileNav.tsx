import { useState } from 'react';

const navItems = [
  { label: 'Schedule', href: '/' },
  { label: 'Watch Episodes', href: '/show/the-resort-channel' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'News', href: '/show/tennis-today-with-dr-jack-ditty' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="text-white p-2 rounded hover:bg-white/10 transition-colors"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-[hsl(0,0%,15%)] border-t border-white/10 py-3 z-50">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-6 py-2.5 text-white text-sm hover:bg-white/10 transition-colors font-['Verdana',_sans-serif]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
