import React from 'react'
import PlayerPageProfile from './Profile';
import { IPeople } from './playerInterfaces';

interface PlayerPageProps {
    player: {
        player: IPeople
    }
}
function PlayerPage({ player: { player } }: PlayerPageProps) {
    return (
        <PlayerPageProfile player={player} />
    )
}

export default PlayerPage;