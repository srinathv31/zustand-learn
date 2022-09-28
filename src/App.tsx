import React, { useState } from "react";
import "./App.css";
import AdjustButton from "./components/adjustButton";
import PlayerList from "./components/playerList";
import usePlayerStore from "./stores/firstStore";

function App() {
    const { bears, increase, players, addPlayer } = usePlayerStore((state) => state);

    const [name, setName] = useState<string>("");

    return (
        <div className="App">
            <h1>Test App</h1>
            <p>Player Selected: </p>
            <h2>Player List</h2>
            <ul>
                {players.map(player => <li  key={player.name}>{player.name} - {player.position} - {player.age}</li>)}
            </ul>
            <h2>Player Count: {bears}</h2>
            <AdjustButton label="Increase" action={increase} value={1}/>
            <button onClick={() => addPlayer({ name: name, age: Math.round(Math.random()*100), position: "C" })}>Add Player</button>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <PlayerList />
        </div>
    );
}

export default App;
