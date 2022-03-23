import React, { MouseEventHandler } from 'react'
import styles from './UIButton.module.css'

type ButtonProps = { label?: string, onClick?: MouseEventHandler }

const UIButton = ({ label, onClick }: ButtonProps) => {
    return <button className={styles.btn} onClick={onClick}>{label}</button>
}

export default UIButton