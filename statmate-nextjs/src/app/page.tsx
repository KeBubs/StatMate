import Footer from "@/components/Footer/footer"
import Header from "../components/Header/header"
import Styles from "./styles.module.css"


export default function Home() {
  return (
    <>
      <Header/>
      <main className={Styles.mainContainer}>
        <section className={Styles.aboutContainer}>
          <h1 className={Styles.title}>Welcome to <i>StatMate</i> 🎉</h1>
          <p><i>StatMate</i> is a personal project I have been creating, designed to show fixtures for the 'Big 5' leagues. </p>
          <p>I'm always looking to introduce new features to <i>StatMate.</i></p>
          <p>As the Website is under construction, some features may not work as expected, please stay tuned!</p>
        </section>
    </main>
    <Footer/>
    </>
    
  )
}
