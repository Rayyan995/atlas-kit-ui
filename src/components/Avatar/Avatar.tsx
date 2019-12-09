import React, { useState } from 'react';
import Avatar, { AvatarItem } from '@atlaskit/avatar';

import Screen from '../UI/Screen/Screen'

function getPresence() {
    const chance = Math.random();
    switch (true) {
        case chance > 0.5 && chance < 0.8:
            return 'focus';
        case chance < 0.25:
            return 'busy';
        case chance < 0.5:
            return 'online';
        default:
            return 'offline';
    }
}

const RANDOM_USERS = [
    {
        name: "Ahmed Ali",
        id: "@a_ali"
    },
    {
        name: "Will Smith",
        id: "@wSmith"
    },
    {
        name: "Ayman Amin",
        id: "@amin99"
    },
    {
        name: "Mohamed Ahmed",
        id: "@m_ahm"
    },
    {
        name: "Joe Clinton",
        id: "@clinton"
    },
    {
        name: "Ibrahim AlRayyan",
        id: "@rayyan995"
    },
    {
        name: "Ahmed Tarek",
        id: "@a_tarek"
    },
]

const Avatar_: React.FC = () => {
    const [user, setUser] = useState("...")
    const data = RANDOM_USERS
    return (
        <div style={{ maxWidth: "94%" }}>
            <Screen text={"You clicked on " + user} />

            {data.map(user => (
                <AvatarItem
                    avatar={<Avatar src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" presence={getPresence()} />}
                    key={user.id}
                    onClick={() => { console.log(user); setUser(user.name) }}
                    primaryText={user.name}
                    secondaryText={user.id}
                />
            ))}
        </div>
    );
};

export default Avatar_