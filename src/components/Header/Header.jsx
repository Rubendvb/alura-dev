import Logo from './../../assets/images/Logo.svg'
import SearchIcon from './../../assets/images/searchIcon.png'
import MenuIcon from './../../assets/images/menu.png'
import PhotoProfile from './../../assets/images/Photo.png'

import './Header.scss'

export default function Header() {
  return (
    <header className="header">
      <img className="header__img" src={Logo} alt="Logo AluraDev" />

      <div className="header__searchContainer">
        <img className="header__iconSearch" src={SearchIcon} alt="" />

        <input
          className="header__input"
          type="text"
          name=""
          id=""
          placeholder="Busque por algo"
        />

        <img className="header__menuHamburger" src={MenuIcon} alt="" />
      </div>

      <div className="header__profileContainer">
        <img src={PhotoProfile} alt="" />
        <span>Harry</span>
      </div>
    </header>
  )
}
