import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="origin-mark" aria-hidden="true" /> Brazilian roots. A
          Duke perspective.
        </p>
        <h1 id="hero-title">
          Rafael <em>Rohr.</em>
        </h1>
        <p className="hero-statement">{profile.headline}</p>
        <p className="hero-description">
          I’m an engineer, a mathematics student, and a teacher. My work
          connects software, hardware, finance, and the people who use them.
        </p>
        <div className="actions">
          <Link className="button primary" href="#work">
            Explore my work ↘
          </Link>
          <a
            className="button"
            href={profile.resumePath}
            target="_blank"
            rel="noreferrer"
          >
            View resume ↗
          </a>
        </div>
        <div className="hero-education">
          <span>{profile.university}</span>
          <span>{profile.education} · Finance minor</span>
        </div>
      </div>
      <div className="hero-portrait">
        <div className="portrait-frame">
          <Image
            src="/profile.jpg"
            alt="Rafael Rohr at Duke University"
            width={400}
            height={460}
            priority
            sizes="(max-width: 760px) 90px, 340px"
          />
        </div>
        <div className="portrait-note">
          <span className="eyebrow">A few things I believe in</span>
          <p>
            Stay curious.
            <br />
            Build with purpose.
            <br />
            <em>Bring people along.</em>
          </p>
        </div>
        <span className="portrait-coordinate">Durham, NC / São Paulo, BR</span>
      </div>
      <div className="hero-footnote">
        <span>SOFTWARE & AI</span>
        <span>HARDWARE & SYSTEMS</span>
        <span>MATHEMATICS & FINANCE</span>
        <span>PRODUCT & PEOPLE</span>
      </div>
    </section>
  );
}
