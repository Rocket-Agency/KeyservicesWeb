require('ignore-styles');
require('@babel/register')({
  ignore: [/(node_module)/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins : [
      '@babel/plugin-proposal-class-properties'
  ]
})
//Import our routes
const router = require("./Route").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return (
  new Sitemap(router())
  .build("https://f2i-cw22-sc-ns-od-db.fr/")
 //Save it wherever you want
  .save("./public/sitemap.xml")
  );
}

generateSitemap();