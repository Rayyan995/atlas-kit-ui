import React from 'react';

import classes from './Screens.module.css';

type MyProps = {
    text: string
}
const Screen: React.FC<MyProps> = (props) => {
    return (
        <p className={classes.Paragraph} >{props.text}</p>
    )
}

export default Screen
