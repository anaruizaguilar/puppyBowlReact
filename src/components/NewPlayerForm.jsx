import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPlayerForm() {

    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, breed, status, imageUrl })
            });
            const result = await response.json();
            console.log(result);
        } catch(error) {
            console.error(setError);
        }
        setName("");
        setBreed("");
        setStatus("");
        setImageUrl("");
        navigate("/");
    }

    return (
    <div className="new-player-form">
        <h1>New Player Form</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Name: {""} <input value={name} onChange={(e) => {setName(e.target.value);}} />
            </label>
            <label>
                Breed: {""} <input value={breed} onChange={(e) => {setBreed(e.target.value);}} />
            </label>
            <label>
                Status: {""} <input value={status} onChange={(e) => {setStatus(e.target.value);}} />
            </label>
            <label>
                Image: {""} <input value={imageUrl} onChange={(e) => {setImageUrl(e.target.value);}} />
            </label>
            <button className="add-player-button" type="submit">Submit</button>
        </form>
    </div>
    );
}

export default NewPlayerForm;