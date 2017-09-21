import React, {Component} from 'react'
var {connect} = require('react-redux')

class Profile extends Component {
  constructor(){
    super()
  }
  compnentWillEnter(){
    console.log(this.props, 'will mount')
  }
  componentWillUnmount(){
    console.log(this.props, 'will unmount')
  }


  render () {
    let {empty, name="", description="", pictureUrl=""} = this.props
    if(empty) {
      name = ''
      description = ''
      pictureUrl = 'headshot1'
    }
    return (
      <article className='mini-post' style={{visibility: `${empty ? 'hidden': 'visible'}`, transition: 'all 1s ease-in', left: `${this.props.id*33.33}%`}} >
        <div className='row'>
          <div className='7u'>
            <a href='#' className='image profile-image'><img src={`images/${pictureUrl}.jpg`} alt='' /></a>
          </div>
        <div className='5u'>
          <h5>{name}</h5>
          <div className='description'>{description}</div>
        </div>
        </div>
      </article>
    )
  }
}

export default connect()(Profile)
