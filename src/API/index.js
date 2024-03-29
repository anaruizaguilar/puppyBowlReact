

export async function fetchAllPlayers() {
    try{
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players`);
        const result = await response.json();
        return result.data.players;
    } catch (err) {
        console.error('Trouble fetching players', err);
    }
}

export async function fetchSinglePlayer(id) {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players/${id}`);
        const data = await response.json();
        return data.data.player;
    } catch (err) {
        console.error(`Trouble fetching player`, err);
    }
}

export async function deletePlayer(id) {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players/${id}`, {
            method: 'DELETE',
        });
        await response.json();
        fetchAllPlayers();
    } catch (err) {
        console.error(`Trouble removing player`, err);
    }
}