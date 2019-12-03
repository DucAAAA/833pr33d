import React from "react"
import cx from "classnames"
import { connect } from "react-redux"
import { compose, lifecycle } from "recompose"
import Cropper from 'react-cropper'

import { getTemplateAction } from "actions/template-action"
import { templateSelector } from "selectors/template-selector"

import styles from './template-detail.module.scss'
import 'cropperjs/dist/cropper.css'

const TemplateDetail = (props) => {
  const typeRef = React.createRef();
  console.log(typeRef)
  console.log(props.template.image_url.slice(-11))
  return (
    <div style={{height: '100vh'}}>
      <h1>Template detail</h1>
      <div style={{display: 'flex'}}>
        <div style={{width: '40%'}}>
          <Cropper aspectRatio={16 / 9} guides={false} className={styles.copper} guides={true} src={props.template.image_url} dragMode="move" ref={typeRef} viewMode={2}/>
          {/* <img src={props.template.image_url} width="100%" height="100%"/> */}
        </div>
        <div style={{width: '55%'}}>
          right
        </div>
      </div>
    </div>
  )
}

export default compose(
  connect(templateSelector, { getTemplateAction }),
  lifecycle({
    componentDidMount() {
      this.props.getTemplateAction(this.props.params.templateId)
    }
  })
)(TemplateDetail)
