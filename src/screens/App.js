import React, { Suspense } from "react"
import { Provider } from "react-redux"
import { Switch, Route, Router } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"

import history from "../services/history"
import { store, persistor } from "../services/store"

import PrivateRoute from "../components/Routes/PrivateRoute"
import PublicRoute from "../components/Routes/PublicRoute"
import SwichRoute from "../components/Routes/SwichRoute"

import Login from "./main-app/login"
import LandingPage from "./commons/landing-page"
import NotFound from "./commons/404-not-found"
import TemplateList from "./main-app/templates-list"

import "./App.css";

function App() {
  return (
    <Suspense fallback={false}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/templates" component={TemplateList} />
              <PublicRoute exact path="/login" component={Login} />
              <Route exact path="/home" component={LandingPage} />
              <SwichRoute exect path="/" />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </Suspense>
  )
}

export default App;
