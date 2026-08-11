const NAV_LINKS = [
  { href: "#achievements", label: "Ledger" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="site">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="dot" />
          HAIDER.KHAN
        </a>
        <nav className="links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
