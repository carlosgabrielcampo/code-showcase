import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sendEmail = ({email, subject }) => {
    const encodedSubject = encodeURIComponent(subject);
    window.location.href = `mailto:${email}?subject=${encodedSubject}`;
}

export const copyToClipboard = (value) => navigator.clipboard.writeText(value)