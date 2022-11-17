/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../*.html',
    './App.vue',
    './components/Picture.vue'
  ],
  theme: {
    fontFamily: {
      'lexend' : ['Lexend', 'sans-serif']
    },
    extend: {
      keyframes: {
        floating_front: {
          '0%, 100%' : { transform: 'translateX(0px)' },
          '50%' : {transform: 'translateX(15px)' }
        },
        floating_pic: {
          '0%, 100%' : { transform: 'translateX(0px)' },
          '50%' : {transform: 'translateX(15px)' }
        },
        floating_back: {
          '0%, 100%' : { transform: 'translateX(0px)' },
          '50%' : {transform: 'translateX(50px)' }
        },
        floating_front_r: {
          '0%, 100%' : { transform: 'rotate(90deg) translateX(0px)' },
          '50%' : {transform: 'rotate(90deg) translateX(15px)' }
        },
        floating_pic_r: {
          '0%, 100%' : { transform: 'translateY(0px)' },
          '50%' : {transform: 'translateY(10px)' }
        },
        floating_back_r: {
          '0%, 100%' : { transform: 'rotate(90deg) translateX(0px)' },
          '50%' : {transform: 'rotate(90deg) translateX(50px)' }
        },
      },
      animation: {
        floating_front: 'floating_front 5s 500ms ease-in-out infinite',
        floating_pic: 'floating_pic 5s ease-in-out infinite',
        floating_back: 'floating_back 5s 250ms ease-in-out infinite',
        floating_front_r: 'floating_front_r 5s 500ms ease-in-out infinite',
        floating_pic_r: 'floating_pic_r 5s ease-in-out infinite',
        floating_back_r: 'floating_back_r 5s 250ms ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
