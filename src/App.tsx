import React from 'react'
import './App.module.css'
import {LoadableComponent} from './components/Loadable/LoadableComponent'
import {LoadableIds} from './constants/loadable'
import styles from './App.module.css'


const App: React.FC = () => {
    return (
        <div className={styles.base}>
            <LoadableComponent className={styles.header} id={LoadableIds.HEADER}/>
            <div className={styles.middle}/>
            <LoadableComponent className={styles.footer} id={LoadableIds.FOOTER}/>
        </div>
    )
}

export default App
