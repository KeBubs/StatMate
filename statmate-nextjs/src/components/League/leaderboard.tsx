import { useEffect, useState } from 'react'
import Styles from './leaderboard.module.css'
import { v4 as uuidv4 } from 'uuid'
import { fetchStandings } from '../../functions/helpers'



export interface LeaderboardItem {
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

interface LeaderBoardProps{
    id: string;
};

const LeaderBoard: React.FC<LeaderBoardProps> = async ({ id }) => {

    let data: {} = {}

    const fetchData = async () => {
        data = await fetch('http://localhost/league/api')
        console.log(data)
    } 

    fetchData()
    

    return (
        <p>Test</p>
        // <div key={uuidv4()} className={Styles.leaderboard}>
        //                 <h3 key={uuidv4()}>Position</h3>
        //                 <h3 key={uuidv4()}>Team Name</h3>
        //                 <h3 key={uuidv4()}>Played</h3>
        //                 <h3 key={uuidv4()}>Form</h3>
        //                 <h3 key={uuidv4()}>Won</h3>
        //                 <h3 key={uuidv4()}>Drawn</h3>
        //                 <h3 key={uuidv4()}>Lost</h3>
        //                 <h3 key={uuidv4()}>Points</h3>
        //                 <h3 key={uuidv4()}>GF</h3>
        //                 <h3 key={uuidv4()}>GA</h3>
        //                 <h3 key={uuidv4()}>GD</h3>
                        
        //                  {data.map((item: LeaderboardItem, index: number) => (
        //                     <>
        //                     <p key={uuidv4()}><b>{item.position}</b></p>
        //                         <p key={uuidv4()}>{item.team.name}</p>
        //                         <p key={uuidv4()}>{item.playedGames}</p>
        //                         <p key={uuidv4()}>{item.form}</p>
        //                         <p key={uuidv4()}>{item.won}</p>
        //                         <p key={uuidv4()}>{item.draw}</p>
        //                         <p key={uuidv4()}>{item.lost}</p>
        //                         <p key={uuidv4()}>{item.points}</p>
        //                         <p key={uuidv4()} className={Styles.GF}>{item.goalsFor}</p>
        //                         <p key={uuidv4()} className={Styles.GA}>{item.goalsAgainst}</p>
        //                         <p key={uuidv4()} className={Styles.GD}>{item.goalDifference}</p>
        //                     </>  
                            
        //                 ))}
        // </div>
    )
    }

export default LeaderBoard