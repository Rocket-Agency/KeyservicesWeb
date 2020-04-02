const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api/auth/signin", {
      target: "http://51.158.67.56:3001",
      secure: false,
      changeOrigin: true
    })
  );
}; 