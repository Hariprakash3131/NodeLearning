const fs=require('fs'); 
const requestHandlers=(req,res)=>{
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
        return req.on('end',()=>{
            console.log('Event end')
            const mergeBody=Buffer.concat(body).toString();
            const msg=mergeBody.split('=')
            fs.writeFile('Event.txt',msg[1],(err)=>{
                console.log("File Write Completed")    
        res.setHeader('Location','/')
        res.statusCode=302
        return res.end();
            })
    
        })

        
    }
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>Node</title></head>')
    res.write('<body><h1>Sending Response</h1></body>')
    res.write('</html>')
    res.end()

}
module.exports=requestHandlers