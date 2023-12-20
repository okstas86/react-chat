import styles from './styles.module.css'
export default function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<h4 className={styles.header}>Users</h4>
			<ul className={styles.users}>
				<li>User 1</li>
				<li>User 2</li>
				<li>User 3</li>
			</ul>
		</div>
	)
}
