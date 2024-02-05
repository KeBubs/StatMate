import Loading from './loading'
import Header from '../../components/Header/header'
import { Suspense } from 'react'

export default function LeagueLayout({ children }) {
        
        return (
            
            <section>
                <Header/>
                <Suspense fallback={<Loading/>}>
                    {children}
                </Suspense>
            </section>
            
            
        )
}