// next/link adds the base path itself; plain <img> tags need it added by hand.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string) {
  return `${basePath}${path}`;
}
