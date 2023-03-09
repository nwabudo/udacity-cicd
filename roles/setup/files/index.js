import { createServer } from "http";
var server = createServer(function (req, res) {
res.writeHead(200);
res.end("Hello world!");
});
server.listen(3000);