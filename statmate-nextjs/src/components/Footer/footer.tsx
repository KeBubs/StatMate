import Styles from './styles.module.css'

export default function Footer () {
    return (
        <footer>
            <div className={Styles.container}>
            <section className={Styles.authorContainer}>
                <p>Created By Kieran Busby</p>
            </section>
            <section className={Styles.linkContainer}>
                <p><a className={Styles.links} href='www.linkedin.com/in/kieran-busby-7b519b12a'>LinkedIn</a></p>
                <p><a className={Styles.links} href='https://twitter.com/kieranbusby'>X (formerly twitter)</a></p>
                <p><a className={Styles.links} href='https://github.com/KeBubs'>GitHub</a></p>
            </section>
            <section className={Styles.creditContainer}>
            <p>©Copyright 2024</p>
            <p>Created using <a className={Styles.links} href='https://www.football-data.org'>football-data.org</a></p>
            </section>
        </div>
        </footer>
        
    )
}