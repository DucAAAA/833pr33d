import React, { Suspense } from "react"
import { Provider } from "react-redux"
import { Switch, Route, Router } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"

import history from "services/history"
import { store, persistor } from "services/store"

import PrivateRoute from "components/Routes/PrivateRoute"
import PublicRoute from "components/Routes/PublicRoute"
import SwichRoute from "components/Routes/SwichRoute"

import Login from "./main-app/login"
import LandingPage from "./commons/landing-page"
import TemplateList from "screens/main-app/templates-list"
import TaskList from "screens/main-app/tasks-list"
import UserManagement from "screens/main-app/user-management"
import IpManagement from "screens/main-app/ip-management"
import Profile from "screens/main-app/profile"
import UsageSituation from "screens/main-app/usage-situation"
import MainLayout from "components/layouts/main-layout"
import DemoUi from "screens/demo-ui"

import "screens/App.css";

function App() {
  return (
    <Suspense fallback={false}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Switch>
              <PrivateRoute exect path="/tasks" layout={MainLayout} component={TaskList} />
              <PrivateRoute exect path="/profile" layout={MainLayout} component={Profile} />
              <PrivateRoute exect path="/usage" layout={MainLayout} component={UsageSituation} />
              <PrivateRoute exect path="/users" layout={MainLayout} component={UserManagement} />
              <PrivateRoute exect path="/templates" layout={MainLayout} component={TemplateList} />
              <PrivateRoute exect path="/ip-restrictions" layout={MainLayout} component={IpManagement} />
              <PublicRoute exect path="/login" component={Login} />
              <Route exect path="/home" component={LandingPage} />
              {!(process.env.RAILS_ENV === "production") && <Route exect path="/demo-ui" component={DemoUi} />}
              <SwichRoute exect path="/" />

            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </Suspense>
  )
}

export default App;
