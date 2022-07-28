import { Router } from '@/presentation/router'
import GlobalStyle from '@/presentation/styles/GlobalStyle'
import { makeHomePage } from './factories/pages/home/HomeFactory'
import { makeLoginPage } from './factories/pages/login/LoginFactory'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router makeLoginPage={makeLoginPage} makeHomePage={makeHomePage} />
    </div>
  )
}

export default App
