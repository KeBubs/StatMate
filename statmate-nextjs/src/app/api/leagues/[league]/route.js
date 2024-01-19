import { fetchStandings } from "@/functions/helpers"
import { NextResponse } from "next/server"

// Where the requests will be made to load the data for the league pages.
//    This GET function currently gets the right Data for the Premier League Standings.
export async function GET(request, { params }){
    const code = params.league.toUpperCase()
    console.log(code)
    const response = await fetchStandings(`${code}`)
    // const data = response.json()
    const table = response.standings[0].table
    console.log('Im in the router, printing the table', table)
    return new Response(table)
}

// Currently console logs the correct data however on the browser or when being passed to a component it appears maybe serialised?
//          Shows format [object] [Object]...