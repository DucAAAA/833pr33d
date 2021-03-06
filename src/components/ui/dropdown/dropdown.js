import React from "react"
import cx from "classnames"

import styles from "./dropdown.module.scss"

const Dropdown = props => {
  const { data, height, inlineStyle, className } = props

  const htmlRender = data.map((item, index) => {
    if (item.children && item.onClick) {
      console.error("Can't use attribue children and onlick with together")
      return null
    }

    if (item.children) {
      const level2 = item.children.map((i, idx) => <li key={idx} style={{height: "5.6rem",}} onClick={i.onClick}>{i.label}</li>)
      return (
        <li
          key={index}
          style={{height,}}
          className={cx(styles.dropdownContainerLev2, item.bottomLine && styles.lineBottom)}
          onClick={item.onClick}
          >
            {item.label}
          <ul className={cx([styles.dropdownLev2, styles.dropdownItems])}>{level2}</ul>
        </li>
      )
    } else {
      return <li
        className={cx(item.bottomLine && styles.lineBottom)}
        key={index}
        style={{height,}}
        onClick={item.onClick}
        >
          {item.label}
        </li>
    }
  })

  return (
    <div className={cx(styles.dropdownContainer, className)}>
      {props.children}
      <ul style={inlineStyle} className={cx([styles.dropdownLev1, styles.dropdownItems])}>{htmlRender}</ul>
    </div>
  )
}

export default Dropdown
