/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Button, { ButtonAppearances } from '@atlaskit/button';

import Screen from '../UI/Screen/Screen';

const appearances: ButtonAppearances[] = [
    'default',
    'primary',
    'link',
    'subtle',
    'subtle-link',
    'warning',
    'danger',
];

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export type State = {
    showLoadingState: boolean;
    clicked: string;
};

export default class ButtonAppearance extends React.Component<{}, State> {
    state = {
        showLoadingState: false,
        clicked: "..."
    };

    btnClickHandler = (name: string) => {
        this.setState({ clicked: name })
    }

    render() {
        const { clicked, showLoadingState } = this.state;

        return (
            <React.Fragment>
                <Screen text={"You clicked on: " +  clicked} />
                {
                    appearances.map(appear => (
                        <Button
                            onClick={() => this.btnClickHandler(appear)}
                            key={appear}
                            style={{ margin: 8 }}
                            isLoading={showLoadingState}
                            appearance={appear}>
                            {capitalize(appear)}
                        </Button>
                    ))
                }
            </React.Fragment>
        );
    }
}