import http from 'http';
console.log("max header size", http.maxHeaderSize)
const port = 9998
http.createServer((req, res) => {
	  console.log("bytesRead",req.socket.bytesRead);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello, world!");
    res.end();
}).listen(port, () => {
    console.log(`App is running on port ${port}`);
});
