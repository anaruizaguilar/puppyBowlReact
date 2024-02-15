import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../API";

function SinglePlayer() {
  
  const [player, setPlayer] = useState();

  useEffect(() => {
      async function singlePlayer() {
          try{
            const selectedPlayer = await fetchSinglePlayer(id);
            const data = await selectedPlayer.json();
            setPlayer(data.data.plalyer);
          } catch (error) {
              console.error(error);
          }
      }
      singlePlayer();
  }, [])

 // const navigate = useNavigate();
 const { id } = useParams();

    return (
    <div key={id} className="single-player">
        
        {/* <button className="return-button" onClick={() => navigate('/')}>X</button> */}
    </div>
    );
}

export default SinglePlayer;