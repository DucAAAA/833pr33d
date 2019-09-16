import React from "react"
import cx from "classnames"
import { connect } from "react-redux"
import { compose, withState } from "recompose"
import { isEmpty } from "lodash"
import { withTranslation } from "react-i18next"

import Table from "./table"
import Toolbar from "components/layouts/toolbar"
import Template from "components/template"
import Folder from "components/folder"
import IconMoon from "components/ui/iconmoon"
import Button from "components/ui/button"
import TemplateSkeletonLoading from "components/template-skeleton-loading"

import { dashboardColumns } from "contants/table-columns"
import styles from './file-manager.module.scss'
import commons from "assests/common.module.scss"
import blankItem from "assests/images/get-started.svg"
import tables from "./table.module.scss"

const FileManager = props => {
  const { list, firstRender } = props
  const recentTemplates = props.recentTemplates || []
  const listTemplate = list.filter(i => i.type === "template")
  const listFolder = list.filter(i => i.type === "folder")
  console.log(listTemplate)
  console.log(listFolder)
  return (
    <React.Fragment>
      <Toolbar>
        <div className={commons.breadcrumb}>
          Template List
        </div>
        <div className={commons.toolbarContainer}>
          <div className={commons.pageDetail}>
            Let's drop the template image before filling in
          </div>
          <div className={commons.tools}>
            <IconMoon icon="question" size={25}/>
            <span className={commons.verticalLine}></span>
            <Button className={styles.toolButton} type="default" icon="check">Create Task</Button>
            <span className={commons.verticalLine}></span>
            <Button className={cx(styles.toolButton, commons.marginLeftNone)} type="default" icon="documents" disabled>Duplicate</Button>
            <Button className={styles.toolButton} type="default" icon="trash" disabled>Delete</Button>
            <Button className={styles.toolButton} type="primary" icon="plus">Create New</Button>
          </div>
        </div>
      </Toolbar>
      <div className={commons.mainContent}>
        {firstRender && (<TemplateSkeletonLoading />)}
        {!isEmpty(recentTemplates) && (
          <div className={styles.recentContainer}>
            <div className={cx(styles.containerHeader, styles.recentHeader)}>
              <h2>Recent Items</h2>
              <Button onClick={() => props.setIsItemMode(!props.isItemMode)} height={24} iconSize={20} icon={props.isItemMode ? "list-thumb" : "list"} type="default" noneResize={true}>View mode</Button>
            </div>
            <div className={styles.containerItems}>
              {recentTemplates.map((item, idx) => (
                <div onDoubleClick={() => console.log('db')}  key={idx} className={styles.item}>
                  <Template item={item}/>
                </div>
              ))}
            </div>
          </div>
        )}
        {
          !isEmpty(listTemplate) && !isEmpty(listFolder) && props.isItemMode && (
            <React.Fragment>
            <div className={styles.foldersContainer}>
            <div className={styles.containerHeader}>
            <h2>Folders</h2>
            </div>
            <div className={styles.containerItems}>
            {!isEmpty(listFolder) && listFolder.map((item, idx) => (
              <div className={styles.item} key={idx}>
              <Folder item={item}/>
              </div>
              ))}
              </div>
              </div>
              <div className={styles.templateContainer}>
              <div className={styles.containerHeader}>
              <h2>Templates</h2>
              </div>
              <div className={styles.containerItems}>
              {!isEmpty(listTemplate) && listTemplate.map((item, idx) => (
                <div className={styles.item} key={idx}>
                <Template item={item}/>
                </div>
                ))}
                </div>
                </div>
                </React.Fragment>
                )
              }
        {!props.isItemMode && <Table dataSource={[...listFolder, ...listTemplate]} rowKey="id" columns={dashboardColumns} />}
        {!firstRender && isEmpty(list) && isEmpty(recentTemplates) && (
          <div className={styles.blankzone}>
            <img src={blankItem} alt="blank templates" width="300px"/>
            <h2>Create Template</h2>
            <h2>Upload document for template creation</h2>
            <Button icon="upload" type="primary" noneResize>Upload</Button>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default compose(
  withState("isItemMode", "setIsItemMode", true)
)
(FileManager)
