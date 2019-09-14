import React from "react"

import Navigation from "../../../components/navigation"
import Toolbar from "../../../components/layouts/toolbar"

import styles from "./tasks-list.module.scss"

const TaskList = () => {
  return (
    <React.Fragment>
    <Navigation />
    <Toolbar> Tun bar</Toolbar>
    <div className={styles.content}>
      Task list
    </div>
  </React.Fragment>
  )
}

export default TaskList
