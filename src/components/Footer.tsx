import Link from "next/link";
import { profile } from "@/data/profile";
export function Footer() {
  return (
    <footer className="site-footer shell">
      <p>
        © {new Date().getFullYear()} Rafael Rohr{" "}
        <span>· Always a work in progress.</span>
      </p>
      <div>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={profile.linkedIn} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <Link href="/awards">Awards</Link>
      </div>
    </footer>
  );
}
