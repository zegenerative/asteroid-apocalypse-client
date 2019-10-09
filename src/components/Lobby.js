import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import CreateGalaxyContainer from './CreateGalaxyContainer'

export default class Lobby extends React.Component {
    render() {
        const imgUrls = [
            'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.freepngimg.com%2Fdownload%2Fgalaxy%2F2-2-galaxy-transparent.png&f=1&nofb=1',
            'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn130.picsart.com%2F234283200048211.png&f=1&nofb=1',
            'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmyweb.uiowa.edu%2Fxjin6%2Fspace%2Fimg%2Fhome_galaxy.png&f=1&nofb=1',
            'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dsisystemsinc.com%2Fimg%2Fslider%2FGalaxy_Vignette.png&f=1&nofb=1',
            'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5idsn_ikbQiMDBTEIBiP9AAAAA%26pid%3DApi&f=1',      
            'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn140.picsart.com%2F234206262038212.png&f=1&nofb=1',
            'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn130.picsart.com%2F271544565009211.png&f=1&nofb=1',
            'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn173.picsart.com%2F225526075026202.png&f=1&nofb=1',
            'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.videotron.com%2Fvcom%2Fmedia%2Fm2782002%2F12%2FSamsung-Galaxy-S6-Edge-Noir-Grande-432x414-EN.png&f=1&nofb=1'
        ]

        let randomChosen = []

        const { token, galaxies } = this.props
        if(token) {
            return(
                <div>
                    <CreateGalaxyContainer />
                    <h1>Or choose a galaxy!</h1>
                        {galaxies.map(galaxy => {
                            let random = Math.floor(Math.random() * imgUrls.length)
                            randomChosen.push(random)
                            return(
                                <div key={galaxy.id}>
                                    <h3>{galaxy.galaxyName}</h3>
                                    {/* put back to 'full'!!!! */}
                                    { galaxy.status !== 'waiting' &&
                                        <Link to={`/game/${galaxy.id}`}>
                                        <img className='galaxies' src={imgUrls[random]} width='30%' alt='galaxy'></img>
                                        </Link>
                                    }
                                </div>
                            )
                        })}
                </div>
            )
        } else {
            return(
                <div>
                    <Login />
                </div>
            )
        }
    }
}
