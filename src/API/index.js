const cohortName = '2308-ACC-ET-WEB-PT-A';
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export async function fetchAllPlayers() {
    try{
        const response = await fetch(API_URL);
        const result = await response.json();
        console.log(result.data.players);
        return result.data.players;
    } catch (err) {
        console.error('Trouble fetching players', err);
    }
}