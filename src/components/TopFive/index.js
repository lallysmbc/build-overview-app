import React, { Fragment } from 'react'
import { unstable_createResource as createResource } from "react-cache"
import { fetchTopFive } from "../../api"
import './index.css'

const topFiveFetcher = createResource(fetchTopFive);

function TopFive(props) {
    const fetchedData = topFiveFetcher.read(props.Count);

    return (
        <Fragment>
            <h1>{props.Title}</h1>
            <div className='top-five-item'>
                <table>
                    <tbody>
                        <tr>
                            <th>Namespace</th>
                            <th>Total Statements</th>
                            <th>Covered Statements</th>
                            <th>Coverage Percent</th>
                        </tr>
                        {!fetchedData.IsJestCoverage && fetchedData.DotNetData.map(data =>
                            <tr>
                                <th>{data.Namespace}</th>
                                <th>{data.TotalStatements}</th>
                                <th>{data.CoveredStatements}</th>
                                <th>{data.CoveragePercent}</th>
                            </tr>
                        )}
                        {fetchedData.IsJestCoverage && fetchedData.JestData.map(data =>
                            <tr>
                                <th>{data.Branches}</th>
                                <th>{data.Branches}</th>
                                <th>{data.Statements}</th>
                                <th>{data.Statements}</th>
                            </tr>
                        )}
                    </tbody>
                </table>
                </div>
            </Fragment>
        )
}

export default TopFive