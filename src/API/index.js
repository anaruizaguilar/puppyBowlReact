
export async function fetchAllPlayers() {
    try{
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players`);
        const result = await response.json();
        console.log(result.data.players);
        return result.data.players;
    } catch (err) {
        console.error('Trouble fetching players', err);
    }
}