import Header from '../components/Header/header'

export default function Home() {
  return (
    <>
      <Header/>
      <main >
        <section>
          <h1>StatMate</h1>
          <p>StatMate is a web app that provides football statistics for the top 5 European leagues.</p>
          <p>It is built using Next.js and Tailwind CSS.</p>
          <p>It uses the <a href="https://www.football-data.org/">Football Data API</a> to retrieve the data.</p>
          <p>It is hosted on <a href="https://vercel.com/">Vercel</a>.</p>
        </section>
        
      
    </main>
    </>
    
  )
}
