import React from 'react'

export default class extends React.Component {
  cStarClick = (evt) => {
    const rating = evt.target.getAttribute('value')
    // evt.target.setAttribute('class', 'clicked')
    this.setStars(rating, 'communication')
    this.setState({ reflection: { ...this.state.reflection, communication: rating } })
  }

  nStarClick = (evt) => {
    const rating = evt.target.getAttribute('value')
    // evt.target.setAttribute('class', 'clicked')
    this.setStars(rating, 'playsNice')
    this.setState({ reflection: { ...this.state.reflection, playsNice: rating } })
  }

  pStarClick = (evt) => {
    const rating = evt.target.getAttribute('value')
    // evt.target.setAttribute('class', 'clicked')
    this.setStars(rating, 'prepared')
    this.setState({ reflection: { ...this.state.reflection, prepared: rating } })
  }

  iStarClick = (evt) => {
    const rating = evt.target.getAttribute('value')
    // evt.target.setAttribute('class', 'clicked')
    this.setStars(rating, 'independent')
    this.setState({ reflection: { ...this.state.reflection, independent: rating } })
  }

  oStarClick = (evt) => {
    const rating = evt.target.getAttribute('value')
    this.setStars(rating, 'open')
    this.setState({ reflection: { ...this.state.reflection, open: rating } })
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
    this.setState({ reflection: { ...this.state.reflection, strength: evt.target.value } })
  }

  writeImprovement = (evt) => {
    this.setState({ reflection: { ...this.state.reflection, improvement: evt.target.value } })
  }

  render() {
    const reflection = this.state
    return (
      <div className="formContainer">
        <header id="header" className="info">
          <h2>Rate Your Pairing Experience</h2>
          <div id="info">
            <p>Please use this opportunity to give constructive criticism to your partner.  All feedback can be shared anonymously if selected.</p>
          </div>
        </header>
        <form>
          <ul id="form">
            <p> Rate your partner on the following skills and qualities from 0 to 5. Ratings are always shared anonymously. </p>
            <li id="communication" className="starRating">
              <fieldset>
                <legend >General Communication Skills</legend>
                <div className="field rating clearfix">
                  <input type="hidden" />
                  <span onClick={this.cStarClick} className="communication star clickable" value="1" >★</span>
                  <span onClick={this.cStarClick} className="communication star clickable" value="2" >★</span>
                  <span onClick={this.cStarClick} className="communication star clickable" value="3" >★</span>
                  <span onClick={this.cStarClick} className="communication star clickable" value="4" >★</span>
                  <span onClick={this.cStarClick} className="communication star clickable" value="5" >★</span>
                </div>
              </fieldset>
            </li>

            <li id="plays-nice" className="starRating">
              <fieldset>
                <legend >Cooperative and Pleasant to Work With</legend>
                <div className="field rating clearfix">
                  <input type="hidden" />
                  <span onClick={this.nStarClick} className="playsNice star clickable" value="1" >★</span>
                  <span onClick={this.nStarClick} className="playsNice star clickable" value="2" >★</span>
                  <span onClick={this.nStarClick} className="playsNice star clickable" value="3" >★</span>
                  <span onClick={this.nStarClick} className="playsNice star clickable" value="4" >★</span>
                  <span onClick={this.nStarClick} className="playsNice star clickable" value="5" >★</span>

                </div>
              </fieldset>
            </li>

            <li id="open" className="starRating">
              <fieldset>
                <legend >Open to New Ideas</legend>
                <div className="field rating clearfix">
                  <input type="hidden" />
                  <span onClick={this.oStarClick} className="open star clickable" value="1" >★</span>
                  <span onClick={this.oStarClick} className="open star clickable" value="2" >★</span>
                  <span onClick={this.oStarClick} className="open star clickable" value="3" >★</span>
                  <span onClick={this.oStarClick} className="open star clickable" value="4" >★</span>
                  <span onClick={this.oStarClick} className="open star clickable" value="5" >★</span>
                </div>
              </fieldset>
            </li>

            <li id="prepared" className="starRating">
              <fieldset>
                <legend >Prepared and Organized</legend>
                <div className="field rating clearfix">
                  <input type="hidden" />
                  <span onClick={this.pStarClick} className="prepared star clickable" value="1" >★</span>
                  <span onClick={this.pStarClick} className="prepared star clickable" value="2" >★</span>
                  <span onClick={this.pStarClick} className="prepared star clickable" value="3" >★</span>
                  <span onClick={this.pStarClick} className="prepared star clickable" value="4" >★</span>
                  <span onClick={this.pStarClick} className="prepared star clickable" value="5" >★</span>
                </div>
              </fieldset>
            </li>

            <li id="independent" className="starRating">
              <fieldset>
                <legend >Driven and Independent</legend>
                <div className="field rating clearfix">
                  <input type="hidden" />
                  <span onClick={this.iStarClick} className="independent star clickable" value="1" >★</span>
                  <span onClick={this.iStarClick} className="independent star clickable" value="2" >★</span>
                  <span onClick={this.iStarClick} className="independent star clickable" value="3" >★</span>
                  <span onClick={this.iStarClick} className="independent star clickable" value="4" >★</span>
                  <span onClick={this.iStarClick} className="independent star clickable" value="5" >★</span>
                </div>
              </fieldset>
            </li>

            <br />
            <li id="strengths">
              <label className="commentary">List one of your partner's greatest strengths as a pair programmer.  This can include either qualities and/or technical skills.</label>
              <div>
                <textarea
                  className="field textarea medium"
                  rows="10"
                  cols="90"
                  onChange={this.writeStrength}
                />
              </div>
            </li>

            <p>Would you like to share this feedback (strengths) anonymously or non-anonymously?</p>
            <div className="input">
              <label>
                <input type="radio" />Anonymously
                </label>
            </div>
            <div className="input">
              <label>
                <input type="radio" />Put my name on it!
                </label>

            </div>
            <br />
            <br />
            <li id="improvements" className="notranslate">
              <label className="commentary">Give one specific suggestion on how they could improve as a developer and/or team member.</label>
              <div>
                <textarea
                  className="field textarea medium"
                  rows="10"
                  cols="90"
                  onChange={this.writeImprovement}
                />
              </div>

              <p >Would you like to share this feedback (areas of improvement) anonymously or non-anonymously?</p>
              <div className="input">
                <label>
                  <input type="radio" />Anonymously
                </label>

              </div>
              <div className="input">
                <label>
                  <input type="radio" />Put my name on it!
                </label>

              </div>
            </li>

            <li>
              <p >Please tell us if you would like to pair with Allison Alexander in the future. We will keep this confidential.</p>
              <div className="input">
                <label>
                  <input type="radio" />Yes, please!
            </label>
              </div>
              <div className="input">
                <label>
                  <input type="radio" />
                  I don't mind either way.
            </label>

              </div>
              <div className="input">
                <label>
                  <input type="radio" />I'd prefer not to, thanks.</label>
              </div>
            </li>
          </ul>
          <div className="input">
            <label><input type="checkbox" />I want to talk to someone about this pairing</label>
          </div>
          <button className="btn btn-primary submit">Submit</button>
        </form>
      </div >
    )
  }
}
