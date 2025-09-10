import React from "react";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

export default function RatingStars({ value }) {
  const full = Math.floor(value || 0);
  const half = (value || 0) - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className={`d-flex align-items-center gap-1 text-warning fs-5 `}>
      {Array.from({ length: full }).map((_, i) => (
        <IoMdStar key={`full-${i}`} />
      ))}
      {half && <IoMdStarHalf />}
      {Array.from({ length: empty }).map((_, i) => (
        <IoMdStarOutline key={`empty-${i}`} />
      ))}
    </div>
  );
}



