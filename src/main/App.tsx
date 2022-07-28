import { Router } from '@/presentation/router'
import GlobalStyle from '@/presentation/styles/GlobalStyle'
import { makeLogin } from './factories/pages/login/LoginFactory'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router makeLogin={makeLogin} />
    </div>
  )
}

export default App
