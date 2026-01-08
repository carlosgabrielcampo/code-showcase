import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sendEmail = () => {
    const email = "carlosgabrielcampo@gmail.com";
    const subject = encodeURIComponent("Let's talk — Full Stack role");
    window.location.href = `mailto:${email}?subject=${subject}`;
}