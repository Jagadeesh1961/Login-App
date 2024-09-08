import './index.css'

const Login = props => {
  const {onButtonClick} = props

  const onLogin = () => {
    onButtonClick()
  }

  return (
    <button className="button" type="button" onClick={onLogin}>
      Login
    </button>
  )
}

export default Login
