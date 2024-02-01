import Styles from './styles.module.css'
import LeaderBoard from '../../../components/League/leaderboard'
import { fetchStandings } from '@/functions/helpers'
import 'dotenv/config'
const token: string | undefined = process.env.NEXT_PUBLIC_API_KEY

const League = async ({ params }: {params: {league: string}}) => {


const url = `https://api.football-data.org/v4/competitions/${params.league}/standings?season=2023`
    // Make the fetch Request using the parameter code, return the data.
    //      Pass the data as a prop to the leaderboard component below. 

    const response = await fetch(url, {
        method: "GET",
        next: { revalidate: 30},
        headers: new Headers({
                "X-Auth-Token": token ? token : ""
            })
    })
    const data: JSON  = await response.json()


    let leagueName: string = ""

    switch(params.league){
        case 'PL':
            leagueName = 'the Premier League';
            break
        case 'BL1':
            leagueName = 'the Bundesliga'
            break;
        case 'PD':
            leagueName = 'La Liga (Primera Division)'
            break;
        case 'FL1':
            leagueName = 'Ligue 1'
            break;
        case 'SA':
            leagueName = 'Serie A'
            break
    }


    return (

        <>
        
        <main className={Styles.mainContainer}>
            <section className={Styles.title}>
                
            <h1 >League Standings for {leagueName} </h1>
            </section>
            <section className={Styles.leaderboardContainer}>
                <LeaderBoard value={data}/>
            </section>
        </main>

            
        </>
    )
}

export default League

