import React from 'react';

import classes from './SideBar.module.css';

type myProps = {
    onClick: (clickedBar: string) => void
}

const SIDEBAR_ITEMS = ["avatar", "blanket", "button", "calender", "checkbox"]

const SideBar: React.FC<myProps> = (props) => {
    return (
        <div className={classes.Container} >
            {
                SIDEBAR_ITEMS.map(item => (
                    <p
                        key={item}
                        onClick={() => props.onClick(item)}
                        className={classes.Par} >{item} example</p>
                ))
            }
        </div>
    )
}

export default SideBar;
