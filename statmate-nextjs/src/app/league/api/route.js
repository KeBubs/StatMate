import { fetchStandings } from "@/functions/helpers"

// Where the requests will be made to load the data for the league pages.
//    This GET function currently gets the right Data for the Premier League Standings.
export async function GET(request, { params }){
    const code = 'PL'
    const response = await fetchStandings(code)
    console.log(response.standings)
    return Response.json(response.standings[0].table)
}