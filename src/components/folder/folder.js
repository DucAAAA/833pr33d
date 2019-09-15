import React from "react"

import IconMoon from "components/ui/iconmoon"
import Dropdown from "components/ui/dropdown"

import styles from "./folder.module.scss"
import folderIcon from "assests/images/template-folder.svg"

const Folder = () => {
  const dropdown = [
    {
      label: "Detail",
      onClick: () => console.log('1')
    },
    {
      label: "Change folder name",
      onClick: () => console.log('2')
    },
    {
      label: "Move",
      onClick: () => console.log('3')
    },
    {
      label: "Delete",
      onClick: () => console.log('4')
    },
  ]
  return (
    <div className={styles.folderContainer}>
      <img src={folderIcon} alt="folder"/>
      <div className={styles.folderTitle}>
        <span className={styles.folderName}>template</span>
        <span className={styles.templateAuthor}>HongTran</span>
        <div className={styles.dot3} >
          <Dropdown data={dropdown} height="3.2rem" inlineStyle={{top: "2.6rem", right: "-1rem"}}>
            <IconMoon className={styles.dot3} color="#0da6d0" icon="three-dots" size={26} />
          </Dropdown>
        </div>
      </div>
    </div>
  )
}


export default Folder