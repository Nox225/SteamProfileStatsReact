import React from 'react'
import Games from './games'

export default function Game(props){
    return(
        <div>
            {Games.state.games.map((game) => {
                return(
                    <div>
                        <div key={game.appid}>{game.name}</div>
                        <div>{Math.floor(game.playtime_forever/60)}h</div>
                        <img src={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`}></img>
                    </div>
            )
            }
            )}
    </div>
    )
}