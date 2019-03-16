import React, { Fragment } from 'react'
import ProgressCircle from '../ProgressCircle/ProgressCircle'
import "./BuildInfo.css";

function BuildInfo (props) {
      return (
        <Fragment>
            <div className='build-info-header'>
                <div>
                    <i className={props.buildData.IsJestCoverage ? 'devicon-react-original' : 'devicon-csharp-plain'}></i>
                    <h1>DTS: Frontend</h1>
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
                                <ProgressCircle percentage={97} text='Covered Statements'/>
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
                <div className='title'>
                    <h1>Top 5 </h1>
                </div>
                <div class='top-five-list'>
                    <div class='top-five-item'>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Namespace</th>
                                    <th>File</th>
                                    <th>Percentage</th>
                                </tr>
                                {!props.buildData.IsJestCoverage && props.buildData.Performance.BestDotNet.map(data =>
                                    <tr>
                                        <th>{data.CoveragePercent}</th>
                                        <th>{data.CoveredStatements}</th>
                                        <th>{data.TotalStatements}</th>
                                    </tr>
                                )}
                                {props.buildData.IsJestCoverage && props.buildData.Performance.BestJest.map(data =>
                                    <tr>
                                        <th>{data.Branches}</th>
                                        <th>{data.Branches}</th>
                                        <th>{data.Statements}</th>
                                    </tr>
                                )}
                                
                            </tbody>
                        </table>
                    </div>
                    <div className='title'>
                        <h1>Worst 5 </h1>
                    </div>
                    <div class='top-five-item'>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Namespace</th>
                                    <th>File</th>
                                    <th>Percentage</th>
                                </tr>
                                {!props.buildData.IsJestCoverage && props.buildData.Performance.WorstDotNet.map(data =>
                                    <tr>
                                        <th>{data.CoveragePercent}</th>
                                        <th>{data.CoveredStatements}</th>
                                        <th>{data.TotalStatements}</th>
                                    </tr>
                                )}
                                {props.buildData.IsJestCoverage && props.buildData.Performance.WorstJest.map(data =>
                                    <tr>
                                        <th>{data.Branches}</th>
                                        <th>{data.Branches}</th>
                                        <th>{data.Statements}</th>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
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