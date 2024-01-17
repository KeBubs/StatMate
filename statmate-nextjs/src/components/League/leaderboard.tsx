import Styles from './leaderboard.module.css'



interface LeaderboardItem {
    position: number,
    team: {
        name: string,
        crest: string
    }
        playedGames: number,
        form: string,
        won: number,
        draw: number,
        lost: number,
        points: number,
        goalsFor: number,
        goalsAgainst: number,
        goalDifference: number
}


export default function LeaderBoard({leaderboard}: {leaderboard: object}) {

    

    
    // console.log(leaderboard)
    return (
        <div className={Styles.leaderboard}>
                        <h3>Position</h3>
                        <h3>Team Name</h3>
                        <h3>Played</h3>
                        <h3>Form</h3>
                        <h3>Won</h3>
                        <h3>Drawn</h3>
                        <h3>Lost</h3>
                        <h3>Points</h3>
                        <h3>GF</h3>
                        <h3>GA</h3>
                        <h3>GD</h3>
                        
                        {leaderboard.map((item: LeaderboardItem, index: number) => (
                            // <div className={Styles.teamInfo}>
                            <>
                            <p><b>{item.position}</b></p>
                                <p>{item.team.name}</p>
                                <p>{item.playedGames}</p>
                                <p>{item.form}</p>
                                <p>{item.won}</p>
                                <p>{item.draw}</p>
                                <p>{item.lost}</p>
                                <p>{item.points}</p>
                                <p className={Styles.GF}>{item.goalsFor}</p>
                                <p className={Styles.GA}>{item.goalsAgainst}</p>
                                <p className={Styles.GD}>{item.goalDifference}</p>
                            </>  
                            // </div>
                            
                        ))}
        </div>
    )
}