import { ReactNode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { routes } from './routes'

type RouterProps = {
  makeHomePage: () => ReactNode
  makeLoginPage: () => ReactNode
}

export function Router(props: RouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={props.makeHomePage()} />
        <Route path={routes.login} element={props.makeLoginPage()} />
      </Routes>
    </BrowserRouter>
  )
}
