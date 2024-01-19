import Styles from './styles.module.css'
import LeaderBoard from '../../../components/League/leaderboard'
import { fetchStandings } from '@/functions/helpers'

const League = async ({ params }: {params: {league: string}}) => {

    // Make the fetch Request using the parameter code, return the data.
    //      Pass the data as a prop to the leaderboard component below. 
    const data = await fetchStandings(params.league)

    


    return (

        <>
        
        <main className={Styles.mainContainer}>
            <section className={Styles.title}>
                
            <h1 >Welcome to the {params.league} </h1>
            </section>
            <section className={Styles.leaderboardContainer}>
                <LeaderBoard value={data}/>
            </section>
        </main>

            
        </>
    )
}

export default League

