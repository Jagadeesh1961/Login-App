import './index.css'

const Logout = props => {
  const {onButtonClick} = props

  const onLogout = () => {
    onButtonClick()
  }

  return (
    <button className="button" type="button" onClick={onLogout}>
      Logout
    </button>
  )
}

export default Logout
