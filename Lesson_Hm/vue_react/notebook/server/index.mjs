import http from 'http'

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('hello world')

})
.listen(3000)