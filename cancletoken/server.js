const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  // 处理跨域问题，允许所有的请求头和请求源
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  console.log(req.url);
  if (req.url === "/cancel") {
    setTimeout(() => {
      res.end(JSON.stringify({
        code: 1,
        msg: "success",
      }));
    }, 3000);
  }
});
server.listen(5000, () => {
  console.log("服务已启动");
});
