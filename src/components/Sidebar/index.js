import React from 'react'
// import PropTypes from 'prop-types'

import styles from './index.module.scss'

const SideBar = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h1>Chat Gyra</h1>
    </div>
    <div className={styles.list}>
      <ul>
        <li>Sala 1</li>
        <li>Sala 2</li>
        <li>Sala 3</li>
      </ul>
    </div>
  </div>
)

// SideBar.propTypes = {
//   children: PropTypes.node,
// }

// SideBar.defaultProps = {
//   children: {},
// }

export default SideBar
