import styles from './styles.module.css'

export default function MessageBlock() {
	return (
		<div className={styles.messageBlock}>
			<form className={styles.form}>
				<input className={styles.userMessage} type='text' />
				<button className={styles.btn}>Send</button>
			</form>
		</div>
	)
}
