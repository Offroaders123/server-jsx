import { createServer, type Server } from "node:http";
import { argv } from "node:process";

const index: string = argv.at(2) ?? ((): never =>
  { throw new Error(`Usage: ${argv.at(1)!} <app-root>`); })();

const server: Server = createServer(async (_request, response) => {
  const html: () => JSX.Element = (await import(index)).default;
  console.log(html);

  response.writeHead(200, { "Content-Type": "text/html" });
  // This needs to be read from the #!hashbang
  response.end("<!DOCTYPE html>" + html());
});

server.listen(5500, () => {
  console.log("Server running at http://localhost:5500");
});
