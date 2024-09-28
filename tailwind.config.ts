/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,tsx,jsx}', 
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
          120: '#032f17',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
          120: '#545454',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          25: '#FFFAAD',
          50: '#FEC601',
          75: '#DFC90F',
          120: '#98890c',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/Before After Slider - Bookshelf.png')",
        'bg-img-2': "url('/Before After Slider - Garage.png')",
        'bg-img-6': "url('/Meridiq Before After -- gym.png')",
        'bg-img-4': "url('/Meridiq Before After --Pool.png')",
        'bg-img-5': "url('/Before After Slider --Kithcen.png')",
        'feature-bg': "url('/undraw-svg-process.svg')",
        'pattern-2': "url('/Change PNG Opacity (1).png')",
        'pattern-3': "url('/)",
        'bg-img-3': "url('/testomonial.svg')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      
    },
  },
  plugins: [],
  
};