import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Users from './pages/Users.jsx'
import User from './pages/User.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<App />}/>
        <Route path="about"  element={<About/>} />
        <Route path="users"  element={<Users/>} >
          <Route path=":idUser" element={<User/>}/>
        </Route>
        <Route path="*"  element={<Navigate replace to="/"/>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
