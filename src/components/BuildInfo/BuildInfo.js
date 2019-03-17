import React, { lazy, Suspense, Fragment } from 'react'
import ProgressCircle from '../ProgressCircle/ProgressCircle'
import "./BuildInfo.css";
import Spinner from '..//Spinner/spinner'
import JestData from '../AllJestData'

const TopFive = lazy(() => 
    import('../TopFive')
)

function BuildInfo (props) {
      return (
        <Fragment>
            <div className='build-info-header'>
                <div>
                    <i className={props.buildData.IsJestCoverage ? 'devicon-react-original' : 'devicon-csharp-plain'}></i>
                    <h1>{ props.buildData.Name }</h1>
                    <p>Desciption this is an explanation of this project</p>
                </div>
            </div>
            <div className="overlay">
                <div className='overlay-container'>
                    <div className='title'>
                        <h1>Stats</h1>
                    </div>
                        {!props.buildData.IsJestCoverage && 
                            <div className='progress-container'>
                                <ProgressCircle percentage={props.buildData.DotNet.CoveragePercent} text='Coverage Percent'/>
                                <ProgressCircle percentage={22} text='Total Statements'/>
                                <ProgressCircle percentage={45} text='Covered Statements'/>
                                <ProgressCircle percentage={100} text='Covered Statements'/>
                            </div>
                        }
                        {props.buildData.IsJestCoverage && 
                            <div className='progress-container'>
                                <ProgressCircle percentage={props.buildData.Jest.Statements} text='Statements'/>
                                <ProgressCircle percentage={props.buildData.Jest.Branches} text='Branches'/>
                                <ProgressCircle percentage={56} text='Covered Statements'/>
                                <ProgressCircle percentage={97} text='Covered Statements'/>
                            </div>
                        }
                    <Suspense maxDuration={2500} fallback={<Spinner />}>
                        <TopFive
                            Title='Top 5'
                            Count={1}
                        />
                    </Suspense>
                    <Suspense maxDuration={2500} fallback={<Spinner />}>
                        <TopFive
                            Title='Worst 5'
                            Count={2}
                        />
                    </Suspense>
                    {/* <Suspense maxDuration={2500} fallback={<Spinner />}>
                        <JestData />
                    </Suspense> */}
                </div>
            </div>
        </Fragment>
      )
}

export default function BuildInfoPage(props) {
    return (
        <>
            <BuildInfo buildData={props.buildData}/>
        </>
    )
}