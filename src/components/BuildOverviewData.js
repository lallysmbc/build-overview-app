import React, { Fragment, Suspense } from 'react'
import { fetchBuildData } from "../api";
import { unstable_createResource as createResource } from "react-cache";

const buildOverview = createResource(fetchBuildData);

function BuildOverview() {
    const buildData = buildOverview.read()

    return (
      buildData.ProjectOverview.map((build => 
        <div id="BuildDiv" className="col-sm-6 col-md-6 col-lg-6 Success">
            <div className="well">
                <h4 className="buildTitle text-cutoff">{build.Name}</h4>
                <p className="buildInfoBranch text-cutoff">
                    <span>Build</span> <span className="buildInfoHighlight">{build.BuildNumber}</span>
                </p>
                <p className="buildInfoBranch text-cutoff"></p>
                <p className="buildInfoBranch text-cutoff">
                    <span className="buildInfoHighlight">Code coverage</span>
                </p>
                {/* <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">Classes &darr; <span className="buildInfoHighlight">58.6% </span><span style={{color: '#FB1B45'}}>-0.05%</span></p>
                <p style={{color: '#A9E800'}} className="buildInfo text-cutoff">Methods &uarr; <span className="buildInfoHighlight">43.5% </span><span style={{color: '#A9E800'}}>+0.01%</span></p>
                <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">Statements &darr; <span className="buildInfoHighlight">48.9% </span><span style={{color: '#FB1B45'}}>-0.02%</span></p> */}
                {(build.CodeCoverage && build.CodeCoverage.DotCoverVersion) && <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">Statements &darr; <span className="buildInfoHighlight">{build.CodeCoverage.DotCoverVersion}</span><span style={{color: '#FB1B45'}}>-0.02%</span></p>}
                {(build.CodeCoverage && build.CodeCoverage.Kind) && <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">Statements &darr; <span className="buildInfoHighlight">{build.CodeCoverage.Kind}</span><span style={{color: '#FB1B45'}}>-0.02%</span></p>}
                {(build.CodeCoverage && build.CodeCoverage.CoveredStatements) && <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">Statements &darr; <span className="buildInfoHighlight">{build.CodeCoverage.CoveredStatements}</span><span style={{color: '#FB1B45'}}>-0.02%</span></p>}
                {(build.CodeCoverage && build.CodeCoverage.TotalStatements) && <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">Statements &darr; <span className="buildInfoHighlight">{build.CodeCoverage.TotalStatements}</span><span style={{color: '#FB1B45'}}>-0.02%</span></p>}
                {(build.CodeCoverage && build.CodeCoverage.CoveragePercent) && <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">Statements &darr; <span className="buildInfoHighlight">{build.CodeCoverage.CoveragePercent}</span><span style={{color: '#FB1B45'}}>-0.02%</span></p>}
            </div>
        </div>
      ))
    )
}

export default function BuildOverviewData() {
    return (
      <>
        <BuildOverview  />
      </>
    );
}