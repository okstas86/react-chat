import styles from './styles.module.css'

export default function BodyChat() {
	return (
		<>
			<header className={styles.header}>
				<button className={styles.btn}>leave the chat room</button>
			</header>
			<div className={styles.container}>
				<div className={styles.charts}>
					<p className={styles.senderName}>You</p>
					<div className={styles.messageSender}>
						<p>Hello</p>
					</div>
				</div>
				<div className={styles.charts}>
					<p className={styles.recipientName}>Me</p>
					<div className={styles.messageRecipient}>
						<p>Hi</p>
					</div>
				</div>
			</div>
		</>
	)
}
