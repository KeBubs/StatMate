import Header from '../../components/Header/header'
import Styles from './todays-fixtures.module.css'
// import { fetchMatches } from '../../functions/helpers'
import 'dotenv/config'
const token = process.env.NEXT_PUBLIC_API_KEY

const url = `https://api.football-data.org/v4/matches`


export default async function TodaysFixtures () {
        const response = await fetch(url, {
        next: { revalidate: 30},
        headers: {
            "X-Auth-Token": token
        }
})
    const todaysData = await response.json()
    
    const matches = todaysData.matches
    
    return (
        <>
        <main className={Styles.mainContainer}>
            <div className={Styles.container}>
            {matches.map((match, index) => {
                const timeRegex = /T(\d{2}:\d{2})/;
                const matchTime = match.utcDate.match(timeRegex)[1];
                const time = matchTime ? matchTime : 'Check Back for the Time';

                return (
                    <section key={index} className={Styles.fixture}>
                        <img className={Styles.crest} src={match.homeTeam.crest} alt={`Home Team Crest`} />
                        <p>{`${match.homeTeam.name}`}</p>
                        {match.status === "TIMED" || "SCHEDULED" ? <p>{matchTime}</p> : 
                            (match.status !== "POSTPONED" && match.status !== "SUSPENDED" && match.status !== "CANCELLED" ? 
                                (
                                    <>
                                        <p>{match.score.fullTime.home} - {match.score.fullTime.away}</p>
                                    </>
                                )
                                : 
                                (
                                    <>
                                        <p>{match.status}</p>
                                    </>
                                )
                            )
                        }                   
                        <p>{match.awayTeam.name}</p>
                        <img className={Styles.crest} src={match.awayTeam.crest} alt={`Away Team Crest`} />
                    </section>
                )
            })}
            </div>
        </main>
        </>
    )
}