"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { useEffect } from "react";

// Theme switcher using next-themes
import { useTheme } from "next-themes";
function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  // Avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
}

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
] as const;

function IconMenu({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5 5L15 15"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M15 5L5 15"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.5 6H16.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3.5 10H16.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3.5 14H16.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  const reactId = useId();
  const menuId = `nav-mobile-${reactId}`;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-black/70 transition-shadow">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full px-3 py-1 text-base font-semibold tracking-tight hover:bg-zinc-100 dark:hover:bg-zinc-900 focus-visible:ring-2 focus-visible:ring-indigo-300 transition-colors"
          aria-label="Home"
        >
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 transition-colors" />
          <span className="text-zinc-900 dark:text-zinc-100">Rafael Rohr</span>
        </Link>


        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base text-zinc-700 font-medium transition-colors hover:text-indigo-700 dark:text-zinc-300 dark:hover:text-indigo-300 focus-visible:ring-2 focus-visible:ring-indigo-300 px-2 py-1 rounded-lg"
            >
              {item.label}
            </a>
          ))}
          <ThemeSwitch />
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="mailto:rafael.sersonrohr@duke.edu"
            className="btn border-zinc-200 bg-zinc-50 text-zinc-900 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-indigo-950 dark:hover:text-indigo-200"
          >
            Email
          </a>
          <a
            href="/resume.pdf"
            download
            className="btn border-indigo-200 bg-indigo-50 text-indigo-900 font-semibold hover:bg-indigo-100 hover:border-indigo-300 dark:border-indigo-700 dark:bg-indigo-950 dark:text-indigo-100 dark:hover:bg-indigo-900"
          >
            Resume
          </a>
        </div>

        <div className="flex items-center md:hidden">
          <ThemeSwitch />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-900 transition-colors hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-indigo-300 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900 ml-2"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            <IconMenu open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <div id={menuId} className="border-t border-zinc-200/70 bg-white/95 px-6 py-4 dark:border-zinc-800/70 dark:bg-black/95 md:hidden transition-all">
          <div className="mx-auto flex max-w-5xl flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-zinc-900 hover:bg-indigo-50 hover:text-indigo-900 dark:text-zinc-100 dark:hover:bg-indigo-950 dark:hover:text-indigo-200 focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-2 flex flex-col gap-2">
              <a
                href="mailto:rafael.sersonrohr@duke.edu"
                onClick={() => setOpen(false)}
                className="btn border-zinc-200 bg-zinc-50 text-zinc-900 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-indigo-950 dark:hover:text-indigo-200"
              >
                Email
              </a>
              <a
                href="/resume.pdf"
                download
                onClick={() => setOpen(false)}
                className="btn border-indigo-200 bg-indigo-50 text-indigo-900 font-semibold hover:bg-indigo-100 hover:border-indigo-300 dark:border-indigo-700 dark:bg-indigo-950 dark:text-indigo-100 dark:hover:bg-indigo-900"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

