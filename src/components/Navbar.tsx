"use client";

import Link from "next/link";
import { useId, useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
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
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/75 backdrop-blur dark:border-zinc-800/60 dark:bg-black/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold tracking-tight hover:bg-zinc-100 dark:hover:bg-zinc-900"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
          <span>Rafael Rohr</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="mailto:rafael.sersonrohr@duke.edu"
            className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
          >
            Email
          </a>
          <a
            href="/resume.pdf"
            download
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900 md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <IconMenu open={open} />
        </button>
      </div>

      {open ? (
        <div id={menuId} className="border-t border-zinc-200/60 bg-white/95 px-4 py-3 dark:border-zinc-800/60 dark:bg-black/95 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-900"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-1 flex flex-col gap-2">
              <a
                href="mailto:rafael.sersonrohr@duke.edu"
                onClick={() => setOpen(false)}
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-center text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
              >
                Email
              </a>
              <a
                href="/resume.pdf"
                download
                onClick={() => setOpen(false)}
                className="rounded-full bg-zinc-900 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
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

