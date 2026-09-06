import { createServer } from "node:http";
import fs from "node:fs";

const server = createServer((req, res) => {
  console.log("Request received....");
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });

    // const data = fs.readFileSync("./index.html");

    const dataStream = fs.createReadStream("./index.html");

    dataStream.pipe(res);

    // dataStream.on("data", (chunk) => {
    //   res.write(chunk);
    // });

    // dataStream.on("end", () => {
    //   res.end();
    // });
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });

    res.end("<h1> Hello from node.js about </h1>");
  }
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
