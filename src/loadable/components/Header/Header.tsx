import React from 'react'
import styles from './Header.module.css'
import classNames from 'classnames'

export interface HeaderModel {
    readonly title: string
}

export interface Props {
    readonly data: HeaderModel
    readonly className?: string
}

const Header: React.FC<Props> = ({data, className}) => {
    return (
        <div className={classNames(styles.base, className)}>{data.title}</div>
    )
}

export default Header
