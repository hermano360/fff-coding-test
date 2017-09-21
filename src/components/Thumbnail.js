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
    console.log(this.props)
    dispatch(actions.addProfile(id, name, description, pictureUrl))
    dispatch(actions.updateLastClickedThumbnail(id))
  }

  render () {
    let {pictureUrl, id, lastThumbNail } = this.props
    return (
      <div className={`1u thumbnail-row thumbnail-absolute ${lastThumbNail===id ? `tn-position-${id}` : ''}`}
        style={{left:`${id*100/12}%`}}>
        <span className="image fit thumbnail">
          <img src={`images/${pictureUrl}.jpg`} alt="" onClick={()=> this.sendThumbnailToState()}/>
        </span>
      </div>
    )
  }
}

export default connect(  (state) => {
    return {
      profiles: state.profiles,
      lastThumbNail: state.lastThumbNail
    }
  })(Thumbnail)
