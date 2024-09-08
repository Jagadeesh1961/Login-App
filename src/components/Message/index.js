import './index.css'

const Message = props => {
  const {isLogin} = props

  const messageText = isLogin ? 'Welcome User' : 'Please Login'

  return (
    <div>
      <h1 className="heading">{messageText}</h1>
    </div>
  )
}

export default Message
