module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    // clientLogLevel: "info",
    // open: true,
    // host: "localhost", // 設置主機地址
    // port: 8080, // 設置默認埠號
    // https: false,
    proxy: {
      "/api": {
        target: "http://localhost:3000/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
};
