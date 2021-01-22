module.exports = { // eslint-disable-line
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/_variables.scss";'
      }
    },
    build: {
      transpile: ['gsap']
    }
  }
};  // eslint-disable-line