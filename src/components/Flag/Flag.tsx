import React, { ReactElement } from 'react';
import Info from '@atlaskit/icon/glyph/info';
import Tick from '@atlaskit/icon/glyph/check-circle';
import { colors } from '@atlaskit/theme';
import Flag from '@atlaskit/flag';
import { AppearanceTypes } from '@atlaskit/flag/types';

const actions = [
    { content: 'Understood', onClick: () => alert("Understood clicked!") },
    { content: 'No Way!', onClick: () => alert("No Way clicked!") },
];
const appearances: { [key: string]: { description: string; title: string } } = {
    error: {
        description: 'You need to take action, something has gone terribly wrong!',
        title: 'Uh oh!',
    },
    info: {
        description:
            "This alert needs your attention, but it's not super important.",
        title: 'Hey, did you know...',
    },
};

const iconMap = (key: string) => {
    const icons: { [key: string]: ReactElement } = {
        info: <Info label="Info icon" secondaryColor={colors.N500} />,
        success: <Tick label="Success" secondaryColor={colors.G400} />,
    };

    return key ? icons[key] : icons;
};

const getIcon = (key: string) => {
    return iconMap(key) as ReactElement;
};

export default () => {

    return (
        <div>
            {Object.keys(appearances).map((type, idx) => (
                <Flag
                    actions={actions}
                    appearance={type as AppearanceTypes}
                    description={appearances[type].description}
                    icon={getIcon(type)}
                    id={type}
                    isDismissAllowed
                    key={type}
                    title={appearances[type].title}
                />
            ))}
        </div>
    )
};