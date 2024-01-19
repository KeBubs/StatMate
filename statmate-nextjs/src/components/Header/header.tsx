import Styles from './styles.module.css'
import Link from 'next/link'


export default function Header () {
    return (
        <header className={Styles.container}>
            <Link className={Styles.link} href='/'><h1 className={Styles.logo}>StatMate</h1></Link>
            <Link className={Styles.link} href='/todays-fixtures'>Todays Fixtures</Link>
            <Link className={Styles.link} href='/leagues/PL'>Premier League</Link>
            <Link className={Styles.link} href='/leagues/BL1'>Bundesliga</Link>
            <Link className={Styles.link} href='/leagues/PD'>La Liga</Link>
            <Link className={Styles.link} href='/leagues/FL1'>Ligue 1</Link>
            <Link className={Styles.link} href='/leagues/SA'>Serie A</Link>
        </header>
    )
}