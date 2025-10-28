// const http=require('http')
// function rqListener(req,res){
//     console.log(req)
// }
// const server=http.createServer(rqListener);
// server.listen(4000)

//Another Method

const createHttp=require('http')
const server=createHttp.createServer((req,res)=>{
    // console.log(req.url)
    // console.log(req.method)
    // console.log(req.headers)
    //process.exit()
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head></head>')
    res.write('<body><h1>Hello James</h1></body>')
    res.write('</html>')
    res.end()
})
server.listen(5000)