import Link from "next/link";
export default function NotFound() {
  return (
    <div className="shell empty-page">
      <p className="eyebrow">404 / A WRONG TURN</p>
      <h1>
        Let’s find
        <br />
        <em>your way back.</em>
      </h1>
      <p>This page isn’t here, but there’s plenty to explore.</p>
      <Link className="button primary" href="/">
        Back to home ↗
      </Link>
    </div>
  );
}
