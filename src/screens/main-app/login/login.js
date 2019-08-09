import React from "react"
import { Link } from "react-router-dom"
import { compose } from "recompose";
import { withTranslation } from "react-i18next";

import { Input, Button } from "../../../components/ui"

import styles from './style.module.scss'

import miniLogo from "../../../assests/images/logo.svg"

const Login = props => {
  return (
    <div className={styles.mainLogin}>
      <div className={styles.banner}>
        <Link to="/">
          <img className={styles.miniLogo} alt="mini logo" src={miniLogo} />
        </Link>
        <div className={styles.rightContent}>
          <h1 className={styles.h1}>最新の人工知能で</h1>
          <h1 className={styles.h1}>手書き文字をデータ化</h1>
          <h3 className={styles.h3}>形にばらつきのある手書き文字でも認識可能 90%以上の精度でデータ化</h3>
        </div>
      </div>
      <div className={styles.formLogin}>
        <div className={styles.mainForm}>
          <h2 className={styles.h1}>Login</h2>
          <Input placeholder="User ID / Email" className={styles.inputField} />
          <Input placeholder="Password" className={styles.inputField} />
          <Button className={styles.button} type="primary" size="large">{props.t("btn submit")}</Button>
          <Link to="/forgot">{props.t("forgot password")}</Link>
        </div>
        <p className={styles.footer}>Cosplay by Sun Thị Inc, All rights reserved</p>
      </div>
    </div>
  )
}

export default compose(
  withTranslation("login")
)(Login)
