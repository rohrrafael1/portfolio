import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200/60 bg-white/50 py-8 dark:border-zinc-800/60 dark:bg-black/20">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {year} Rafael Rohr. Built with care for recruiters.
        </p>

        <div className="flex items-center gap-4 text-sm">
          <a
            className="text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            href="mailto:rafael.sersonrohr@duke.edu"
          >
            Email
          </a>
          <Link
            className="text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
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

