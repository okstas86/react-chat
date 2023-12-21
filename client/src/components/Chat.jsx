import { useState, useEffect } from 'react'
import BodyChat from './body/BodyChat'
import MessageBlock from './message-block/MessageBlock'
import Sidebar from './sidebar/Sidebar'
import styles from './styles.module.css'

export default function Chat({ socket }) {
	const [messages, setMessages] = useState([])
	const [status, setStatus] = useState('')
	const [users, setUsers] = useState([])

	useEffect(() => {
		socket.on('responseNewUser', data => {
			setUsers(data)
		})

		return () => {
			socket.off('responseNewUser')
			socket.off('responseExitUser')
		}
	}, [socket])

	useEffect(() => {
		socket.on('response', data => {
			setMessages([...messages, data])
		})
	}, [socket, messages])
	useEffect(() => {
		socket.on('responseTyping', data => {
			setStatus(data)
			setTimeout(() => setStatus(''), 1000)
		})
	}, [socket])
	return (
		<div className={styles.chat}>
			<Sidebar socket={socket} users={users} />
			<main className={styles.main}>
				<BodyChat
					messages={messages}
					status={status}
					socket={socket}
					setUsers={setUsers}
				/>
				<MessageBlock socket={socket} />
			</main>
		</div>
	)
}
