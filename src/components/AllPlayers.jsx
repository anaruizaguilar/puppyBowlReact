import { fetchAllPlayers } from "../API/index";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SinglePlayer from "./SinglePlayer";

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

const navigate = useNavigate();

    return(
    <div className="all-players">
        {
            players.map((player) => {
                return (
                    <section key={player.id} className="cards">             
                            <h2>{player.name}</h2>
                            <h3>{player.breed}</h3>
                            <img src={player.imageUrl} alt="" height="50%" width="50%"/>
                            <h4>{player.status}</h4>
                            <button className="details-button" data-id={player.id} onClick={(e) => {
                                console.log(e.target.dataset.id)
                                }}>Details</button>
                            <button className="delete-button" onClick={() => SinglePlayer}>Remove</button>           
                    </section>
                )
            })
        }
    </div>
    )
}

export default AllPlayers;