const net = require('net');
const http = require('http');

// const httpIns = http.createServer();

const httpServer = http.Server((req, resp) => {
  // console.log(222222, req);
});

const server = net.createServer((socketIns) => {
  // 'connection' 监听器。
  console.log('客户端已连接');
  socketIns.on('end', () => {
    console.log('客户端已断开连接');
  });

  // http._connectionListener(socketIns);
  console.info(1122, socketIns)

  httpServer.emit('connection', socketIns);
  // socketIns.write('你好\r\n');
  // socketIns.pipe(socketIns);
});
server.on('error', (err) => {
  throw err;
});
server.listen(8124, () => {
  console.log('服务器已启动');
});

server.on('connect', (socketIns) => {
  console.info('[event:connect-2] invoked');
  http._connectionListener(socketIns);
});

server.on('request', (req, res) => {
  console.info(1111, req);
});
