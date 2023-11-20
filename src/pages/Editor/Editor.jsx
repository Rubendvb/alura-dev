import CardCode from '../../components/CardCode/CardCode'

import './Editor.scss'

export default function Editor() {
  return (
    <section className="editor">
      <div className="editor__containerCode">
        <CardCode />

        <button className="editor__button">Visualizar com o highlight</button>
      </div>

      <aside className="editor__aside">
        <form>
          <h3>Seu projeto</h3>
          <div className="editor__containerButtons">
            <input type="text" placeholder="Nome do seu projeto" />

            <input type="text" placeholder="Descrição do seu projeto" />
          </div>

          <div className="editor__customization">
            <h3>Personalização</h3>

            <input type="text" placeholder="JavaScript" />

            <input type="color" defaultValue="#6BD1FF" />
          </div>

          <button className="editor__buttonSubmit" type="submit">
            Salvar projeto
          </button>
        </form>
      </aside>
    </section>
  )
}
