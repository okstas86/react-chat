import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styles from './styles.module.css'

export default function Home({ socket }) {
	const navigate = useNavigate()
	const [user, setUser] = useState('')

	function HandleSubmit(e) {
		e.preventDefault()
		localStorage.setItem('user', user)
		socket.emit('newUser', { user, socketID: socket.id })
		navigate('/chat')
	}

	return (
		<form onSubmit={HandleSubmit} className={styles.container}>
			<h2>Enter the chat room</h2>
			<div>
				<label htmlFor='user'>User </label>
				<input
					type='text'
					id='user'
					value={user}
					onChange={e => setUser(e.target.value)}
					className={styles.userInput}
				/>
			</div>
			<button type='submit' className={styles.homeBtn}>
				Enter
			</button>
		</form>
	)
}
