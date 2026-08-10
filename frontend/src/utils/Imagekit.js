/**
 * ImageKit Dynamic Optimization Utility for The Arti Luxe
 */

/**
 * Transforms an ImageKit or external URL into an optimized URL with dynamic parameters.
 * * @param {string} url - The original image URL
 * @param {Object} options - Optimization parameters
 * @param {number} [options.width] - Targeted width in pixels
 * @param {number} [options.height] - Targeted height in pixels
 * @param {number} [options.quality=75] - Quality compression (1-100)
 * @param {string} [options.crop="maintain_ratio"] - Crop mode (e.g., 'maintain_ratio', 'force', 'at_max')
 * @param {string} [options.focus="auto"] - Focus mode for auto-crop
 * @param {string} [options.format="auto"] - Format output (auto converts to AVIF/WebP)
 * @returns {string} - Transformed URL
 */
export function getOptimizedImageUrl(url, options = {}) {
  if (!url || typeof url !== "string") return "";

  // If not an ImageKit URL, return as-is
  if (!url.includes("ik.imagekit.io")) {
    return url;
  }

  const {
    width,
    height,
    quality = 75,
    crop = "maintain_ratio",
    focus = "auto",
    format = "auto"
  } = options;

  const transformations = [];

  if (width) transformations.push(`w-${width}`);
  if (height) transformations.push(`h-${height}`);
  if (quality) transformations.push(`q-${quality}`);
  if (crop) transformations.push(`c-${crop}`);
  if (focus && crop !== "maintain_ratio") transformations.push(`fo-${focus}`);
  if (format) transformations.push(`f-${format}`);

  if (transformations.length === 0) return url;

  const trString = `tr:${transformations.join(",")}`;

  // Handle existing transformations or path insertions
  if (url.includes("/tr:")) {
    return url.replace(/\/tr:[^/]+/, `/${trString}`);
  }

  const urlParts = url.split("/");
  // Insert transformation parameters before the filename
  const lastPartIndex = urlParts.length - 1;
  urlParts.splice(lastPartIndex, 0, trString);

  return urlParts.join("/");
}

/**
 * Generates dynamic responsive srcSet string for ImageKit URLs.
 * * @param {string} url - Original image URL
 * @param {Array<number>} widths - Array of target widths (e.g. [400, 600, 800, 1200])
 * @param {Object} options - Shared quality/crop options
 * @returns {string} - srcSet string
 */
export function generateSrcSet(url, widths = [400, 600, 800, 1200], options = {}) {
  if (!url || !url.includes("ik.imagekit.io")) return undefined;

  return widths
    .map((w) => {
      const transformedUrl = getOptimizedImageUrl(url, { ...options, width: w });
      return `${transformedUrl} ${w}w`;
    })
    .join(", ");
}