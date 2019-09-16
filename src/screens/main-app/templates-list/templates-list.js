import React from "react"
import cx from "classnames"
import { connect } from "react-redux"
import { compose, lifecycle } from "recompose"
import { isEmpty } from "lodash"
import { withTranslation } from "react-i18next"

import { dashboardSelector } from "selectors/dashbroad-selector"
import { getDashboardAction } from "actions/dashboard-action"

import IconMoon from "components/ui/iconmoon"
import Button from "components/ui/button"
import Navigation from "../../../components/navigation"
import Toolbar from "../../../components/layouts/toolbar"
import Template from "components/template"
import Folder from "components/folder"

import styles from './templates-list.module.scss'
import commons from "assests/common.module.scss"
import blankItem from "assests/images/get-started.svg"

const TemplateList = (props) => {
  return (
    <React.Fragment>
      <Navigation />
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
      <div className={styles.content}>
        {!isEmpty(props.recent_templates) && (
          <div className={styles.recentContainer}>
            <div className={cx(styles.containerHeader, styles.recentHeader)}>
              <h2>Recent Items</h2>
              <Button height={24} iconSize={20} icon="list" type="default" noneResize={true}>View mode</Button>
            </div>
            <div className={styles.containerItems}>
              {props.recent_templates.map((item, idx) => (
                <div key={idx} className={styles.item}>
                  <Template data={item}/>
                </div>
              ))}
            </div>
          </div>
        )}
        {
          !isEmpty(props.list) && (
            <React.Fragment>
              <div className={styles.foldersContainer}>
                <div className={styles.containerHeader}>
                  <h2>Folders</h2>
                </div>
                <div className={styles.containerItems}>
                  <div className={styles.item}>
                    <Folder />
                  </div>
                  <div className={styles.item}>
                    <Folder />
                  </div>
                  <div className={styles.item}>
                    <Folder />
                  </div>
                  <div className={styles.item}>
                    <Folder />
                  </div>
                  <div className={styles.item}>
                    <Folder />
                  </div>
                  <div className={styles.item}>
                    <Folder />
                  </div>
                </div>
              </div>
              <div className={styles.templateContainer}>
                <div className={styles.containerHeader}>
                  <h2>Templates</h2>
                </div>
                <div className={styles.containerItems}>
                <div className={styles.item}>
                    <Template />
                  </div>
                  <div className={styles.item}>
                    <Template />
                  </div>
                  <div className={styles.item}>
                    <Template />
                  </div>
                  <div className={styles.item}>
                    <Template />
                  </div>
                  <div className={styles.item}>
                    <Template />
                  </div>
                  <div className={styles.item}>
                    <Template />
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        }
        {isEmpty(props.list) && isEmpty(props.recent_templates) && (
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
  withTranslation("dashboard"),
  connect(dashboardSelector, { getDashboardAction }),
  lifecycle({
    componentDidMount() {
      this.props.getDashboardAction()
    }
  })
)(TemplateList)
