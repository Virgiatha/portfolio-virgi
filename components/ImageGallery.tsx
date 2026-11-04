"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, images.length]);

  return (
    <>
      <div className={`mt-6 grid gap-3 ${images.length === 1 ? "grid-cols-1 max-w-md" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--surface)] transition-all hover:border-[var(--accent)] hover:shadow-lg"
          >
            <Image
              src={src}
              alt={`Gallery ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-[var(--radius)] border border-white/20 bg-black/40 text-white transition-colors hover:border-white/40 hover:bg-black/60"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 grid size-11 place-items-center rounded-[var(--radius)] border border-white/20 bg-black/40 text-white transition-colors hover:border-white/40 hover:bg-black/60"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 grid size-11 place-items-center rounded-[var(--radius)] border border-white/20 bg-black/40 text-white transition-colors hover:border-white/40 hover:bg-black/60"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              width={1920}
              height={1080}
              className="max-h-[90vh] w-auto rounded-[var(--radius-lg)]"
              unoptimized
            />
            {images.length > 1 && (
              <div className="mt-4 text-center text-sm text-white/70">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
