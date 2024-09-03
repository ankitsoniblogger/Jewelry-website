"use client";

import { useRef, useEffect } from "react";

const images = [
  "/images/jewelry1.jpg",
  "/images/jewelry2.jpg",
  "/images/jewelry3.jpg",
  "/images/jewelry4.jpg",
  "/images/jewelry5.jpg",
  "/images/jewelry6.jpg",
  "/images/jewelry7.jpg",
  "/images/jewelry8.jpg",
];

export default function ScrollableImages() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        scrollContainer.scrollTo({
          left: scrollContainer.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };
      scrollContainer.addEventListener("wheel", handleWheel);
      return () => scrollContainer.removeEventListener("wheel", handleWheel);
    }
  }, []);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-golden-700">
        Our Collection
      </h2>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-64 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img
              src={src}
              alt={`Jewelry ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
