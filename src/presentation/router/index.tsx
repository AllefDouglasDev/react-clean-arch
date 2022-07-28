import { ReactNode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { routes } from './routes'

type RouterProps = {
  makeLogin: () => ReactNode
}

export function Router(props: RouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.login} element={props.makeLogin()} />
      </Routes>
    </BrowserRouter>
  )
}
