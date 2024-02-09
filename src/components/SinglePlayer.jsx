import { fetchSinglePlayer } from "../API";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function SinglePlayer() {

  const [player, setPlayer] = useState();

  useEffect(() => {
      async function singlePlayer() {
          try{
              const onePlayer = await fetchSinglePlayer();
              console.log(onePlayer);
              setPlayer(onePlayer);
          } catch (error) {
              console.error(error);
          }
      }
      singlePlayer();
  }, [])

  const navigate = useNavigate();
  const { id } = useParams();

    return (
    <div key={id} className="single-player">
        {console.log(player)}
        {/* <button className="return-button" onClick={() => navigate('/')}>X</button> */}
    </div>
    );
}

export default SinglePlayer;