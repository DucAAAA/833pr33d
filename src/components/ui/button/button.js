import React from "react"
import classNames from "classnames/bind"

import IconMoon from "components/ui/iconmoon"

import styles from "./button.module.scss"

const cx = classNames.bind(styles);

const Button = props => {
  const { children, icon, iconSize, type, height, className, noneResize, ...rest } = props;
  return (
    <button {...rest} className={cx(
      className,
      styles.button,
      styles[`height${height || 36}`],
      styles[type]
    )}>
      {icon && <IconMoon className={styles.icon} size={iconSize || 26} icon={icon}/>}
      <div className={cx(styles.children, {noneResize})}>
        {props.children}
      </div>
    </button>
  )
}

export default Button
