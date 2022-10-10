import './index.css'

const ListItem = props => {
  const {item, ondelete, check} = props
  const {id, website, name, pass} = item
  console.log(check, 'website:', website, 'name:', name, 'pass:', pass)

  const deletefoo = () => {
    ondelete(id)
  }

  return (
    <li className="mainCard">
      <div className="Caplettet">{website[0].toUpperCase()}</div>
      <div>
        <p>{website}</p>
        <p>{name}</p>
        {check ? (
          <p>{pass}</p>
        ) : (
          <img
            className="starsImg"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>

      <img
        className="deletebtn"
        onClick={deletefoo}
        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        alt="delete"
      />
    </li>
  )
}

export default ListItem
