'use client'

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
    value: any;
};

const LeaderBoard: React.FC<LeaderBoardProps> =  ({ value }) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<undefined | object>()
    // const data = value.standings[0].table

    useEffect(() => {
        setData(value.standings[0].table)
        setLoading(false)
        console.log('Data is', data)
    },[value])

    // console.log('Im the data', data.table)
    

    return data == undefined ? ( <p>Loading...</p> ) : (
    

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
                        
                         {data?.map((item: LeaderboardItem, index: number) => (
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
                                 
                            
                        ))}
        </div>
    )
    }

export default LeaderBoard