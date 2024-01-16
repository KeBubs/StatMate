// Do I need to import .env file?
import 'dotenv/config'

export async function fetchMatches(url: string, token: string) {
    const response = await fetch(url, {
    headers: {
        "X-Auth-Token": token
    }
})
const todaysData: JSON  = await response.json()
console.log(todaysData)
return todaysData;
}