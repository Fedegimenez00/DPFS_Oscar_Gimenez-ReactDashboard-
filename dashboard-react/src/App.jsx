import './App.css'
import { Dashboard } from './components/dashboard'
import { SideBar } from './components/sidebar'

function App() {

  return (
    <div className='container'>
     <SideBar/>
     <Dashboard/>
    </div>
  )
}

export default App
