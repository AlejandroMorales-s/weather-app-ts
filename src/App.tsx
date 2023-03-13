import './App.scss'
import {Routes, Route} from 'react-router-dom'
import SearchCityPage from './pages/searchCityPage/SearchCityPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<SearchCityPage />}/>
    </Routes>
  )
}

export default App
