import React from "react"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { compose } from "recompose"
import { withFormik } from "formik"
import { withTranslation } from "react-i18next"
import { Form, Input, Button } from 'antd'

// import { Input, Button } from "../../../components/ui"
import { loginAction } from '../../../actions/auth.action'
import { statusError, tError} from "../../../ultiz/form-ultiz"

import styles from './style.module.scss'

import miniLogo from "../../../assests/images/logo.svg"
import { authValidation } from "../../../models/auth";

const Login = props => {
  const { values, errors, t, handleChange, handleSubmit, handleBlur, touched } = props
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
          <Form onSubmit={handleSubmit}>
            <Form.Item validateStatus={statusError(errors.email, 'email', touched)} help={touched['email'] && tError(errors.email, t)} value={values.email}>
              <Input
                name="email"
                placeholder="User ID / Email"
                className={styles.inputField}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item validateStatus={statusError(errors.password, 'password', touched)} help={touched['password'] && tError(errors.password, t)}>
              <Input.Password
                name="password"
                placeholder="Password"
                className={styles.inputField}
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className={styles.button} type="primary" size="large">{props.t("btn submit")}</Button>
            </Form.Item>
          </Form>
          <Link to="/forgot">{props.t("forgot password")}</Link>
        </div>
        <p className={styles.footer}>Cosplay by Sun Thị Inc, All rights reserved</p>
      </div>
    </div>
  )
}

export default compose(
  withTranslation("login"),
  connect(null, { loginAction }),
  withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    validationSchema: authValidation,
    handleSubmit: (values, { props, setSubmitting, setErrors }) => {
      props.loginAction({ values, meta: { t: props.t, setSubmitting, setErrors }})
    }
  })
)(Login)
