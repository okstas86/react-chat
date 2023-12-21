import styles from './styles.module.css'

export default function Sidebar({ socket, users }) {
	return (
		<div className={styles.sidebar}>
			<h4 className={styles.header}>Users</h4>
			<ul className={styles.users}>
				{users.map(element => (
					<li key={element.socketID}>{element.user}</li>
				))}
			</ul>
		</div>
	)
}
