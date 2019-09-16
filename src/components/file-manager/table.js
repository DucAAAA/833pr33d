import React from "react"
import cx from "classnames"

import styles from "./table.module.scss"

const Table = props => {
  const { dataSource, rowKey, columns } = props

  const renderRow = columns.map((col, idx) => <th className={cx(styles.header, styles.row)} key={idx}>{col.title}</th>)
  const renderData = dataSource.map(record => (
    <tr key={record[rowKey]} className={styles.row}>
      {columns.map((col, colx) => {
        if(col.dataIndex && (typeof col.render === "function")) {
          if(Array.isArray(record[col.dataIndex])) return <td key={colx}>{col.render(record[col.dataIndex])}</td>
          return <td key={colx}>{col.render(record)}</td>
        } else if (col.dataIndex) {
          return <td key={colx}>{(typeof record[col.dataIndex] !== 'object') && record[col.dataIndex] }</td>
        } else if(typeof col.render === "function"){
          return <td key={colx}>{col.render(record)}</td>
        }
      })}
    </tr>
  ))
  return (
    <table className={styles.table}>
      <tbody>
        <tr className={styles.headerColumn}>{renderRow}</tr>
        {renderData}
      </tbody>
    </table>
  )
}

export default Table
