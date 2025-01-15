import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6", // Main primary color
          light: "#60a5fa", // Lighter shade
          dark: "#2563eb", // Darker shade
        },
        secondary: {
          DEFAULT: "#22c55e", // Main secondary color
          light: "#4ade80", // Lighter shade
          dark: "#16a34a", // Darker shade
        },
        accent: {
          DEFAULT: "#f97316", // Accent color
          light: "#fb923c", // Lighter shade
          dark: "#ea580c", // Darker shade
        },
        background: {
          light: "#f3f4f6", // Light background color
          DEFAULT: "#e5e7eb", // Default background color
          dark: "#d1d5db", // Darker background color
        },
        text: {
          primary: "#1f2937", // Primary text color
          secondary: "#4b5563", // Secondary text color
          light: "#6b7280", // Light text color
        },
        error: {
          DEFAULT: "#ef4444", // Error color
          light: "#f87171",
          dark: "#dc2626",
        },
        success: {
          DEFAULT: "#10b981", // Success color
          light: "#34d399",
          dark: "#059669",
        },
      },
    },
  },
  plugins: [],
};
export default config;
