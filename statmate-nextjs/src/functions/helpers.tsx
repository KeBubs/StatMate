// Do I need to import .env file?
import 'dotenv/config'
const token = process.env.API_KEY

// Function to fetch today's matches, requires endpoint URL and Auth Token passed in as an argument
export async function fetchMatches() {
    if (!token) {
        throw new Error('API_KEY is not set');
    }
    console.log(token)
    const url = `https://api.football-data.org/v4/matches`
    const response = await fetch(url, {
    headers: {
        "X-Auth-Token": token
    }
})
const todaysData: JSON  = await response.json()
return todaysData;
}

// Function to fetch League Standings to generate a leaderboard, requires endpoint URL, Auth Token passed in as argument's.
// Assumes the league code has already been appended to the URL.
export async function fetchStandings(code: string | null) {
    if (!token) {
        
        throw new Error('API_KEY is not set');
    }
    console.log(token)
    const url = `https://api.football-data.org/v4/competitions/${code}/standings?season=2023`
    const response = await fetch(url, {
    method: "GET",
    headers: {
        "X-Auth-Token": token
    },
    mode: "cors"
})
console.log(response.headers)
const Data: JSON  = await response.json()
return Data
}