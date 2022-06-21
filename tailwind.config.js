module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/forms')
  ],
  daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#2b9c1c',
          'primary-focus': '#00eb3b',
          'primary-content': '#ffffff',
          'secondary': '#83ff70',
          'secondary-focus': '#bd0091',
          'secondary-content': '#1e00ff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#1100ff',
          'neutral': '#424243',
          'neutral-focus': '#6d6f74',
          'neutral-content': '#ffffff',
          'base-100': '#000000',
          'base-200': '#403f3f',
          'base-300': '#e3e3e3',
          'base-content': '#bbe5b8',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
}
