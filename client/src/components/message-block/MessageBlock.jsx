import { useState } from 'react'
import styles from './styles.module.css'

export default function MessageBlock({ socket }) {
	const [message, setMessage] = useState('')

	const isTyping = () =>
		socket.emit('typing', `${localStorage.getItem('user')} is typing ...`)

	function handleSend(e) {
		e.preventDefault()
		if (message.trim() && localStorage.getItem('user')) {
			socket.emit('message', {
				text: message,
				name: localStorage.getItem('user'),
				id: new Date(),
				socketID: socket.id,
			})
		}
		setMessage('')
	}

	return (
		<div className={styles.messageBlock}>
			<form className={styles.form}>
				<input
					className={styles.userMessage}
					type='text'
					value={message}
					onChange={e => {
						setMessage(e.target.value)
					}}
					onKeyDown={isTyping}
				/>
				<button onClick={handleSend} className={styles.btn}>
					Send
				</button>
			</form>
		</div>
	)
}
