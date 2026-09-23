const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work Experience" },
  { href: "#projects", label: "Projects" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 text-sm">
        <nav className="flex gap-6 text-muted">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-signal"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
