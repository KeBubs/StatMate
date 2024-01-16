import Styles from './styles.module.css'

export default function Footer () {
    return (
        <footer>
            <div className={Styles.container}>
            <section className={Styles.author}>
                <p>Created By Kieran Busby</p>
            </section>
            <section className={Styles.links}>
                <p>Link</p>
                <p>Link</p>
                <p>Link</p>
                <p>Link</p>
                <p>Link</p>
            </section>
            <section className={Styles.credits}>
            <p>©Copyright 2024</p>
            <p>Created using <a className='link' href='https://www.football-data.org'>football-data.org</a></p>
            </section>
        </div>
        </footer>
        
    )
}