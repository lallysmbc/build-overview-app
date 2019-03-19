import React from 'react'
import ProgressCircle from '../../ProgressCircle'

const ProgressContainer = ({progressItems}) => {
return <div className="progress-container" >
        {progressItems.map(item => (
            <ProgressCircle percentage={item.percentage} text={item.text} nonPercentageValue={item.nonPercentageValue}/>
        ))}
    </div>
}

export default ProgressContainer