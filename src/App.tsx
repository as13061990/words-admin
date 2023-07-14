import { Route, Routes } from 'react-router-dom'
import Header from './components/UI/Header/Header'
import LevelMenu from './containers/LevelMenu'
import BgMenu from './containers/BgMenu'
import MetaMenu from './containers/MetaMenu'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='/' element={<LevelMenu />} />
        <Route path='/level' element={<LevelMenu />} />
        <Route path='/bg' element={<BgMenu />} />
        <Route path='/meta' element={<MetaMenu />} />
      </Route>
    </Routes>
  )
}

export default App
