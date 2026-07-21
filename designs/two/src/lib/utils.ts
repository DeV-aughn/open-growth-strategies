import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely — the helper 21st.dev components import from "@/lib/utils". */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
