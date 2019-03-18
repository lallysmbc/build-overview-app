import React, { Fragment } from 'react'
import { unstable_createResource as createResource } from 'react-cache'
import { fetchJestTestData } from '../../api'

const jestTestDataFetcher = createResource(fetchJestTestData)

const JestData = () => {
	const fetchedData = jestTestDataFetcher.read()
	return (
		<Fragment>
			<div className="title">
				<h1>File Stats</h1>
			</div>
			<div className="top-five-item">
				<table>
					<tbody>
						<tr>
							<th>Namespace</th>
							<th>Lines</th>
							<th />
							<th>Functions</th>
							<th />
							<th>Statements</th>
							<th />
							<th>Branches</th>
							<th />
						</tr>
						{Object.keys(fetchedData).map(
							(key) =>
								key != 'total' && (
									<tr>
										<th>{key}</th>
										<th>
											{fetchedData[key].lines.pct}%<i class="fas fa-arrow-up" />
										</th>
										<th>
											{fetchedData[key].lines.total}/{fetchedData[key].lines.covered}
										</th>
										<th>
											{fetchedData[key].functions.pct}%<i class="fas fa-arrow-up" />
										</th>
										<th>
											{fetchedData[key].functions.total}/{fetchedData[key].functions.covered}
										</th>
										<th>
											{fetchedData[key].statements.pct}%<i class="fas fa-arrow-up" />
										</th>
										<th>
											{fetchedData[key].statements.total}/{fetchedData[key].statements.covered}
										</th>
										<th>
											{fetchedData[key].branches.pct}%<i class="fas fa-arrow-up" />
										</th>
										<th>
											{fetchedData[key].branches.total}/{fetchedData[key].branches.covered}
										</th>
									</tr>
								)
						)}
					</tbody>
				</table>
			</div>
		</Fragment>
	)
}

export default JestData
