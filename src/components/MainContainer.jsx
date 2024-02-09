import AllPlayers from "./AllPlayers";
import NewPlayerForm from "./NewPlayerForm";
import SinglePlayer from "./SinglePlayer";
import { Routes, Route } from "react-router-dom";

function MainContainer() {
    return(
        <div id="main-container">
            <Routes>
                <Route path='/' element={<AllPlayers />}></Route>
                <Route path='/newplayerform' element={<NewPlayerForm />}></Route>
                <Route path='/players/:id' element={<SinglePlayer />}></Route>
            </Routes>
        </div>
    );
}

export default MainContainer;