import http from "node:http";
const port = 9997;

const handler = (request: Request): Response => {
  const body = `Your user-agent is:\n\n${
    request.headers.get("user-agent") ?? "Unknown"
  }`;
	console.log(request.headers)

  return new Response(body, { status: 200 });
};

console.log("http.maxHeaderSize (Not Deno.serve !!!)", http.maxHeaderSize)
console.log(`HTTP server running. Access it at: http://localhost:${port}/`);
Deno.serve({ port }, handler);

const httpPort = 9998

http.createServer( {maxHeaderSize: 8000},(req, res) => {
	  console.log("bytesRead",req.socket.bytesRead);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello, world!");
	console.log(req.headers)
    res.end();
}).listen(httpPort, () => {
    console.log(`App is running on port ${httpPort}`);
});
