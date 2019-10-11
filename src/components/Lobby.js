import React from 'react'
import CreateGalaxyContainer from './CreateGalaxyContainer'
import { connect } from 'react-redux'
import request from 'superagent'
import { url } from '../constants/url'


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

class Lobby extends React.Component {

    onClick = (event) => {
        console.log('CLICKED ROOM', )
        const id = event.target.id
        request
            .put(`${url}/room/${id}`)
            .set('Authorization', `Bearer ${this.props.token}`)
            .send({ username: this.props.username })
            .then(response => {
                console.log('response', response.body.status, response.body.room, this.props.username)
            this.updateStatus(response.body.status, response.body.room, this.props.username)
            })
    }
    
    updateStatus = (newStatus, room, player) => {
        this.props.dispatch({
            type: 'UPDATE_STATUS',
            payload: {
                status: newStatus,
                id: room,
                player: player
            }
        })
    } 
    
    render() {
        const { galaxies } = this.props
        return(
            <div>
                <CreateGalaxyContainer />
                <h1>Or choose a galaxy!</h1>
                    { galaxies.map(galaxy => {
                        let random = Math.floor(Math.random() * imgUrls.length)
                        if(galaxy.status !== 'full') {
                            return(
                                <div key={galaxy.id} id={galaxy.id} name={galaxy.id}>
                                    <h3>{galaxy.galaxyName}</h3>
                                    <img className='galaxies' id={galaxy.id} src={imgUrls[random]} onClick={this.onClick} width='30%' alt='galaxy'></img>
                                </div>
                            )
                        } else {
                            return <h1 hidden key={galaxy.id}>full</h1>
                        }
                    })}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return { 
        token: state.user.jwt,
        username: state.user.username,
        galaxies: state.galaxies,
        roomStatus: state.galaxy.status
      }
  }
  
  export default connect(mapStateToProps)(Lobby)