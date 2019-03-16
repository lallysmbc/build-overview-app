import React, {lazy, Suspense, Component, Fragment} from 'react'
import Spinner from './spinner'

const BuildOverview = lazy(() => 
    import('./BuildOverviewData')
)

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            test: false
        }
    }
    componentWillMount() {
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