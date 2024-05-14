import http from "http";

console.log("http.maxHeaderSize (Not Bun.serve)", http.maxHeaderSize)
const server = Bun.serve({
	port: 9999,
  fetch(req) {
		console.log(req.headers)
    return new Response("Bun!");
  },
});
console.log(`Bun.serve Listening on http://localhost:${server.port} ...`);

const port = 9998
http.createServer({
maxHeaderSize: 32000, // scheint nichts zu bringen
}, (req, res) => {
	  console.log("bytesRead",req.socket.bytesRead);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello, world!");
    res.end();
}).listen(port, () => {
    console.log(`http server is running on port ${port}`);
});


