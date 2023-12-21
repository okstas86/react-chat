const express = require('express')
const app = express()

const PORT = 5000
const http = require('http').Server(app)
const cors = require('cors')
const socketIO = require('socket.io')(http, {
	cors: {
		origin: 'http://localhost:5173',
	},
})

app.get('api', (req, res) => {
	res.json({
		message: 'Hi',
	})
})

const users = []

socketIO.on('connection', socket => {
	console.log(`${socket.id} user connected`)
	socket.on('message', data => {
		socketIO.emit('response', data)
	})
	socket.on('typing', data => socket.broadcast.emit('responseTyping', data))
	socket.on('newUser', data => {
		users.push(data)
		socketIO.emit('responseNewUser', users)
	})
	socket.on('exitUser', data => {
		const index = users.findIndex(user => user.socketID === data.socketID)

		if (index !== -1) {
			const removedUser = users.splice(index, 1)[0]
			console.log(removedUser)
			console.log(users)
			socketIO.emit('exitUser', removedUser)
		}
	})

	socket.on('disconnect', () => {
		console.log(`${socket.id} user diconnect`)
	})
})

http.listen(PORT, () => {
	console.log('Server is working')
})
