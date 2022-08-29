import React from 'react'

// const url = 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?include_appinfo=true&key=A9940DEB8884111BDA327417C3880A21&steamid=76561198157636908'

function Stats() {

    // const fetchStats = async () => {
    //     try {
    //         const response = await fetch(`${url}`)
    //         const data = await response.json()
    //         const newStats = data.map((item) => {
    //             // const {id, name, tagline, description, image_url} = item;
    //             console.log(newStats)
    //             return item
    //         })
    //     } catch(error){
    //         console.log(error)
    //     }
    // }
    // fetchStats()

    return (
        <div className="container">
            <div>Stats</div>
        </div>
    );
}

export default Stats;
