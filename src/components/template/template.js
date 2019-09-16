import React from "react"

import IconMoon from "components/ui/iconmoon"
import Dropdown from "components/ui/dropdown"

import styles from "./template.module.scss"
import templateIcon from "assests/images/template-icon.svg"

const Template = props => {
  const { data } = props
  const dropdown = [
    {
      label: "Detail",
      onClick: () => console.log('1')
    },
    {
      label: "Change Template name",
      onClick: () => console.log('2')
    },
    {
      label: "Move",
      onClick: () => console.log('3')
    },
    {
      label: "Delete",
      onClick: () => console.log('4'),
      bottomLine: true
    },
    {
      label: "Export Metadata",
      onClick: () => console.log('5')
    }
  ]

  return (
    <div className={styles.templateContainer}>
      <div className={styles.templateItem}>
        <div className={styles.imageContainer}>
          <img src={data.image_url} alt="template"/>
        </div>
        <div className={styles.footerContainer}>
          <img src={templateIcon} alt="template"/>
          <div className={styles.templateTitle}>
            <span className={styles.templateName}>{data.title}</span>
            <span className={styles.templateAuthor}>{data.last_modified}</span>
            <div className={styles.dot3} >
              <Dropdown data={dropdown} height="3.2rem" inlineStyle={{top: "2.6rem", right: "-2rem"}}>
                <IconMoon color="#0da6d0" icon="three-dots" size={26} />
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template
