import type { ReactElement } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Preview from './pages/Preview'

interface AppRoute {
  path: string
  label: string
  element: ReactElement
}

// Single source of truth: the router and the header both read this list.
// To add a page, create it in src/pages/ and add one entry here.
export const routes: AppRoute[] = [
  { path: '/', label: 'Home', element: <Home /> },
  { path: '/about', label: 'About', element: <About /> },
  { path: '/preview', label: 'Preview', element: <Preview /> },
]
