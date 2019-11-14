import React from 'react'
import styles from './LoadableComponent.module.css'
import className from 'classnames'
import {LoadableIds} from '../../constants/loadable'
import loadable from '@loadable/component'

export interface Props {
    readonly id: LoadableIds
    readonly className?: string
}

export const LoadableComponent: React.FC<Props> = ({id, ...rest}) => {
    const Component = loadable(() => import(/* webpackChunkName: "loadable/component_" */`../../loadable/components/${id}/${id}`))
    if (Component) {
        // @ts-ignore
        return <Component {...rest} data={window.submodels[id]}/>
    } else {
        return <div className={className(styles.base, styles.bad)}>Not component with id: {id}</div>
    }
}
