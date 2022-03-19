module.exports = {
  content: [
      './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'content': '720px'
      },
      colors: {
        'background': {
          900: '#1C1C1C'
        }
      }
    },
    fontFamily: {
      'sans': ['DM Sans'],
      'serif': ['DM Serif Text'],
      'mono': ['JetBrains Mono']
    }
  },
  plugins: [],
}
