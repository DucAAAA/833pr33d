import React from "react"

import Navigation from "../../../components/navigation"
import Toolbar from "../../../components/layouts/toolbar"

import styles from './usage-situation.module.css'

const UsageSituation = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Toolbar> Tun bar</Toolbar>
      <div className={styles.content}>
        Usage situation
      </div>
    </React.Fragment>
  )
}

export default UsageSituation
