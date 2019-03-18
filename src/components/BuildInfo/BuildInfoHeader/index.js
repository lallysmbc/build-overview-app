import React from 'react'

const BuildInfoHeader = ({isJestCoverage, githubRepo, name, description}) => {
	return (
		<div className="build-info-header">
			<div>
				<i className={isJestCoverage ? 'devicon-react-original' : 'devicon-csharp-plain'} />
				<i className={githubRepo ? 'devicon-github-plain' : 'devicon-gitlab-plain'} />
				<h1>{name}</h1>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default BuildInfoHeader
