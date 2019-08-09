import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import history from '../services/history'
import { store, persistor } from '../services/store'

import NotFound from './commons/404-not-found'

import './App.css';

function App() {
  return (
    <Suspense fallback={false}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Switch>
              <Route component={NotFound} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </Suspense>
  )
}

export default App;
