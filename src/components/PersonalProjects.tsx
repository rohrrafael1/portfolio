import Image from "next/image";
export function PersonalProjects({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`personal-project-grid ${compact ? "compact" : ""}`}>
      <article className="play-project">
        <div className="play-image formula-image">
          <Image
            src="/games/formula-i/cover.png"
            alt="Formula I browser racing game"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="eyebrow">
            MY FIRST CODING PROJECT / HTML · CSS · JAVASCRIPT
          </p>
          <h3>Formula I</h3>
          <p>
            A Formula 1-inspired browser game, and the project that got me
            started building things with code.
          </p>
          <div className="actions">
            <a
              className="text-link"
              href="/games/formula-i/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Play game ↗
            </a>
            <a
              className="quiet-link"
              href="https://github.com/rohrrafael1/Formula-i"
              target="_blank"
              rel="noreferrer"
            >
              Source code ↗
            </a>
          </div>
        </div>
      </article>
      <article className="play-project">
        <div className="play-image mars-image">
          <span aria-hidden="true" className="mars-orbit" />
          <span className="mars-label">
            MAEDIM
            <br />
            <small>A little closer to Mars.</small>
          </span>
        </div>
        <div>
          <p className="eyebrow">EXPLORING MARS / HTML · CSS · JAVASCRIPT</p>
          <h3>Maedim</h3>
          <p>
            An interactive, Portuguese-language platform about Mars, with facts,
            images, videos, a game, and simulations.
          </p>
          <div className="actions">
            <a
              className="text-link"
              href="/experiments/maedim/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Visit site ↗
            </a>
            <a
              className="quiet-link"
              href="https://github.com/rohrrafael1/Maedim"
              target="_blank"
              rel="noreferrer"
            >
              Source code ↗
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
