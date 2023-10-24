// svcs/pong/src/index.mts
import { readFile } from "node:fs/promises";
import { createSecureServer, createServer } from "node:http2";
import { env } from "node:process";
var port = parseInt(env.PORT ?? "8080");
var key = env.HTTP2_KEY ?? "localhost-privkey.pem";
var cert = env.HTTP2_CERT ?? "localhost-cert.pem";
var isDev = env.NODE_ENV !== "prod";
console.log({ port });
var server = isDev ? createServer() : createSecureServer({
  key: await readFile(key),
  cert: await readFile(cert)
});
server.on("error", (err) => console.error({ err }));
server.on("stream", (stream, headers) => {
  console.log({ headers });
  stream.respond({
    "content-type": "text/html; charset=utf-8",
    ":status": 200
  });
  stream.end("<h1>Pong!!!</h1>");
});
server.listen(port);
console.log(`server started`)
