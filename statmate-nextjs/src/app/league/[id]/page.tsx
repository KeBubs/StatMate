'use client'
import 'dotenv/config'
import { v4 as uuidv4 } from 'uuid'

import Header from '../../../components/Header/header'
import Styles from './styles.module.css'
import LeaderBoard from '../../../components/League/leaderboard'
import Data from '../../../example-data/sample.json'
import { fetchStandings } from '../../../functions/helpers'
import { useState, useEffect } from 'react'



export default function League ({ params }: {params: {id: string}}) {
    const [league, setLeague] = useState<string | null>(null)
    const [code, setCode] = useState<string | null>(null)
    const [data, setData] = useState<JSON | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const leaderboard : Object = Data.standings[0].table
    // const position : Number = leaderboard.position

    useEffect(()=>{
        // Set the league based on the ID passed via params. 
    switch (params.id) {
        case 'premier-league':
            setLeague('Premier League')
            setCode('PL')
            break
        case 'bundesliga':
            setLeague('Bundesliga')
            setCode('BL1')
            break
        case 'la-liga':
            setLeague('La Liga')
            setCode('PD')
            break
        case 'ligue-1':
            setLeague('Ligue 1')
            setCode('FL1')
            break
        case 'serie-a':
            setLeague('Serie A')
            setCode('SA')
            break
    }
    setLoading(false)
    }, [])

    useEffect(() => {
        const fetchInfo = async () => {
        console.log('Im running in this useEffect')
        const response = await fetchStandings(code)
        
        setData(response)
        }
        
        fetchInfo()
        {console.log(data)}
    }, [loading])


    return (

        <>
        <Header/>
        <main className={Styles.mainContainer}>
            <section className={Styles.title}>
                
            <h1 >Welcome, to the {league}... </h1>
            </section>
            <section className={Styles.leaderboardContainer}>
                <LeaderBoard key={uuidv4()} leaderboard={leaderboard}/>
            </section>
        </main>
            
        </>
    )
}