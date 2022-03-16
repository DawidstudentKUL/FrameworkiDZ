import React, {Component} from 'react';

class MoreInfo extends Component{
    state = {
        showInfo: false
    }
    changeShowInfoState = () => {
        this.setState({showInfo: !this.state.showInfo})
    }
    render() {
        const infoMessage = 'Lorem ipsum...';
        return <div>
            <h2>About: </h2>
            {this.state.showInfo?<p>{infoMessage}<button onClick={this.changeShowInfoState}>Cofnij</button></p>: <button onClick={this.changeShowInfoState}>More info about...</button>}
        </div>
    }
}
export default MoreInfo;