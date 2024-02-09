import { fetchAllPlayers } from "../API/index";
import { useState } from "react";
import { useEffect } from "react";

function AllPlayers() {

const [players, setPlayers] = useState([]);

useEffect(() => {
    async function fetchPlayers () {
        try{
            const allPlayers = await fetchAllPlayers();
            setPlayers(allPlayers);
        } catch (error) {
            console.error(error);
        }
    }
    fetchPlayers();
}, [])

    return(
    <div className="all-players">
        <h2>All Players</h2>
        {
            players.map((player) => {
                return (
                    <div key={player.id}>
                        <li >
                            <h3>{player.name}</h3>
                            <h4>{player.breed}</h4>
                            <img src={player.imageUrl} alt="" />
                            <p>{player.status}</p>
                        </li>
                    </div>
                )
            })
        }
    </div>
    )
}

export default AllPlayers;