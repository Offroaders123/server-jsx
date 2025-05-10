import { createServer } from "node:http";
// import { argv } from "node:process";
import { renderToString } from "solid-js/web";
import Index from "./index.js";

// const index: string = argv.at(2) ?? ((): never =>
//   { throw new Error(`Usage: ${argv.at(1)!} <app-root>`); })();

const server = createServer((_request, response) => {
  const html: string = renderToString(() => Index);
  console.log(html);
});