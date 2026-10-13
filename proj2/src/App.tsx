import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ThemeToggle from './components/ThemeToggle'
import { routes } from './routes'

function App() {
  return (
    <>
      <ThemeToggle />
      <Header />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </>
  )
}

export default App
