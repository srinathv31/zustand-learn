// Source Imports
import React from "react";
import usePlayerStore from "../stores/firstStore";

export default function PlayerList(): JSX.Element {
    const players = usePlayerStore((state) => state.players);

    return(
        <React.Fragment>
            {players.map(player => <p key={player.name}>{player.name}</p>)}
        </React.Fragment>
    );
}
