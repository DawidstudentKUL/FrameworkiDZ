import {useState} from "react";

function Games() {
    let [games, setGames] = useState(true);
    let gamesText = 'Kliknij w przycisk aby pokazać link platformy z grami';

    return (
        <div>
            <h2>{gamesText}</h2>
            {games ?
                <button onClick={() => {setGames(!games)}}>Wyswietl link</button> : <>
                <button onClick={() => {setGames(!games)}}>Schowaj Link</button>
                    <p><a href="https://store.steampowered.com/">Platforma z grami</a></p>
                </>
            }
        </div>
    )
}

export default Games;