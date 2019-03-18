import React, { lazy, Suspense, Fragment } from 'react'
import ProgressContainer from './ProgressContainer'
import './BuildInfo.css'
import Spinner from '../Spinner'
import BuildInfoHeader from './BuildInfoHeader'
import JestData from '../AllJestData'

const TopFive = lazy(() => import('../TopFive'))

const BuildInfo = props => {
	const progress = props.buildData.IsJestCoverage
		? [
				{
					percentage: props.buildData.Jest.Statements,
					text: 'Statements'
				},
				{
					percentage: props.buildData.Jest.Branches,
					text: 'Branches'
				},
				{
					percentage: props.buildData.Jest.Functions,
					text: 'Functions'
				},
				{
					percentage: props.buildData.Jest.Lines,
					text: 'Lines'
				}
		  ]
		: [
				{
					percentage: props.buildData.DotNet.CoveragePercent,
					text: 'Coverage Percent'
				},
				{
					percentage: 89,
					text: 'Total Statements'
				},
				{
					percentage: 45,
					text: 'Covered Statements'
				},
				{
					percentage: 100,
					text: 'Covered Statements'
				}
		  ]

	return (
		<Fragment>
			<BuildInfoHeader
				name={props.buildData.Name}
				isJestCoverage={props.buildData.IsJestCoverage}
				githubRepo={props.buildData.GithubRepo}
				description="Description this is an explanation of this project"
			/>
			<div className="overlay">
				<h1>Stats</h1>
				<ProgressContainer progressItems={progress} />
				<Suspense maxDuration={2500} fallback={<Spinner />}>
					<TopFive Title="Top 5" Count={1} />
				</Suspense>
				<Suspense maxDuration={2500} fallback={<Spinner />}>
					<TopFive Title="Worst 5" Count={2} />
				</Suspense>
				{/* <Suspense maxDuration={2500} fallback={<Spinner />}>
                    <JestData />
                </Suspense> */}
			</div>
		</Fragment>
	)
}

const BuildInfoPage = props => <BuildInfo buildData={props.buildData} />

export default BuildInfoPage
