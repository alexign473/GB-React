import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  // 1. Стейт messageList
  const [messageList, setMessageList] = useState([
    { text: "HEYYEYAAEYAAAEYAEYAA", autor: "HEMAN" },
    { text: "Hey", autor: "HEMAN" },
    { text: "What's goin on?", autor: "HEMAN" },
  ]);
  const [formValue, setFormValue] = useState('')

  // 4. Добавить useEffect
  useEffect(() => {
    const lastMessage = messageList.slice(-1)[0]
    if (messageList.length && lastMessage.autor === 'HEMAN') {
      setTimeout(() => {
        setMessageList([...messageList, { text: `Not much, brb`, autor: "Duncan-BOT" }])
      }, 1000)
    }
  }, [messageList])

  const sendMessage = (e) => {
    e.preventDefault()
    setMessageList((messagesState) => ([...messagesState, { text: formValue, autor: "HEMAN" }]))
    setFormValue('')
  }

  // 2. Рендерить список сообщений через map.
  // 3. Форма - поле для ввода текста и кнопка для отправки сообщения
  return (
    <div className="msger">
      <main className="msger-chat">
        {messageList.map((msg) => <Message message={msg} />)}
      </main>

      <form className="msger-inputarea" onSubmit={sendMessage}>
        <input type="text" value={formValue} placeholder="Enter your message..."
          onChange={(e) => setFormValue(e.target.value)}></input>
        <button type="submit">Отправить</button>
      </form>
    </div>
  )
}

const Message = (props) => {
  const { text, autor } = props.message
  const messageClass = autor === 'HEMAN' ? 'sent' : 'received'
  return (
    <div className={`msg ${messageClass}`}>
      <p>
        <span className="msg_autor">{autor}: </span>
        {text}
      </p>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


