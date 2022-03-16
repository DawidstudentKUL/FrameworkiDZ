import React, {Component} from 'react'
class FavouriteGamesList extends Component{
    state = {
        isListShown: false
    }
    changeIsShownFavListState = () => {
        this.setState({isListShown: !this.state.isListShown})
    }
    render() {
        var games = ['CS:GO','World of Warcraft','Osu']
        const gameList = games.map(game => <li key={game}>{game}</li>)
        return <div>
            <h2>Favourite games list: </h2>
            {this.state.isListShown? <div>
                    <button onClick={this.changeIsShownFavListState}>
                        Hide games list</button>
                    <ul>{gameList}</ul></div>:
                <button onClick={this.changeIsShownFavListState}>
                    Show games list</button>}
        </div>
    }
}
export default FavouriteGamesList;
