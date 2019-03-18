import React from 'react'
import ProgressCircle from '../../ProgressCircle'

const ProgressContainer = ({progressItems}) => {
    return <div className="progress-container" >
        {progressItems.map(item => (
            <ProgressCircle percentage={item.percentage} text={item.text} />
        ))}
    </div>
}

export default ProgressContainer