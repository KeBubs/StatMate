import Styles from './styles.module.css'
import Link from 'next/link'


export default function Header () {
    return (
        <header className={Styles.container}>
            <h1 className={Styles.logo}>StatMate</h1>
            <Link className={Styles.link} href='/todays-fixtures'>Todays Fixtures</Link>
            <Link className={Styles.link} href='/premier-league'>Premier League</Link>
            <Link className={Styles.link} href='/bundesliga'>Bundesliga</Link>
            <Link className={Styles.link} href='/la-liga'>La Liga</Link>
            <Link className={Styles.link} href='/ligue-1'>Ligue 1</Link>
            <Link className={Styles.link} href='/serie-a'>Serie A</Link>
        </header>
    )
}