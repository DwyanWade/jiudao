import React, { Component } from 'react'
import { GlobalStyle } from "./style"
import { HashRouter, Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import Journal from './pages/journal'
import Book from './pages/book'
import My from './pages/my'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <GlobalStyle/>
          <HashRouter>
            <div>
              <Route path='/' exact component={Journal}></Route>
              <Route path='/book' exact component={Book}></Route>
              <Route path='/my' exact component={My}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </HashRouter>
        </Provider>
      </div>
    )
  }
}

export default App
