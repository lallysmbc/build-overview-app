import React, { Fragment, Component, Suspense } from 'react'
import { fetchBuildData } from "../api";
import { unstable_createResource as createResource } from "react-cache";
import BuildInfoPage from './BuildInfo/BuildInfo'

const buildOverview = createResource(fetchBuildData);

class BuildOverview extends Component {
  constructor(){
    super()
    const buildData = buildOverview.read()
    this.state = {
      data: buildData,
      order: 'newest',
      itemSelected: false,
      selectedItem: ''
    }
  }

  sortArray(){
    let buildList = this.state
    if(buildList.order === 'newest'){
      buildList.data.sort(function(a,b){
        return new Date(b.LastPublishTime) - new Date(a.LastPublishTime)
      })
      buildList.order = 'oldest'
    } else {
      buildList.data.sort(function(a,b){
        return new Date(a.LastPublishTime) - new Date(b.LastPublishTime)
      })
      buildList.order = 'newest'
    }

    this.setState(buildList)
  }

  onClick(build){
    let data = this.state.itemSelected
    this.setState({itemSelected: !data, selectedItem: build})
  }

    render() {
      return (
        <Fragment>
          <div id='reorderButton' onClick={this.sortArray.bind(this)}>Re-order</div>
          {!this.state.itemSelected && 
          this.state.data.map((build => 
              <div onClick={this.onClick.bind(this, build)} id="BuildDiv" className="col-sm-6 col-md-6 col-lg-6 Success">
                  <div className="well">
                      <h4 className="buildTitle text-cutoff">{build.Name}</h4>
                      <p className="buildInfoBranch text-cutoff">
                          <span>Build</span> <span className="buildInfoHighlight">{build.BuildNumber}</span>
                      </p>
                      <p className="buildInfoBranch text-cutoff"></p>
                      <p className="buildInfoBranch text-cutoff">
                          <span className="buildInfoHighlight">Code coverage</span>
                      </p>
                      {(!build.IsJestCoverage) && <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">DotCoverVersion &darr; <span className="buildInfoHighlight">{build.DotNet.DotCoverVersion}</span><span style={{color: '#FB1B45'}}>-0.02%</span></p>}
                      {(!build.IsJestCoverage ) && <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">Kind &darr; <span className="buildInfoHighlight">{build.DotNet.Kind}</span><span style={{color: '#FB1B45'}}>-0.02%</span></p>}
                      {(!build.IsJestCoverage ) && <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">CoveredStatements &darr; <span className="buildInfoHighlight">{build.DotNet.CoveredStatements}</span><span style={{color: '#FB1B45'}}>-0.02%</span></p>}
                      {(!build.IsJestCoverage ) && <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">TotalStatements &darr; <span className="buildInfoHighlight">{build.DotNet.TotalStatements}</span><span style={{color: '#FB1B45'}}>-0.02%</span></p>}
                      {(!build.IsJestCoverage ) && <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">CoveragePercent &darr; <span className="buildInfoHighlight">{build.DotNet.CoveragePercent}</span><span style={{color: '#FB1B45'}}>-0.02%</span></p>}

                      {(build.IsJestCoverage) && <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">Statements &darr; <span className="buildInfoHighlight">{build.Jest.Statements}</span><span style={{color: '#FB1B45'}}>-0.02%</span></p>}
                      {(build.IsJestCoverage ) && <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">Statements &darr; <span className="buildInfoHighlight">{build.Jest.Statements}</span><span style={{color: '#FB1B45'}}>-0.02%</span></p>}
                      {(build.IsJestCoverage ) && <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">Statements &darr; <span className="buildInfoHighlight">{build.Jest.Statements}</span><span style={{color: '#FB1B45'}}>-0.02%</span></p>}
                      {(build.IsJestCoverage ) && <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">Branches &darr; <span className="buildInfoHighlight">{build.Jest.Branches}</span><span style={{color: '#FB1B45'}}>-0.02%</span></p>}
                      {(build.IsJestCoverage ) && <p style={{color: '#FB1B45'}} className="buildInfo text-cutoff">Branches &darr; <span className="buildInfoHighlight">{build.Jest.Branches}</span><span style={{color: '#FB1B45'}}>-0.02%</span></p>}
                  </div>
              </div>
            ))}
            {this.state.itemSelected &&
                <BuildInfoPage buildData={this.state.selectedItem} />
            }
        </Fragment>
      )
    }
}

export default BuildOverview