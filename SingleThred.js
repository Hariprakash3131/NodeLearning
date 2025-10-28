const http=require('http');
const requestHandlers=require('./EventLoop')
const server=http.createServer(requestHandlers)
server.listen(5000) 

