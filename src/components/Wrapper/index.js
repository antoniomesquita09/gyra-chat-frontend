import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const Wrapper = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.header} />
    <div className={styles.content}>{children}</div>
  </div>
)

Wrapper.propTypes = {
  children: PropTypes.node,
}

Wrapper.defaultProps = {
  children: {},
}

export default Wrapper
