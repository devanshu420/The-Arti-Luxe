import React, { useState } from "react";
import { getOptimizedImageUrl } from "../utils/Imagekit";

export default function OptimizedImage({
  src,
  alt = "",
  width,
  height,
  quality = 80,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
  objectFit, // Destructured here to prevent leaking to <img />
  fallback,  // Destructured here
  priority,  // Destructured here
  responsiveWidths,
  sizes,
  style = {},
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate main image URL
  const optimizedSrc = getOptimizedImageUrl(src, {
    width,
    height,
    quality,
    format: "auto",
  });

  // Generate srcset if responsiveWidths are provided
  const srcSet = responsiveWidths
    ? responsiveWidths
        .map((w) => {
          const url = getOptimizedImageUrl(src, { width: w, quality, format: "auto" });
          return `${url} ${w}w`;
        })
        .join(", ")
    : undefined;

  // Combine styles safely
  const imageStyle = {
    ...style,
    ...(objectFit ? { objectFit } : {}),
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Shimmer skeleton while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-900/60 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />
        </div>
      )}

      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : loading}
        fetchpriority={priority ? "high" : fetchPriority}
        srcSet={srcSet}
        sizes={sizes}
        style={imageStyle}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </div>
  );
}