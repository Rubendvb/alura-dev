import PhotoProfile from './../../assets/images/Photo.png'

import './Profile.scss'

export default function Profile() {
  return (
    <div className="profile__container">
      <img src={PhotoProfile} alt="" />
      <span className="profile__name">Harry</span>
    </div>
  )
}
