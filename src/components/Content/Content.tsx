import React from 'react';

import classes from './Content.module.css';

type contentProps = {
    children: React.ReactNode
}
const Content = (props: contentProps) => {
    return (
        <div className={classes.Container} >
            {props.children}
        </div>
    )
}


export default Content
