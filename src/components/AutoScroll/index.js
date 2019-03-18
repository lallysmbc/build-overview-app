import React, { Component, Fragment } from 'react'

class AutoScroll extends Component {
	componentDidMount() {
		this.timer = setInterval(() => this.el.scrollIntoView({ duration: 60000, behavior: 'smooth' }), 5000)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	render() {
		return (
			<Fragment>
				{this.props.children}
				<div
					ref={el => {
						this.el = el
					}}
				/>
			</Fragment>
		)
	}
}

export default AutoScroll
