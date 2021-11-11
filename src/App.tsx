import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { AuthContextProvider } from './contexts/AuthContext'

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rooms/new" element={<NewRoom />} />
      </Routes>
    </AuthContextProvider>
  )
}

export default App
