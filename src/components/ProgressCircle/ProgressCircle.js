import React, { Fragment, Component } from 'react'
import "./ProgressCircle.css";

class ProgressCircle extends Component {
    constructor(props){
        super()
        this.perCircContainer = React.createRef();
        this.perCircStat = React.createRef();
        this.circleColour = props.percentage < 35 ? 'red' : props.percentage < 65 ? '##ffa500' : '#00cc00'
      }
      

    componentDidMount() {
        this.animateProgressCircle(this.props.percentage)
    }

    animateProgressCircle(end, i) {
        if (end < 0)
            end = 0;
        else if (end > 100)
            end = 100;
        if (typeof i === 'undefined')
            i = 0;
        var curr = (100 * i) / 360;
        this.perCircStat.current.innerHTML = Math.round(curr) + "%";
        if (i <= 180) {
            this.perCircContainer.current.style.backgroundImage ='linear-gradient(' + (90 + i) + 'deg, transparent 50%, #F7F9FA 50%),linear-gradient(90deg, #F7F9FA 50%, transparent 50%)'
        } else {
            this.perCircContainer.current.style.backgroundImage = 'linear-gradient(' + (i - 90) + 'deg, transparent 50%,'+this.circleColour+' 50%),linear-gradient(90deg, #F7F9FA 50%, transparent 50%)'
        }
        if (curr < end) {
            setTimeout(() => 
                this.animateProgressCircle(end, ++i), 1);
        }
    }

      render() {
        return (
        <Fragment>
            <div className='progress-circle-container'>
                <h1>{this.props.text}</h1>
                <div ref={this.perCircContainer} id="sellPerCirc" className={this.props.percentage < 35 ? 'perCirc red' : this.props.percentage < 65 ? 'perCirc orange' : 'perCirc'}>
                    <div className="perCircInner">
                        <div ref={this.perCircStat} className="perCircStat">0%</div>
                    </div>
                </div>
            </div>
        </Fragment>
      )
    }
}

export default ProgressCircle