import React from "react"
import { times } from "lodash"

import styles from "./template-skeleton-loading.module.scss"

const TemplateSkeletonLoading = () => {
  const arr = [0,1,2,3,4,5,6,7,8,9]
  return (
    <div className={styles.templateContainer}>
      <div className={styles.containerHeaderLoading}>
        <h2></h2>
      </div>
      <div className={styles.containerItemsLoading}>
        {arr.map(i => (
          <div key={i} className={styles.itemLoading}>
            <div className={styles.templateContainerLoading}>
              <div className={styles.templateItemLoading}>
                <div className={styles.imageContainerLoading}>
                  <div className={styles.imageContentLoading}></div>
                </div>
                <div className={styles.footerContainerLoading}>
                  <div className={styles.iconLoading}></div>
                  <div className={styles.templateTitleLoading}>
                    <div className={styles.templateNameLoading}></div>
                    <div className={styles.templateAuthorLoading}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TemplateSkeletonLoading
