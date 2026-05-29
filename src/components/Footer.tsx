import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200/70 bg-white/30 py-8 dark:border-zinc-800/70 dark:bg-black/30">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-300 dark:text-zinc-300">
          © {year} Rafael Rohr. Built for clarity, reliability, and measurable outcomes.
        </p>

        <div className="flex items-center gap-4 text-base">
          <a
            className="transition-colors text-zinc-700 hover:text-indigo-700 dark:text-zinc-300 dark:hover:text-indigo-300 focus-visible:ring-2 focus-visible:ring-indigo-300 px-2 py-1 rounded-lg"
            href="mailto:rafael.sersonrohr@duke.edu"
          >
            Email
          </a>
          <Link
            className="transition-colors text-zinc-700 hover:text-indigo-700 dark:text-zinc-300 dark:hover:text-indigo-300 focus-visible:ring-2 focus-visible:ring-indigo-300 px-2 py-1 rounded-lg"
            href="/resume.pdf"
            download
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}

