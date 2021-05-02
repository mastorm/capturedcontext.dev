import React, { FC } from 'react'
import styles from '../styles/components/Logo.module.css'

export const Logo: FC = () => {
  return (
    <a href="/">
      <span className={styles.headline}>CapturedContext</span>
      .dev
    </a>
  )
}
