import Loading from './loading'
import Header from '../../../components/Header/header'
import { Suspense } from 'react'

export default function LeagueLayout({ children, params }) {
        // URL -> /league/PL/nike-air-max-97
        // `params` -> { tag: 'league', item: 'PL' }
        return (
            <>
                <Header/>
                <Suspense fallback={<Loading/>}>
                    <section>{children}</section>
                </Suspense>
                
            </>
            
        )
}