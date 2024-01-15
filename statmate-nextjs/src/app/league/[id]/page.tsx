import Header from '../../../components/Header/header'

export default function League ({ params }: {params: {id: string}}) {

    let league = null
    // Set the league based on the ID passed via params. 
    switch (params.id) {
        case 'premier-league':
            league = 'Premier League'
            break
        case 'bundesliga':
            league = 'Bundesliga'
            break
        case 'la-liga':
            league = 'La Liga'
            break
        case 'ligue-1':
            league = 'Ligue 1'
            break
        case 'serie-a':
            league = 'Serie A'
            break
        default:
            league = 'League Fixtures'
            break
    }

    return (
        <>
        <Header/>
            <h1>{league} Fixtures</h1>
        </>
    )
}