import { Outlet } from 'react-router-dom'

import './App.scss'

function App() {
  return (
    <>
      <main className="main">
        {/* <aside>
          Menu
          <nav>
            <ul>
              <li>
                <Link to={'/editor'}>Editor</Link>
              </li>
              <li>
                <Link to={'/community'}>Comunidade</Link>
              </li>
            </ul>
          </nav>
        </aside> */}

        <Outlet />
      </main>
    </>
  )
}

export default App
