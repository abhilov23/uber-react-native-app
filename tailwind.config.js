/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx,jsx}',  
    './app/**/*.{js,ts,tsx,jsx}', 
    './components/**/*.{js,ts,tsx,jsx}'  
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
       fontFamily: {
        'jakarta-bold': ['Jakarta-Bold'],
        'jakarta-extrabold': ['Jakarta-ExtraBold'],
        'jakarta-extralight': ['Jakarta-ExtraLight'],
        'jakarta-light': ['Jakarta-Light'],
        'jakarta-medium': ['Jakarta-Medium'],
        'jakarta': ['Jakarta-Regular'],
        'jakarta-semibold': ['Jakarta-SemiBold'],
      },
    },
  },
  plugins: [],
};