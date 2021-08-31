import http from 'http'
const server=http.createServer((req,res)=>{
	console.log("Request received")
	res.write(`<h1>We we ${Math.floor(Math.random()*10)}</h1>`)
    res.write(`<h3>We we ${Math.floor(Math.random()*10)}</h3>`)		
	res.end("End it here")
})
console.log("Server created and starting------")
server.listen(8081)