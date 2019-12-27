import React, { useMemo } from 'react'
import styled, { css } from 'styled-components';
import { IPeople } from './playerInterfaces';
import { smallDesktop } from '../../../lib/viewport';
import { translatePosition, getHeightAndWeightToSI, isHOF, countAwards } from './utils';
import makeEmojiResponsive from '../../../lib/functions/makeEmojiResponsive';

interface ProfileProps { playerId: number }
const Profile = styled.header<ProfileProps>`
    font-size: 20px;
    ${smallDesktop.max(css`
        font-size: 14px;
    `)}
    .sub {
        color: #828282;
    }
    .left {
        display: flex;
        align-items: center;
        
        .profileImage {
            width: 275px;
            height: 275px;
            border-radius: 137.5px;
            background: url(https://securea.mlb.com/mlb/images/players/head_shot/${props => props.playerId}.jpg) no-repeat;
            background-size: cover;
            background-position: center;
            margin-right: 1.5em;
        }
        .personality {
            .team {
                margin: 0;
            }
            .name {
                margin-bottom: 0;
                font-size: 2.5em;
            }
            .info {
                margin: 0;
            }
            .hof {
                margin-bottom: 10px;
            }
        }
    }
`;
const Crown = makeEmojiResponsive('👑', 'crown');
function PlayerPageProfile({ player }: { player: IPeople }) {
    const position = useMemo(() => translatePosition(player.primaryPosition.abbreviation), [player.primaryPosition.abbreviation]);
    const heightAndWeight = useMemo(() => getHeightAndWeightToSI(player.height, player.weight), [player.height, player.weight]);
    const isHof = useMemo(() => isHOF(player.awards), [player.awards]);
    const awards = useMemo(() => countAwards(player.awards), [player.awards]);

    console.log(awards);
    return (
        <Profile playerId={player.id}>
            <div className="left">
                <div className="profileImage" />
                <div className="personality">
                    {isHof && <p className="hof "><Crown /> 명예의 전당 <span className="sub">({isHof.season})</span></p>}
                    <p className="team sub">{player.currentTeam.name}</p>
                    <h1 className="name">{player.fullName}</h1>
                    <p className="info sub">
                        {player.birthDate},&nbsp;
                        {position},&nbsp;
                        {heightAndWeight}
                    </p>
                </div>
            </div>
        </Profile>
    )
}
export default PlayerPageProfile;