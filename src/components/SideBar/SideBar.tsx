import React from 'react';

import classes from './SideBar.module.css';

/**
 * progress tracker
 * tooltip
 */

type myProps = {
    onClick: (clickedBar: string) => void,
    drawer: boolean
}

const SIDEBAR_ITEMS = ["avatar", "blanket", "button", "calender", "checkbox",
"drawer","flag", "inlineEdit", "pagination", "tabs", "toggle", "tooltip"]

const SideBar: React.FC<myProps> = (props) => {
    let _class = classes.Container;
    if(props.drawer) {
        _class = classes.Container_withDrawer
    }
    return (
        <div className={_class} >
            {
                SIDEBAR_ITEMS.map(item => (
                    <p
                        key={item}
                        onClick={() => props.onClick(item)}
                        className={classes.Par} >{item}</p>
                ))
            }
        </div>
    )
}

export default SideBar;
