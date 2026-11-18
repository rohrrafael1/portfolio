"use client";
import Image from "next/image";
import { useState } from "react";
const counts: Record<string, number> = {
  "ece350-final-project": 11,
  "siemens-presentation": 31,
  poster: 1,
  stone: 1,
  cfci: 1,
  itau: 1,
};
export function CaseStudyGallery({
  imageDirectory,
  title,
}: {
  imageDirectory: string;
  title: string;
}) {
  const [selected, setSelected] = useState(0);
  const count = counts[imageDirectory] ?? 0;
  if (!count) return null;
  return (
    <div className="gallery">
      <div className="gallery-main">
        <Image
          src={`/case-studies/${imageDirectory}/page-${selected + 1}.png`}
          alt={`${title} — supporting material, page ${selected + 1}`}
          fill
          sizes="(max-width: 760px) 95vw, 1200px"
        />
      </div>
      <div className="gallery-caption">
        <p className="gallery-counter" aria-live="polite">
          {title} · Page {selected + 1} of {count}
        </p>
        {count > 1 && (
          <div className="gallery-controls">
            <button
              type="button"
              disabled={selected === 0}
              onClick={() => setSelected(selected - 1)}
              aria-label="Previous page"
            >
              ← Previous
            </button>
            <button
              type="button"
              disabled={selected === count - 1}
              onClick={() => setSelected(selected + 1)}
              aria-label="Next page"
            >
              Next →
            </button>
          </div>
        )}
      </div>
      {count > 1 && (
        <details>
          <summary className="text-link">Choose a page</summary>
          <div
            className="gallery-thumbnails"
            aria-label="Supporting material pages"
          >
            {Array.from({ length: count }, (_, i) => (
              <button
                type="button"
                key={i}
                aria-label={`Show page ${i + 1}`}
                aria-pressed={selected === i}
                onClick={() => setSelected(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}
