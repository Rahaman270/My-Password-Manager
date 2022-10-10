import './index.css'
import {useState} from 'react'
import {v4 as uuid} from 'uuid'

const Inpscomp = props => {
  const {addListItem} = props
  const [website, setWebsite] = useState('')
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  const formSubmit = e => {
    e.preventDefault()
    const data = {
      id: uuid(),
      website,
      name,
      pass,
    }
    addListItem(data)

    setWebsite('')
    setName('')
    setPass('')
  }
  return (
    <div className="maindiv">
      <form className="form" onSubmit={formSubmit}>
        <h1>Add New Password</h1>
        <div className="inpDiv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
            className="inpImg"
          />
          <input
            type="text"
            placeholder="Enter Website"
            className="Inp"
            onChange={event => setWebsite(event.target.value)}
            value={website}
          />
        </div>
        <div className="inpDiv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="username"
            className="inpImg"
          />
          <input
            type="text"
            placeholder="Enter Username"
            className="Inp"
            onChange={event => setName(event.target.value)}
            value={name}
          />
        </div>
        <div className="inpDiv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
            className="inpImg"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="Inp"
            onChange={event => setPass(event.target.value)}
            value={pass}
          />
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      <div className="imgdiv">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt="password manager"
        />
      </div>
    </div>
  )
}

export default Inpscomp
