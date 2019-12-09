import React from 'react';
import styled from 'styled-components';
import Button from '@atlaskit/button';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import Banner from '@atlaskit/banner';

import classes from './Banner.module.css'

interface ItemProps {
    isOpen: boolean;
}

const Icon = <WarningIcon label="Warning icon" secondaryColor="inherit" />;

const WarningBanner = ({ isOpen }: { isOpen: boolean }) => (
    <Banner  icon={Icon} isOpen={true} appearance="warning">
        This is a warning banner
  </Banner>
);

export default class ToggleBanner extends React.Component<
    {},
    { isOpen: boolean }
    > {
    state = { isOpen: false };

    toggleBanner = () => this.setState(state => ({ isOpen: !state.isOpen }));

    render() {
        const { isOpen } = this.state;

        let class_ = classes.Container;
        const style_ = classes.OnClickStyle;
        if(this.state.isOpen) {
            class_ = class_ + " " + style_;
        }

        return (
            <div className={class_} >
                <p onClick={this.toggleBanner} >{isOpen ? "Close" : "Open"}</p>
                <WarningBanner isOpen={isOpen} />

                <Banner icon={Icon} isOpen={true} appearance="warning">
                    This is a warning banner
                </Banner>
            </div>
        );
    }
}