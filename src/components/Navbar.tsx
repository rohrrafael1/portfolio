"use client";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { profile } from "@/data/profile";
const items = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/awards", label: "Awards" },
  { href: "/#contact", label: "Contact" },
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="shell nav-bar">
        <Link
          href="/"
          className="wordmark"
          aria-label="Rafael Rohr — home"
          onClick={() => setOpen(false)}
        >
          <span className="monogram" aria-hidden="true">
            rr.
          </span>
          <span>Rafael Rohr</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          className="nav-resume"
          href={profile.resumePath}
          target="_blank"
          rel="noreferrer"
        >
          Resume ↗
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>
      {open && (
        <nav
          id={menuId}
          className="mobile-nav shell"
          aria-label="Mobile navigation"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Resume ↗
          </a>
        </nav>
      )}
    </header>
  );
}
