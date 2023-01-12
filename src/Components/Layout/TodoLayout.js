import React from 'react'
import classes from './TodoLayout.module.css'
export default function TodoLayout() {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}
