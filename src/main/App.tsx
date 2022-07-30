import { Router } from '@/presentation/router'
import GlobalStyle from '@/presentation/styles/GlobalStyle'
import store from '@/presentation/store'
import { Provider } from 'react-redux'
import { makeHomePage } from './factories/pages/home/HomeFactory'
import { makeLoginPage } from './factories/pages/login/LoginFactory'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle />
        <Router makeLoginPage={makeLoginPage} makeHomePage={makeHomePage} />
      </Provider>
    </div>
  )
}

export default App
