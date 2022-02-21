module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/kuo-tang/" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/main.scss";
        `,
      },
    },
  },
};
