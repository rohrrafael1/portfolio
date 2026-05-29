import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
          The case study you’re looking for may have moved or been removed.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

