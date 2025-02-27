// // tailwind.config.js
// module.exports = {
//   content: [
//     "./index.html", // Add paths to your HTML files
//     "./src/**/*.{html,js}", // Add paths to your JS files (if any)
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         'kenburns-top': {
//           '0%': {
//             transform: 'scale(1) translateY(0)',
//             'transform-origin': '50% 16%',
//           },
//           '100%': {
//             transform: 'scale(1.25) translateY(-15px)',
//             'transform-origin': 'top',
//           },
//         },
//       },
//       animation: {
//         'kenburns-top': 'kenburns-top 5s ease-out infinite', // Adjust duration and timing as needed
//       },
//     },
//   },
//   plugins: [],
// };

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'tracking-in-contract-bck-bottom': {
          '0%': {
            letterSpacing: '1em',
            transform: 'translateZ(400px) translateY(300px)',
            opacity: '0',
          },
          '40%': {
            opacity: '0.6',
          },
          '100%': {
            transform: 'translateZ(0) translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'tracking-in-contract-bck-bottom': 'tracking-in-contract-bck-bottom 1.5s ease-out both', // Adjust duration and timing as needed
      },
    },
  },
  plugins: [],
};