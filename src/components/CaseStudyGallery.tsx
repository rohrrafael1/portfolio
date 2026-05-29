"use client";

import Image from "next/image";
import { useState } from "react";

export function CaseStudyGallery({
  imageDirectory,
}: {
  imageDirectory: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Map image directories to their page counts
  const imageCounts: Record<string, number> = {
    "ece350-final-project": 11,
    "siemens-presentation": 31,
    "poster": 1,
    "stone": 1,
    "cfci": 1,
  };

  const pageCount = imageCounts[imageDirectory] || 0;
  const images = Array.from({ length: pageCount }, (_, i) => ({
    src: `/case-studies/${imageDirectory}/page-${i + 1}.png`,
    alt: `${imageDirectory} - page ${i + 1}`,
  }));

  if (!images.length) return null;

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/30">
        <div className="relative h-96 sm:h-[500px] w-full">
          <Image
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
          />
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative h-16 w-20 sm:h-20 sm:w-28 shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                selectedIndex === index
                  ? "border-zinc-900 dark:border-zinc-100"
                  : "border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600"
              }`}
            >
              <Image
                src={img.src}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, 112px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
