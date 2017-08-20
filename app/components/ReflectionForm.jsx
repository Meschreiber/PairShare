import React from 'react'
import firebase from 'APP/fire'
var database = firebase.database()

const reflections = {
  communication: 0,
  playsNice: 0,
  prepared: 0,
  open: 0,
  independent: 0,
  strength: '',
  improvement: ''
}

export default class extends React.Component {
  constructor(props) {
    super(props)
    // this.props.fireRef.set(reflections)
    this.state = {
      communication: 0,
      playsNice: 0,
      prepared: 0,
      open: 0,
      independent: 0,
      strength: '',
      improvement: ''
    }
  }

  cStarClick = (evt) => {
    const rating = evt.target.getAttribute('value')
    // evt.target.setAttribute('class', 'clicked')
    this.setStars(rating, 'communication')
    this.setState({ communication: rating })
  }

  nStarClick = (evt) => {
    const rating = evt.target.getAttribute('value')
    // evt.target.setAttribute('class', 'clicked')
    this.setStars(rating, 'playsNice')
    this.setState({ playsNice: rating })
  }

  pStarClick = (evt) => {
    const rating = evt.target.getAttribute('value')
    // evt.target.setAttribute('class', 'clicked')
    this.setStars(rating, 'prepared')
    this.setState({ prepared: rating })
  }

  iStarClick = (evt) => {
    const rating = evt.target.getAttribute('value')
    // evt.target.setAttribute('class', 'clicked')
    this.setStars(rating, 'independent')
    this.setState({ independent: rating })
  }

  oStarClick = (evt) => {
    const rating = evt.target.getAttribute('value')
    // evt.target.setAttribute('class', 'clicked')
    this.setStars(rating, 'open')
    this.setState({ open: rating })
  }

  setStars = (num, className) => {
    const classes = className + ' star'
    var stars = document.getElementsByClassName(classes)
    for (var i = 0; i < stars.length; i++) {
      if (stars[i].getAttribute('value') <= num) {
        stars[i].classList.remove('clickable')
        stars[i].className += ' clicked '
      } else {
        stars[i].classList.remove('clicked')
        stars[i].className += ' clickable '
      }
    }
  }

  writeStrength = (evt) => {
    this.setState({ strength: evt.target.value })
  }

  writeImprovement = (evt) => {
    this.setState({ improvement: evt.target.value })
  }

  postNewReflection = (evt) => {
    evt.preventDefault()
    window.alert('Thank you for submitting your reflection. It has been received.  You may edit it until Sunday 11:59 PM')
    // var submitButton = document.getElementsByClassName('btn btn-primary mt1')
    // submitButton.innerHTML = 'Edit'

    // A post entry --> will eventually want a uid to include in the part of the db for that user
    // var postData = {date: new Date(), reflection: this.state.reflection}
    // // Get a key for a new Post
    // var newPostKey = this.props.fireRef.push().key
    // // Write a new post's data simultaneously in the reflections list
    // var updates = {}
    // updates[newPostKey] = postData
    // // Include the line below when there are multiple users?
    // // updates['/user-posts/' + uid + '/' + newPostKey] = postData
    // return this.props.fireRef.update(updates)

    this.props.fireRef.set(this.state)
  }

