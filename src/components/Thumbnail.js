import React, {Component} from 'react'
var {connect} = require('react-redux')
const actions = require('../actions/actions.js')

class Thumbnail extends Component {
  constructor(){
    super()
    this.sendThumbnailToState = this.sendThumbnailToState.bind(this);
  }

  sendThumbnailToState() {
    let {dispatch, name, pictureUrl, profiles, description, id} = this.props
    dispatch(actions.addProfile(id, name, description, pictureUrl))
    dispatch(actions.updateLastClickedThumbnail(id))
  }

  render () {
    let {pictureUrl, id, lastThumbNail } = this.props
    console.log(id, pictureUrl, id, lastThumbNail)
    if(pictureUrl){
      return (
        <div id="thumbnail-row" className={`1u thumbnail-absolute ${lastThumbNail===id ? `tn-position-${id}` : ''}`}
          style={{left:`${(id*100/12)%100}%`, top:`${Math.floor(id/12)*30}%`}}>
          <span className="image fit thumbnail">
            <img src={`images/${pictureUrl}.jpg`} alt="" onClick={()=> this.sendThumbnailToState()}/>
          </span>
        </div>
      )
    }else {
      return (
        <div></div>
      )
    }

  }
}

export default connect(  (state) => {
    return {
      profiles: state.profiles,
      lastThumbNail: state.lastThumbNail
    }
  })(Thumbnail)
