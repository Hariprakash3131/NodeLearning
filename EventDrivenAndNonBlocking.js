const http=require('http');
const fs=require('fs'); //File System Core Module
const { format } = require('path');
const { log } = require('console');
const server=http.createServer((req,res)=>{
   // console.log(req.url)
   // console.log(req.method)
    //console.log(req.headers)
    const checkUrl=req.url;
   
    if (checkUrl==='/'){
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>Node</title></head>')
    res.write('<body><form  action="/message" method="POST"><input type="text" name="msg" /><button type="submit">Send</button></form></body>')
    res.write('</html>')  
    return res.end()
    }
    

// sourcery skip: use-object-destructuring
    const method=req.method;

    if(checkUrl==='/message'&& method=='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk)
            console.log(chunk)
           
        })
        req.on('end',()=>{
            const mergeBody=Buffer.concat(body).toString();
            const msg=mergeBody.split('=')
            fs.writeFileSync('Event.txt',msg[1])
            fs.writeFileSync('Event.txt',"Dummy File")
        })

        fs.writeFileSync('hello4.txt',"Dummy File")
        res.statusCode=302
        res.setHeader('Location','/')
        return res.end();
    }
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>Node</title></head>')
    res.write('<body><h1>Sending Response</h1></body>')
    res.write('</html>')
    res.end()
    
})
server.listen(5000) 

