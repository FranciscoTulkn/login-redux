import { useSelector } from 'react-redux'
import './App.css'
import Dashboard from './components/Dashboard'
import Login from './components/Login'


function App() {
  
  const token = useSelector(state => state.token);

  return (
    <div>
      { token ? <Dashboard /> : <Login /> }
    </div>
  )
}

export default App
