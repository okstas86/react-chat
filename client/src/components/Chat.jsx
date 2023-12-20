import BodyChat from './body/BodyChat'
import MessageBlock from './message-block/MessageBlock'
import Sidebar from './sidebar/Sidebar'
import styles from './styles.module.css'

export default function Chat({ socket }) {
	return (
		<div className={styles.chat}>
			<Sidebar />
			<main className={styles.main}>
				<BodyChat />
				<MessageBlock />
			</main>
		</div>
	)
}
