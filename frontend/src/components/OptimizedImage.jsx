import { useState } from "react";
import { getOptimizedImageUrl, generateSrcSet } from "../utils/imageKit";

/**
 * Reusable Optimized Image Component
 */
export default function OptimizedImage({
  src,
  alt = "The Arti Luxe - Luxury Bridal & Makeup",
  width,
  height,
  quality = 75,
  priority = false, // If true: loading="eager", fetchpriority="high"
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px",
  responsiveWidths = [400, 600, 800, 1200],
  className = "",
  style = {},
  objectFit = "cover",
  aspectRatio,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate main optimized source URL
  const optimizedSrc = getOptimizedImageUrl(src, {
    width: width || 800,
    height,
    quality,
    format: "auto",
  });

  // Generate dynamic srcSet for responsive loading
  const srcSetString = generateSrcSet(src, responsiveWidths, {
    quality,
    format: "auto",
  });

  return (
    <div
      className={`relative overflow-hidden bg-zinc-900 ${
        !isLoaded ? "animate-pulse" : ""
      }`}
      style={{
        aspectRatio: aspectRatio || (width && height ? `${width}/${height}` : undefined),
        ...style,
      }}
    >
      <img
        src={optimizedSrc}
        srcSet={srcSetString}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full transition-opacity duration-300 ${
          objectFit === "cover"
            ? "object-cover"
            : objectFit === "contain"
            ? "object-contain"
            : ""
        } ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
        {...props}
      />
    </div>
  );
}