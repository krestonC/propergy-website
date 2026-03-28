"use client";

interface ChapterMarkerProps {
  number: string;
}

export default function ChapterMarker({ number }: ChapterMarkerProps) {
  return (
    <span
      className="inline-block text-gold text-xs font-medium tracking-[0.3em] uppercase"
      style={{ fontSize: "0.65rem" }}
    >
      {number}
    </span>
  );
}
