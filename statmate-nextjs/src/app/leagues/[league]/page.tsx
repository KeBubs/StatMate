import Styles from './styles.module.css'
import LeaderBoard from '../../../components/League/leaderboard'
export const revalidate = 30
import { fetchStandings } from '@/functions/helpers'

const League = async ({ params }: {params: {league: string}}) => {

    // Make the fetch Request using the parameter code, return the data.
    //      Pass the data as a prop to the leaderboard component below. 
    const data = await fetchStandings(params.league)
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

