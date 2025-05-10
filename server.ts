import { createServer, type Server } from "node:http";
import { argv } from "node:process";
import { watch } from "node:fs";
import { WebSocketServer } from "ws";

const index: string = argv.at(2) ?? ((): never =>
  { throw new Error(`Usage: ${argv.at(1)!} <app-root>`); })();

const server: Server = createServer(async (_request, response) => {
  const root: () => JSX.Element = (await import(`${index}?${Math.random()}`)).default;
  const html: string = await root();

  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(`<!DOCTYPE html>
${html}
<script>
  const ws = new WebSocket("ws://" + location.host);
  ws.onmessage = (ev) => {
    if (ev.data === "reload") location.reload();
  };
</script>`);
});

server.listen(5500, () => {
  console.log("Server running at http://localhost:5500");
});

const wss = new WebSocketServer({ server });

function broadcastReload(): void {
  for (const client of wss.clients) {
    if (client.readyState === 1) {
      client.send("reload");
    }
  }
}

// --- Watch file for changes
watch(index, { persistent: true }, () => {
  console.log("File changed. Broadcasting reload...");
  broadcastReload();
});
