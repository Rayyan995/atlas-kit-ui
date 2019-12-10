/** @jsx jsx */

import { jsx } from '@emotion/core';
import { Component, SyntheticEvent } from 'react';
import Button from '@atlaskit/button';
import Drawer from '@atlaskit/drawer';

import SideBar from '../SideBar/SideBar';

interface State {
    isDrawerOpen: boolean;
}

type myProps = {
    onClick: (clickedBar: string) => void
}

export default class DrawersExample extends Component<myProps, State> {
    state = {
        isDrawerOpen: false,
    };

    openDrawer = () =>
        this.setState({
            isDrawerOpen: true,
        });

    onClose = (...args: [SyntheticEvent<HTMLElement>, any]) => {
        console.log('onClose', args);
        this.setState({
            isDrawerOpen: false,
        });
    };

    onCloseComplete = (...args: [HTMLElement]) =>
        console.log('onCloseComplete', args);

    onOpenComplete = (...args: [HTMLElement]) =>
        console.log('onOpenComplete', args);

    render() {
        return (
            <div css={{ padding: '2rem' }}>
                <Drawer
                    onClose={this.onClose}
                    onCloseComplete={this.onCloseComplete}
                    onOpenComplete={this.onOpenComplete}
                    isOpen={this.state.isDrawerOpen}
                    width="wide">

                    <SideBar onClick={this.props.onClick} drawer={true} />

                </Drawer>
                <Button
                    id="open-drawer" type="button"
                    appearance="primary"
                    onClick={this.openDrawer}>
                    Open drawer</Button>
            </div>
        );
    }
}