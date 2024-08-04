import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { Auth } from './pages/auth'


/*
PARA CREAR ENVIRONMENT:
yarn create vite (ESCOGER REACT Y TYPESCRIPT)
yarn
yarn dev
*/

function App() {
  return <Router>
    <div className = "app-container">
      <Routes>
        //TABS QUE APARECEN EN LA PAGINA
        <Route path = "/" element = {<Dashboard />} />
        <Route path = "/auth" element = {<Auth/>} />
      </Routes>
    </div>
  </Router>
}

export default App

