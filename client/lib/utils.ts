// For React Native, we need to use a concrete URL since there's no window.location
// In development, this points to your local machine
// For physical devices, use your computer's local IP address instead of localhost

const STRAPI_URL =
  process.env.EXPO_PUBLIC_STRAPI_URL || "http://localhost:1337";

export function getStrapiURL(): string {
  return STRAPI_URL;
}

export function getStrapiMedia(url: string): string {
  if (!url) return "";
  if (url.startsWith("data:") || url.startsWith("http") || url.startsWith("//"))
    return url;
  return `${getStrapiURL()}${url}`;
}
