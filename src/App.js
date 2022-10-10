import {Component} from 'react'
import './App.css'
import Inpscomp from './components/inputsComponent/index'
import Listitem from './components/listitemcomponent/index'

const initList = []

class App extends Component {
  state = {
    list: initList,
    search: '',
    isChecked: false,
  }

  ondelete = e => {
    const {list} = this.state
    const ditems = list.filter(eachItem => eachItem.id !== e)

    this.setState({list: ditems})
  }

  searchchange = e => {
    this.setState({search: e.target.value.toLowerCase()})
  }

  addListItem = e => {
    this.setState(pre => ({
      list: [...pre.list, e],
    }))
  }

  oncheck = e => {
    this.setState({isChecked: e.target.checked})
  }

  render() {
    const {list, search, isChecked} = this.state
    const flist = list.filter(eachItem =>
      eachItem.website.toLowerCase().includes(search),
    )
    const len = flist.length > 0
    // console.log(isChecked)

    return (
      <div>
        <img
          className="app_logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <Inpscomp addListItem={this.addListItem} />
        <div className="mainbottomdiv">
          <div className="passUpperDiv">
            <h1>Your Passwords</h1>
            <p className="passCount">{list.length}</p>
            <div className="searchdiv">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="inpImg"
              />
              <input
                type="search"
                placeholder="Search"
                className="Inp"
                onChange={this.searchchange}
              />
            </div>
          </div>
          <div className="checkboxdiv">
            <input type="checkbox" id="checkbox" onChange={this.oncheck} />
            <label htmlFor="checkbox">Show Passwords</label>
          </div>

          {!len ? (
            <div className="noListItemIMG">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p>No Passwords</p>
            </div>
          ) : (
            <ul className="itemsDiv">
              {len &&
                flist.map(each => (
                  <Listitem
                    item={each}
                    check={isChecked}
                    ondelete={this.ondelete}
                    key={each.id}
                  />
                ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
