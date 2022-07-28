import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { routes } from './routes'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(routes).map(([_, route]) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
