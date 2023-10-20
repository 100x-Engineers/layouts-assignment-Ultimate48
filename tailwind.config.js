module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'Inter':['Inter','sans-serif'],
      'Chirp':['Chirp','sans-serif'],
    },
    extend: {
      boxShadow:{
        'standard':'0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
      },
      colors:{
        'neutral-1000':"#000",
          'neutral-50':'#F9F9F9',
          "buttonstroke":"#546a7a",
          "twitterblue-default":"#1d9bf0",
        
      }
    },
  },
  plugins: [],
};
