import React from 'react';
import Tabs from '@atlaskit/tabs';

import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Flag from '../Flag/Flag';
import Calender from '../Calender/Calender';

const tabs = [
    { label: 'Tab 1', content: <div><Button /></div> },
    { label: 'Tab 2', content: <div><Checkbox /></div> },
    { label: 'Tab 3', content: <div><Flag /></div> },
    { label: 'Tab 4', content: <div><Calender /></div> },
];

export default () => (
    <Tabs
        tabs={tabs}
        onSelect={(_tab, index) => console.log('Selected Tab', index + 1)}
    />
);