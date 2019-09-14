import React from "react"

import Navigation from "../../../components/navigation"
import Toolbar from "../../../components/layouts/toolbar"

import styles from './user-management.module.css'

const UserManagement = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Toolbar> Tun bar</Toolbar>
      <div className={styles.content}>
        User management
      </div>
    </React.Fragment>
  )
}

export default UserManagement
