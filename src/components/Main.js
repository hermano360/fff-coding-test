import React, {Component} from 'react'
var {connect} = require('react-redux')
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Profile from './Profile'
import Thumbnail from './Thumbnail'

import employeeDB from '../../api/employeeDB'


class Main extends Component {
  constructor(){
    super()
  }

  renderProfiles(){
    let {profiles} = this.props
    return profiles.map((profile, i) => {
      let {pictureUrl, name, description} = profile
      let empty = false
      if(profile.empty === true){
        pictureUrl = 'headshot0'
        name = ''
        description = ''
        empty = true
      }
      let classNamesTransitions = ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide']
      console.log(pictureUrl, name, description, i, profile)
      return (
        <article key={name} className={`mini-post ${classNamesTransitions[i]}`} style={{visibility: `${empty ? 'hidden': 'visible'}`}} >
          <div className='row'>
            <div className='7u'>
              <a href='#' className='image'><img src={`images/${pictureUrl}.jpg`} alt='' /></a>
            </div>
          <div className='5u'>
            <h5>{name}</h5>
            <div className='description'>{description}</div>
          </div>
          </div>
        </article>
      )
    })
  }

  renderThumbnails(){
    // simulating a DB
    const {employeeIDs, profileInformation} = employeeDB

    return employeeIDs.map((id) => {
      return (
        <Thumbnail key={id} {...profileInformation[id]} id={id} />
      )
    })
  }

  render () {
    return (
      <div id="wrapper">
        <div className='testSquare'></div>
        <div id="main">
          <section id="intro">
            <header>
              <h2>About Us</h2>
            </header>
          </section>
          <section>
            <div className="mini-posts">
                {this.renderProfiles()}
            </div>
          </section>
          <article className="post">
            <section>
              <div className="box alt">
                <div className="row uniform">
                  {this.renderThumbnails()}
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      profiles: state.profiles
    }
  }
)(Main)
