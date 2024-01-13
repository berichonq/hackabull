import './App.css'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header/Header'

function App() {

  return (
    <div>
      {/*Since a few of the pages won't need the navbar, delete this header eventually and mount the navbar directly on the pages that need it*/}
      {/* <Header /> */}
      {/***************************************************************************************************************************************/}

      <Outlet />
    </div>
  )
}

export default App
