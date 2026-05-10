/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './*.html',
    './shared.js'
  ],
  theme: {
    extend: {
      colors: {
        // 品牌色
        brand: {
          lightest: '#EFF6FF', // 主色最淺色（用於背景）
          primary: '#2563EB',   // Figma Colors/Brand/600
          textPrimary: '#111111',
          danger: '#CC4D2A',
          warning: '#E8AE27',
          success: '#58CC2A',
          bgDanger: '#F5DBD4',
          bgWarning: '#FAEFD4',
          bgSuccess: '#E0F3D8',
        },
        // Figma 基礎色票（color/*）
        gray: {
          0: '#FFFFFF',
          100: '#F3F3F3',
          200: '#E7E7E7',
          300: '#CFCFCF',
          400: '#A0A0A0',
          500: '#707070',
          600: '#414141',
          700: '#111111',
        },
        blue: {
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        red: {
          100: '#F5DBD4',
          200: '#E0947F',
          300: '#CC4D2A',
        },
        yellow: {
          100: '#FAEFD4',
          200: '#F1CE7D',
          300: '#E8AE27',
        },
        green: {
          100: '#E0F3D8',
          200: '#A1DA8B',
          300: '#58CC2A',
        },
      },
    },
  },
  plugins: []
};