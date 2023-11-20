import { Link } from 'react-router-dom'
import { useState } from 'react'

import Profile from '../Profile/Profile'
import InputSearch from '../InputSearch/InputSearch'

import Logo from './../../assets/images/Logo.svg'
import SearchIcon from './../../assets/images/searchIcon.png'
import MenuIcon from './../../assets/images/menu.png'
import CloseIcon from './../../assets/images/close-icon.png'
import CodeIcon from './../../assets/images/code-icon.svg'
import GroupIcon from './../../assets/images/group-icon.svg'

import './Header.scss'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    console.log(showMenu)

    setShowMenu(true)
  }
  return (
    <header className="header">
      <img className="header__img" src={Logo} alt="Logo AluraDev" />

      <div className="header__searchContainer">
        <div className="header__containerSearch">
          <input className="header__checkboxSearch" type="checkbox" />
          <img className="header__iconSearch" src={SearchIcon} alt="" />
          <InputSearch />
        </div>

        <div className="header__inputContainer">
          <input className="header__inputCheckbox" type="checkbox" />
          <img className="header__menuHamburger" src={MenuIcon} alt="" />
          <img className="header__closeIcon" src={CloseIcon} alt="" />

          <nav className={`header__nav ${showMenu ? 'header__nav__show' : ''}`}>
            <ul className="header__nav__ul">
              <li className="header__nav__ul__li" onClick={() => handleMenu()}>
                <img src={CodeIcon} alt="" />

                <Link to={'/editor'}>Editor de código</Link>
              </li>
              <li className="header__nav__ul__li" onClick={() => handleMenu()}>
                <img src={GroupIcon} alt="" />

                <Link to={'/community'}>Comunidade</Link>
              </li>
            </ul>

            <Profile />
          </nav>
        </div>
      </div>

      <Profile />
    </header>
  )
}
