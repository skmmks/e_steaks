import React from 'react'

export default class AboutApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleReturn = this.handleReturn.bind(this); 
    }
    handleReturn() {
        this.props.setView('landingPage', {})
    }
    render() {
        return (
            <div onClick={this.handleReturn}>
                 Return
            </div>
        )
    }
}