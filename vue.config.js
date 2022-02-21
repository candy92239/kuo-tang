module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/kuo-tang/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/main.scss";
        `,
      },
    },
  },
};
