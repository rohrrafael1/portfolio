import { type ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-0 sm:py-0">
      <div className="mx-auto w-full max-w-5xl px-4">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
            {title}
          </h2>
        ) : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

