import React from "react"

import Navigation from "../../../components/navigation"
import Toolbar from "../../../components/layouts/toolbar"

import styles from './profile.module.css'

const Profile = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Toolbar> Tun bar</Toolbar>
      <div className={styles.content}>
        Profile
      </div>
    </React.Fragment>
  )
}

export default Profile
