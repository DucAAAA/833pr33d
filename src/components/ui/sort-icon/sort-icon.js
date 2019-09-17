import React from "react"

import IconMoon from "components/ui/iconmoon"

import styles from "./sort-icon.module.scss"

const SortIcon = props => {
  const { up } = props
  const colors = {
    active: "#0da6d0",
    deactive: "#ccc"
  }
  return(
    <div className={styles.arrowContainer}>
      <IconMoon className={styles.firstArrow} color={up ? colors.active : colors.deactive} icon="arrow-up-solid" size={props.size || 20} />
      <IconMoon color={up === false ? colors.active : colors.deactive}icon="arrow-down-solid" size={props.size || 20} />
    </div>
  )
}

export default SortIcon
