import React, {lazy, Suspense} from 'react'
import Spinner from './Spinner/spinner'
import AutoScroll from './AutoScroll'

const BuildOverview = lazy(() => 
    import('./BuildOverviewData')
)

function App() {
    return (
        <AutoScroll>
            <Suspense maxDuration={1500} fallback={<Spinner />}>
                <BuildOverview />
            </Suspense>
        </AutoScroll>
    )
}

export default App