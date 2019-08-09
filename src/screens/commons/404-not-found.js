import React from 'react'
import { Button } from 'antd'
import { compose } from 'recompose'
import { withTranslation } from 'react-i18next';

import styles from './style.module.css'

import logo from '../../assests/images/logo.svg'
import image404 from '../../assests/images/404.png'

export default compose(
  withTranslation('not found')
)(props => (
  <div className={styles.mainNotFound}>
    <img className={styles.logo} alt="Logo" src={logo} />
    <img className={styles.notFoundImg} alt="404 not found" src={image404} />
    <div className={styles.textNotFound}>{props.t('text not found')}</div>
    <Button>{props.t('btn redirect')}</Button>
  </div>
  )
)
