import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'

export default function BodyChat({ messages, status, socket, setUsers }) {
	const navigate = useNavigate()

	const remove = () => {
		socket.on('responseExitUser', removedUser => {
			setUsers(prevUsers =>
				prevUsers.filter(user => user.socketID !== removedUser.socketID)
			)
		})
	}
	function handleLeave() {
		const user = {
			socketID: socket.id,
		}

		localStorage.removeItem('user')
		remove()
		socket.emit('exitUser', user)
		navigate('/')
	}

	return (
		<>
			<header className={styles.header}>
				<button onClick={handleLeave} className={styles.btn}>
					Quit
				</button>
			</header>
			<div className={styles.container}>
				{messages.map(element => {
					return element.name === localStorage.getItem('user') ? (
						<div className={styles.charts} key={element.id}>
							<p className={styles.senderName}>You</p>
							<div className={styles.messageSender}>
								<p>{element.text}</p>
							</div>
						</div>
					) : (
						<div className={styles.charts} key={element.id}>
							<p className={styles.recipientName}>{element.name}</p>
							<div className={styles.messageRecipient}>
								<p>{element.text}</p>
							</div>
						</div>
					)
				})}
				<div className={styles.status}>
					<p>{status}</p>
				</div>
			</div>
		</>
	)
}
