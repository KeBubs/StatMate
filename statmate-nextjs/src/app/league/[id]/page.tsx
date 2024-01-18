import { v4 as uuidv4 } from 'uuid'

import Header from '../../../components/Header/header'
import Styles from './styles.module.css'
import LeaderBoard from '../../../components/League/leaderboard'

import { getStaticProps } from 'next/dist/build/templates/pages'

type LeagueProps = {
    id: string
}

const League = ({ params }: {params: {id: string}}) => {

    return (

        <>
        
        <main className={Styles.mainContainer}>
            <section className={Styles.title}>
                
            <h1 >Welcome... </h1>
            </section>
            <section className={Styles.leaderboardContainer}>
                <LeaderBoard key={uuidv4()} id={params.id}/>
            </section>
        </main>
            
        </>
    )
}

export default League