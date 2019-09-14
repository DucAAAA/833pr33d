import React from "react"

import Navigation from "../../../components/navigation"
import Toolbar from "../../../components/layouts/toolbar"

import styles from './templates-list.module.css'

const TemplateList = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Toolbar> Tun bar</Toolbar>
      <div className={styles.content}>
        Template list
      </div>
    </React.Fragment>
  )
}

export default TemplateList
