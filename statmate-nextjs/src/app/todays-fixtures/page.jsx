import Header from '../../components/Header/header'
import Styles from './todays-fixtures.module.css'
import { fetchMatches } from '../../functions/helpers'
// @refresh reset

// Import URL from .env file
const todaysMatches = process.env.TODAYS_MATCHES
const authToken = process.env.API_KEY




export default async function TodaysFixtures () {
    const Data = await fetchMatches(todaysMatches, authToken)
    const matches = Data.matches
    
    return (
        <>
        <Header/>
        <main className={Styles.mainContainer}>
            <div className={Styles.container}>
            {matches.map((match, index) => {
                const timeRegex = /T(\d{2}:\d{2}:\d{2})Z/;
                const matchTime = match.utcDate.match(timeRegex);
                const time = matchTime ? matchTime[1] : '';

                return (
                    <section key={index} className={Styles.fixture}>
                        <img className={Styles.crest} src={match.homeTeam.crest} alt={`Home Team Crest`} />
                        <p>{`${match.homeTeam.name}`}</p>
                        {match.score.fullTime.home == (typeof(number)) ? 
                        ( 
                        <>
                            <p>{match.score.fullTime.home}</p>
                            <p>{match.score.fullTime.away}</p>
                        </>
                        )
                        : 
                        (
                        <>
                            <p>{time}</p>
                        </>
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

/*

<h1>This is the Todays Fixtures Page</h1>
        <div>
            <p>The Home Team is {homeTeamName}</p>
            <p>The Away Team is {awayTeamName}</p>
        </div>

*/