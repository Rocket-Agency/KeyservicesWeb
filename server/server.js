import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import App from "../src/App";
import compression from 'compression';
import minify from 'express-minify';
import http from 'http';
import https from 'https';
import spdy from 'spdy';

const PORT = 3000;
const PORTS = 3003;

const app = express();

app.use(compression());
app.use(minify());
app.use(express.static('./build'));

const privateKey = fs.readFileSync('/etc/letsencrypt/live/f2i-cw22-sc-ns-od-db.fr/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/f2i-cw22-sc-ns-od-db.fr/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/f2i-cw22-sc-ns-od-db.fr/chain.pem', 'utf8');

const options = {
	key: privateKey,
	cert: certificate,
  ca: ca,
  spdy: {
    protocols: [ 'h2', 'http/1.1' ]
  }
};

app.get("/*", (req, res, next) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    if (context.status === 404) {
      res.status(404);
    }
    if (context.url) {
      return res.redirect(301, context.url);
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

const httpServer = http.createServer(app);
/*const httpsServer = https.createServer(credentials, app);*/
const spdyServer = spdy.createServer(options, app);

httpServer.listen(PORT, () => {
	console.log(`HTTP Server running on port ${PORT}`);
});

/*
httpsServer.listen(PORTS, () => {
	console.log(`HTTPS Server running on port ${PORTS}`);
});
*/

spdyServer.listen(PORTS, () => {
  console.log(`HTTP2 Server running on pot ${PORTS}`);
});