import React, {Component} from 'react'
var {connect} = require('react-redux')
const actions = require('../actions/actions.js')

class Thumbnail extends Component {
  constructor(){
    super()
  }

  sendThumbnailToState() {
    let {dispatch, name, pictureUrl, description, id} = this.props
    console.log(this.props)
    dispatch(actions.addProfile(id, name, description, pictureUrl))
  }

  render () {
    let {pictureUrl} = this.props
    return (
      <div className="1u">
        <span className="image fit thumbnail">
          <img src={`images/${pictureUrl}.jpg`} alt="" onClick={()=> this.sendThumbnailToState()}/>
        </span>
      </div>
    )
  }
}

export default connect()(Thumbnail)
