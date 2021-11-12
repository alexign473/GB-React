import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 3. Изменить компонент App
const App = () => {
  const text = 'message'
  return (
    <div>
      <Message text={text} />
      <Message text="chicken" />
    </div>
  )
}

// 2. компонент Message
const Message = (props) => {
  console.log(props)
  return (
    <p className="message">It's not about money, its about sending a {props.text}</p>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


