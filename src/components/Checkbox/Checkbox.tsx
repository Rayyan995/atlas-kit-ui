import React, { PureComponent } from 'react';
import Button from '@atlaskit/button';
import { Checkbox } from '@atlaskit/checkbox';

import Screen from '../UI/Screen/Screen';

type colorsTypeState = {
    [title_: string]: {
        label: string,
        value: string,
        name: string,
        checked: boolean,
    }
}

type stateType = {
    checkboxes: colorsTypeState,
    onChangeResult: string
}
type colorsTypeArr = {
    label: string,
    value: string,
    name: string,
    checked: boolean,
}

export default class CheckboxGroup extends PureComponent<any, stateType> {

    state = {
        checkboxes: {
            red: {
                label: "Red Color",
                value: "red",
                name: "redColor",
                checked: false
            },
            green: {
                label: "Green Color",
                value: "green",
                name: "greenColor",
                checked: false
            },
            blue: {
                label: "Blue Color",
                value: "blue",
                name: "blueColor",
                checked: false
            },
            white: {
                label: "White Color",
                value: "white",
                name: "whiteColor",
                checked: false
            }
        },
        onChangeResult: '...'
    }

    onChange = (event: any) => {
        let key = event.target.value;
        let checked = event.target.checked

        const checkboxes = { ...this.state.checkboxes };
        const checkbox = { ...(checkboxes as any)[key] };
        checkbox["checked"] = checked;
        (checkboxes as any)[key] =  checkbox;       
        this.setState({
            onChangeResult: ` ${key} isChecked: ${checked}`,
            checkboxes: checkboxes
        });
    };

    onSubmitHandler = () => {
        let colors: string[] = []
        for (const color in this.state.checkboxes) {
            const colorState = { ...(this.state.checkboxes as any) }[color];
            if(colorState.checked) {
                colors.push(colorState.label)
            }
        }
        alert("You checked: " + colors.toString().replace(/,/g, " - "));
    }

    render() {
        let colors: colorsTypeArr[] = []
        for (const color in this.state.checkboxes) {
            colors.push({ ...(this.state.checkboxes as any) }[color])
        }

        return (
            <div>
                <Screen text={this.state.onChangeResult} />
                {
                    colors.map(checkbox_ => (
                        <Checkbox
                            onChange={this.onChange}
                            defaultChecked={checkbox_.checked}
                            key={checkbox_.name}
                            label={checkbox_.label}
                            value={checkbox_.value}
                            name={checkbox_.name} />
                    ))
                }
                <Button onClick={this.onSubmitHandler} appearance="primary">Submit</Button>
            </div>
        );
    }
}