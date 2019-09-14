import React from "react"

import Navigation from "../../../components/navigation"
import Toolbar from "../../../components/layouts/toolbar"

import styles from './ip-management.module.css'

const IpManagement = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Toolbar> Tun bar</Toolbar>
      <div className={styles.content}>
        Ip Management
      </div>
    </React.Fragment>
  )
}

export default IpManagement
