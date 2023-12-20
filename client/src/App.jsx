import './App.css'
import socketIO from 'socket.io-client'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Chat from './components/Chat'

const socket = socketIO.connect('http://localhost:5000')

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home socket={socket} />} />
			<Route path='/chat' element={<Chat socket={socket} />} />
		</Routes>
	)
}

export default App
