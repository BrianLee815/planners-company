/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ts/tsx 추가
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#48a6e9ff",   // 깊은 푸른
        accent: "#28c3d8ff",    // 포인트 민트블루
        dark: {
          DEFAULT: "#1A1A1A",  // 전체 배경용 검정
          800: "#2A2A2A",
          700: "#3A3A3A",
        },
        light: {
          DEFAULT: "#F5F6FA",  // 기본 흰색/밝은 톤
        }
      },
    },
  },
  plugins: [],
};

