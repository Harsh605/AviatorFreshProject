process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import express from "express";
import https from "https";
import fs from "fs";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

// Serve your frontend (adjust the path accordingly)
app.use(express.static("./build"));

// Proxy middleware
// const apiProxy = createProxyMiddleware("/api", {
//   target: "http://localhost:8000", // Backend server running on port 8000
//   changeOrigin: true,
//   //   pathRewrite: {
//   //     '^/api/create_order': '/api/create_order',
//   //   },
// });

// app.use("/", apiProxy);

// Load SSL certificate and key for frontend
const sslOptions = {
  key: fs.readFileSync("./private-key.pem"),
  cert: fs.readFileSync("./certificate.pem"),
};

// Create an HTTPS server for the frontend
const frontendServer = https.createServer(sslOptions, app);

const frontendPort = 3000; // Frontend server running on port 3000
frontendServer.listen(frontendPort, () => {
  console.log(`Frontend server listening on port ${frontendPort}`);
});

// Create an HTTPS proxy server
const proxy = createProxyMiddleware({
  target: `https://localhost:${frontendPort}`,
  changeOrigin: true,
  //   pathRewrite: {
  //     '^/api/create_order': '/api/create_order',
  //   },
});

const proxyServer = https.createServer(sslOptions, (req, res) => {
  proxy(req, res);
});

const proxyPort = 443; // Proxy server running on port 443 (standard HTTPS port)
proxyServer.listen(proxyPort, () => {
  console.log(`Proxy server listening on port ${proxyPort}`);
});
