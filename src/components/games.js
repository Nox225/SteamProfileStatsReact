import React, { Component } from 'react'

class Games extends Component {
    constructor() {
        super()
        this.state = {
            games: []
        }
    }

    componentDidMount(){
        fetch('/api/games')
            .then(res => res.json())
            .then(games => games.sort((a, b) => (a.playtime_forever < b.playtime_forever) ? 1 : -1))
            .then(games => this.setState({games}))
    }

    render(){
        return(
            <div>
                <div className='game-list'>
                    {this.state.games.map((game) => {
                        return(
                            <div key={game.appid} className='game'>
                                <div id='chart' className='chart' style={{height: `${(game.playtime_forever/60) * 2}px`}}></div>
                                {/* <div key={game.appid}>{game.name}</div> */}
                                <div className='playtime'>{Math.floor(game.playtime_forever/60)}h</div>
                                <div className='container'>
                                    <img className='icon' src={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`} alt=''></img>
                                    <div className='game-name'>{game.name}</div>
                                </div>
                            </div>
                    )
                    }
                    )}

                </div>
            </div>
        )
    }
}

export default Games;


