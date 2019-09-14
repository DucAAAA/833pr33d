import React from "react"
import { Link } from "react-router-dom"

import history from "../../services/history"
import DropDown from "../ui/dropdown"
import IconMoon from "../ui/iconmoon"

import styles from "./navigation.module.scss"
import logo from "../../assests/images/logo.svg"
import profile from "../../assests/images/default-avatar.png"

const Navigation = () => {
  const dropdownSetting = [
    {
      label: "Language",
      children: [
        { label: "English", onClick: () => console.log('English')},
        { label: "Japanese", onClick: () => console.log('Japanese')}
      ]
    },
    {
      label: "Administrator authority",
      children: [
        { label: "User Management", onClick: () => history.push("/users")},
        { label: "IP Management", onClick: () => history.push("/ip-restrictions")}
      ]
    },
    {
      label: "Usage situation",
      onClick: () => history.push("/usage")
    }
  ]

  const dropdownProfile = [
    {
      label: "Edit Profile",
      onClick: () => history.push("/profile")
    },
    {
      label: "Logout",
      onClick: () => console.log('5')
    }
  ]

  return (
    <nav className={styles.navigation}>
      <img alt="logo" className={styles.leftNav} src={logo} />
      <div className={styles.middleNav}>
        <Link to="/templates"><div className={styles.middleNavItem}>Template</div></Link>
        <Link to="/tasks"><div className={styles.middleNavItem}>Task</div></Link>
      </div>
      <div className={styles.rightNav}>
        <div className={styles.settings}>
          <DropDown data={dropdownSetting} height="5.6rem">
            <IconMoon className={styles.icon} size={26} icon="setting"/>
          </DropDown>
        </div>
        <IconMoon className={styles.icon} size={26} icon="bell"/>
        <span className={styles.verticalLine}></span>
        <div className={styles.userInfo}>
          <DropDown data={dropdownProfile} height="5.6rem" inlineStyle={{right: 0}}>
            <img alt="avatar" className={styles.profile} src={profile} />
            <span>Some name</span>
            <IconMoon size={26} icon="cheveron-down"/>
          </DropDown>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
