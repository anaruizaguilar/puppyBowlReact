import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../API";

function SinglePlayer() {
  
 
  const [player, setPlayer] = useState([]);

  useEffect(() => {
      async function singlePlayer() {
          try{
            const selectedPlayer = await fetchSinglePlayer(id);
            setPlayer(selectedPlayer);
          } catch (error) {
              console.error(error);
          }
      }
      singlePlayer();
  }, [])

const { id } = useParams();
const navigate = useNavigate();
 

    return (
    <div key={id} className="single-player">
        <button className="return-button" onClick={() => navigate('/')}>X</button> 
        <h1>{player.name}</h1>
        <img src={player.imageUrl} alt="" width="50%" height="50%"/>
        <p>{player.breed}</p>
        <p>{player.status}</p>
    </div>
    );
}

export default SinglePlayer;