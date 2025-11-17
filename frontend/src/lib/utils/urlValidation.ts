/**
 * Validates if a URL is safe for external linking
 * Prevents open redirect and XSS vulnerabilities
 */
export function isValidHttpUrl(url: string | undefined | null): boolean {
  if (!url || typeof url !== 'string') {
    return false;
  }

  try {
    const parsed = new URL(url);
    // Only allow http and https protocols
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Sanitizes a URL by validating it and returning null if invalid
 */
export function sanitizeUrl(url: string | undefined | null): string | null {
  return isValidHttpUrl(url) ? url! : null;
}
