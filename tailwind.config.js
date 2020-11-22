module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        pileton: {
          green: '#4BF599',
          blue: '#2D8DF0',
        },
        success: '#18BE6B',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      },

      width: {
        '50': '12.5rem',
        '72': '18rem',
        '80': '20rem',
        '84': '22rem',
        '96': '24rem',
        '100': '26rem',
        '104': '28rem',
        '108': '30rem',
        '112': '32rem',
        '120': '40rem',
        '130': '50rem',
        '140': '60rem',
      },
      height: {
        '72': '18rem',
        '80': '20rem',
        '84': '22rem',
        '96': '24rem',
        '100': '26rem',
        '104': '28rem',
        '108': '30rem',
        '112': '32rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
