import CardCode from '../../components/CardCode/CardCode'

import Comment from '../../assets/images/comment.svg'
import Heart from '../../assets/images/heart.svg'
import Photo from '../../assets/images/Photo.png'

import './Community.scss'

export default function Community() {
  return (
    <section className="community">
      <article className="communityCard">
        <CardCode />

        <div className="communityCard__header">
          <h2>Título do projeto</h2>

          <p>Essa é a descrição do meu projeto.</p>
        </div>

        <div className="communityCard__footer">
          <div className="communityCard__footer__info">
            <div>
              <img src={Comment} alt="" />
              <span>9</span>
            </div>

            <div>
              <img src={Heart} alt="" />
              <span>9</span>
            </div>
          </div>

          <div className="communityCard__footer__profile">
            <img src={Photo} alt="" />
            <span>@Harry</span>
          </div>
        </div>
      </article>

      <article className="communityCard">
        <CardCode />

        <div className="communityCard__header">
          <h2>Título do projeto</h2>

          <p>Essa é a descrição do meu projeto.</p>
        </div>

        <div className="communityCard__footer">
          <div className="communityCard__footer__info">
            <div>
              <img src={Comment} alt="" />
              <span>9</span>
            </div>

            <div>
              <img src={Heart} alt="" />
              <span>9</span>
            </div>
          </div>

          <div className="communityCard__footer__profile">
            <img src={Photo} alt="" />
            <span>@Harry</span>
          </div>
        </div>
      </article>
    </section>
  )
}
