import styles from "./Message.module.css"

export default function Message(props) {
    const { text, autor } = props.message
    const messageClass = autor === 'HEMAN' ? styles.sent : styles.received
    return (
        <div className={`${styles.msg} ${messageClass}`}>
            <div className={styles.msg_bubble}>
                <span className={styles.msg_autor}>{autor}: </span>
                <p>{text}</p></div>
        </div>
    )
}
