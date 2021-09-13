import http from 'http'

function requestDealer(req, resp) {
	const randomNumber= (Math.ceil(Math.random()*1000000000))
	resp.end(randomNumber.toString())
	
}
const server =http.createServer(requestDealer)
server.listen(8081)