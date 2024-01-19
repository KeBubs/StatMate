import { v4 as uuidv4 } from 'uuid'
import Styles from './styles.module.css'
import LeaderBoard from '../../../components/League/leaderboard'

import { useRouter } from 'next/navigation'
import { fetchStandings } from '@/functions/helpers'

type LeagueProps = {
    id: string
}

const League = async ({ params }: {params: {league: string}}) => {

    

    // let data: {} = {}

    // const fetchData = async () => {
    //     const response = await fetch(`http://localhost/api/leagues/${params.league}`, {
    //         method: "GET",
            
    //     })
    //     const data = await response.json()
    //     console.log('This is the response', response.json())
    // } 

    // await fetchData()
    const data = await fetchStandings(params.league)
    console.log('Printing from the page', data)
    


    return (

        <>
        
        <main className={Styles.mainContainer}>
            <section className={Styles.title}>
                
            <h1 >Welcome to the {params.league} </h1>
            </section>
            <section className={Styles.leaderboardContainer}>
                <LeaderBoard key={uuidv4()} value={data}/>
            </section>
        </main>

            
        </>
    )
}

export default League

