import React from "react"

import styles from "components/file-manager/table.module.scss"

import templateIcon from "assests/images/template-icon.svg"
import folderIcon from "assests/images/template-folder.svg"

export const dashboardColumns = [
  {
    title: "Template name",
    render: (record) => (
      <div className={styles.templatename}>
        <img src={record.type === "folder" ? folderIcon : templateIcon } alt="img"/>
        <div>{record.title}</div>
      </div>
    )
  },
  {
    title: "Created at",
    dataIndex: "createdAt",
  },
  {
    title: "Lasted task",
    dataIndex: "latestTask",
  },
  {
    title: "Author",
    dataIndex: "lastModified",
  }
]
