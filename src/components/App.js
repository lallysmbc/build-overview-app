import React, {lazy, Suspense, Component, Fragment} from 'react'
import Spinner from './Spinner/spinner'

const BuildOverview = lazy(() => 
    import('./BuildOverviewData')
)

export default class App extends Component {
    constructor(){
        super()
    }

    render() {
        return (
            <Fragment>
                <Suspense maxDuration={1500} fallback={<Spinner />}>
                    <BuildOverview />
                </Suspense>
            </Fragment>
        )
    }
}