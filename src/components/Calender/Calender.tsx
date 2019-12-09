import React, { useState } from 'react';
import Calendar from '@atlaskit/calendar';

import Screen from '../UI/Screen/Screen';

const Calender_: React.FC = () => {
    const [date, setDate] = useState("...")
    return (
        <React.Fragment>
            <Screen text={"You Selected date of : " + date} />

            <Calendar
                defaultDisabled={['2020-12-04']}
                defaultPreviouslySelected={['2020-12-06']}
                defaultSelected={['2020-12-08']}
                defaultMonth={12}
                defaultYear={2020}
                today='2020-12-17'
                day={22}
                innerProps={{
                    style: {
                        border: '1px solid red',
                        display: 'inline-block',
                    },
                }}
                onBlur={() => console.log('blur')}
                onChange={() => console.log('change')}
                onFocus={() => console.log('focus')}
                onSelect={(e) => setDate(e.iso)}
                testId={'calendar'}
            />
        </React.Fragment>
    )
};

export default Calender_;