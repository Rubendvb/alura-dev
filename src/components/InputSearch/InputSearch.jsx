import CloseIcon from '../../assets/images/close-icon.png'

import './InputSearch.scss'

export default function InputSearch() {
  return (
    <>
      <input
        className="header__input"
        type="text"
        placeholder="Busque por algo"
      />

      <img className="header__iconClose" src={CloseIcon} alt="" />
    </>
  )
}
