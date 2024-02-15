import { fetchAllPlayers, fetchSinglePlayer } from "../API/index";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


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
                            <img src={player.imageUrl} alt="" height="40%" width="40%"/>
                            <button className="details-button" data-id={player.id} onClick={(e) => {
                                const id = e.target.dataset.id;
                                fetchSinglePlayer(id);
                                navigate(`/players/${player.id}`);
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