  render() {
    const reflection = this.state
    return (
      <div className="formContainer">
        <header id="header" className="info">
          <h2>Self Reflection Form</h2>
          <div id="info">
            <p>Please use this opportunity reflect on how you contributed to your team/pairing this week.</p>
          </div>
        </header>
        <form onSubmit={this.postNewReflection}>
          <ul id="form">
            <p> Rate yourself on the following skills and qualities from 0 to 5.</p>
            <li id="communication" className="starRating">
              <fieldset>
                <legend >General Communication Skills</legend>
                <div className="field rating clearfix">
                  <input type="hidden" />
                  <span onClick={this.cStarClick} className={reflection.communication >= 1 ? "communication star clicked" : "communication star clickable" } value="1" >★</span>
                  <span onClick={this.cStarClick} className={reflection.communication >= 2 ? "communication star clicked" : "communication star clickable" } value="2" >★</span>
                  <span onClick={this.cStarClick} className={reflection.communication >= 3 ? "communication star clicked" : "communication star clickable" } value="3" >★</span>
                  <span onClick={this.cStarClick} className={reflection.communication >= 4 ? "communication star clicked" : "communication star clickable" } value="4" >★</span>
                  <span onClick={this.cStarClick} className={reflection.communication >= 5 ? "communication star clicked" : "communication star clickable" } value="5" >★</span>
                </div>
              </fieldset>
            </li>

            <li id="plays-nice" className="starRating">
              <fieldset>
                <legend >Cooperative and Pleasant to Work With</legend>
                <div className="field rating clearfix">
                  <input type="hidden" />
                  <span onClick={this.nStarClick} className={reflection.playsNice >= 1 ? "playsNice star clicked" : "playsNice star clickable" } value="1" >★</span>
                  <span onClick={this.nStarClick} className={reflection.playsNice >= 2 ? "playsNice star clicked" : "playsNice star clickable" } value="2" >★</span>
                  <span onClick={this.nStarClick} className={reflection.playsNice >= 3 ? "playsNice star clicked" : "playsNice star clickable" } value="3" >★</span>
                  <span onClick={this.nStarClick} className={reflection.playsNice >= 4 ? "playsNice star clicked" : "playsNice star clickable" } value="4" >★</span>
                  <span onClick={this.nStarClick} className={reflection.playsNice >= 5 ? "playsNice star clicked" : "playsNice star clickable" } value="5" >★</span>

                </div>
              </fieldset>
            </li>

            <li id="open" className="starRating">
              <fieldset>
                <legend >Open to New Ideas</legend>
                <div className="field rating clearfix">
                  <input type="hidden" />
                  <span onClick={this.oStarClick} className={reflection.open >= 1 ? "open star clicked" : "open star clickable" } value="1" >★</span>
                  <span onClick={this.oStarClick} className={reflection.open >= 2 ? "open star clicked" : "open star clickable" } value="2" >★</span>
                  <span onClick={this.oStarClick} className={reflection.open >= 3 ? "open star clicked" : "open star clickable" } value="3" >★</span>
                  <span onClick={this.oStarClick} className={reflection.open >= 4 ? "open star clicked" : "open star clickable" } value="4" >★</span>
                  <span onClick={this.oStarClick} className={reflection.open >= 5 ? "open star clicked" : "open star clickable" } value="5" >★</span>
                </div>
              </fieldset>
            </li>

            <li id="prepared" className="starRating">
              <fieldset>
                <legend >Prepared and Organized</legend>
                <div className="field rating clearfix">
                  <input type="hidden" />
                  <span onClick={this.pStarClick} className={reflection.prepared >= 1 ? "prepared star clicked" : "prepared star clickable" } value="1" >★</span>
                  <span onClick={this.pStarClick} className={reflection.prepared >= 2 ? "prepared star clicked" : "prepared star clickable" } value="2" >★</span>
                  <span onClick={this.pStarClick} className={reflection.prepared >= 3 ? "prepared star clicked" : "prepared star clickable" } value="3" >★</span>
                  <span onClick={this.pStarClick} className={reflection.prepared >= 4 ? "prepared star clicked" : "prepared star clickable" } value="4" >★</span>
                  <span onClick={this.pStarClick} className={reflection.prepared >= 5 ? "prepared star clicked" : "prepared star clickable" } value="5" >★</span>
                </div>
              </fieldset>
            </li>

            <li id="independent" className="starRating">
              <fieldset>
                <legend >Driven and Independent</legend>
                <div className="field rating clearfix">
                  <input type="hidden" />
                  <span onClick={this.iStarClick} className={reflection.independent >= 1 ? "independent star clicked" : "independent star clickable" } value="1" >★</span>
                  <span onClick={this.iStarClick} className={reflection.independent >= 2 ? "independent star clicked" : "independent star clickable" } value="2" >★</span>
                  <span onClick={this.iStarClick} className={reflection.independent >= 3 ? "independent star clicked" : "independent star clickable" } value="3" >★</span>
                  <span onClick={this.iStarClick} className={reflection.independent >= 4 ? "independent star clicked" : "independent star clickable" } value="4" >★</span>
                  <span onClick={this.iStarClick} className={reflection.independent >= 5 ? "independent star clicked" : "independent star clickable" } value="5" >★</span>
                </div>
              </fieldset>
            </li>
            
            <li id="strengths">
              <label className="commentary">What was one of your greatest strengths as a pair programmer this week?  This can include either qualities and/or technical skills.</label>
              <div>
                <textarea
                  className="field textarea medium"
                  rows="10"
                  cols="150"
                  onChange={this.writeStrength}
                  value={reflection.strength}
                />
              </div>
            </li>
            
            <li id="improvements" className="notranslate">
              <label className="commentary">What is one thing you would like to improve upon or learn about for next week?</label>
              <div>
                <textarea
                  className="field textarea medium"
                  rows="10"
                  cols="150"
                  onChange={this.writeImprovement}
                  value={reflection.improvement}
                />
              </div>
            </li>
            <button className="btn btn-primary submit">Submit</button>
          </ul>
        </form>
      </div>
    )
  }
}

