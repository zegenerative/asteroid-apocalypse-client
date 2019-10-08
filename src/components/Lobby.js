import React from 'react'
import { Link } from 'react-router-dom'
import LoginFormContainer from './LoginFormContainer'
import SignUpContainer from './SignUpContainer'
import CreateRoomContainer from './CreateGalaxyContainer'

export default class Lobby extends React.Component {
    render() {
        const imgUrls = [
            'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.freepngimg.com%2Fdownload%2Fgalaxy%2F2-2-galaxy-transparent.png&f=1&nofb=1',
            'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn130.picsart.com%2F234283200048211.png&f=1&nofb=1',
            'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmyweb.uiowa.edu%2Fxjin6%2Fspace%2Fimg%2Fhome_galaxy.png&f=1&nofb=1',
            'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dsisystemsinc.com%2Fimg%2Fslider%2FGalaxy_Vignette.png&f=1&nofb=1',
            'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5idsn_ikbQiMDBTEIBiP9AAAAA%26pid%3DApi&f=1'        
        ]

        const { user, galaxies } = this.props
        if(user) {
            return(
                <div>
                    <h1>Choose a galaxy!</h1>
                        {galaxies.map(galaxy => {
                            const random = Math.floor(Math.random() * 5)
                            console.log(random)
                            return(
                                <div key={galaxy.id}>
                                    <h3>{galaxy.title}</h3>
                                    <Link to={`/game/${galaxy.id}`}>
                                    <img className='galaxies' src={imgUrls[random]} width='30%' alt='galaxy'></img>
                                    </Link>
                                </div>
                            )
                        })}
                    <CreateRoomContainer />
                </div>
            )
        } else {
            return(
                <div>
                    <SignUpContainer />
                    <LoginFormContainer />
                </div>
            )
        }
    }
}
