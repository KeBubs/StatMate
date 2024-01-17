import Styles from './styles.module.css'
import Link from 'next/link'


export default function Header () {
    return (
        <header className={Styles.container}>
            <Link className={Styles.link} href='/'><h1 className={Styles.logo}>StatMate</h1></Link>
            <Link className={Styles.link} href='/todays-fixtures'>Todays Fixtures</Link>
            <Link className={Styles.link} href='/league/premier-league'>Premier League</Link>
            <Link className={Styles.link} href='/league/bundesliga'>Bundesliga</Link>
            <Link className={Styles.link} href='/league/la-liga'>La Liga</Link>
            <Link className={Styles.link} href='/league/ligue-1'>Ligue 1</Link>
            <Link className={Styles.link} href='/league/serie-a'>Serie A</Link>
        </header>
    )
}