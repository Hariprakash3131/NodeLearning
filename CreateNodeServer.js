const http=require('http');
// const { format } = require('path');
const server=http.createServer((req,res)=>{
   // console.log(req.url)
   // console.log(req.method)
    //console.log(req.headers)
    const checkUrl=req.url;
    if (checkUrl==='/'){
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>Node</title></head>')
    res.write('<body><form action="/message" method="post"><input type="text"></input></form><button>Send</button></body>')
    res.write('</html>')  
    return res.end()
    }

    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>Node</title></head>')
    res.write('<body><h1>Sending Response</h1></body>')
    res.write('</html>')
    res.end()
    
})
server.listen(5000) 

