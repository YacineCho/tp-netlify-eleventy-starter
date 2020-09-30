module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      colors:{
        'regal-red' : '#fc3003',
      },
      screens:{
        'portrait': {'raw': '(orientation: portrait)'},
      }
    },
    fontFamily:{
      'display': ['Oswald'],
    }
  },
  variants: {},
  plugins: [],
}
