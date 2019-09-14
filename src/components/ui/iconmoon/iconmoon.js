import React from "react"
import IcomoonReact from 'icomoon-react'

import iconSet from "../../../assests/fonts/selection.json"

const IconMoon = ({icon, ...rest}) => {
  return (
    <IcomoonReact color="#7b7e83" iconSet={iconSet} icon={icon} {...rest}/>
  )
}

export default IconMoon
