import dotenv from 'dotenv'
 import http from 'http'

 // Deploy code
dotenv.config()
console.log("API_KEY is " + process.env.API_KEY)

// Deploy code end



function requestDealer(req, resp) {
	const randomNumber= (Math.ceil(Math.random()*1000000000))
	resp.end(randomNumber.toString())
	
}
const port =8081
const server =http.createServer(requestDealer)
console.log("Server listening on localhost:"+port)
server.listen(port) 