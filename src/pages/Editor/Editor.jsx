import './Editor.scss'

export default function Editor() {
  const code = `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj) 
   
  const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)
  
  const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, []) }`

  return (
    <section className="editor">
      <div className="editor__containerCode">
        <div className="editor__bg">
          <div className="editor__bgCode">
            <div className="editor__circle"></div>
            <code className="editor__code">{code}</code>
          </div>
        </div>

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
