
import React from 'react'
import { Link } from 'react-router'

/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    // props should include week.num to say week number
    // props should have week.dates to say dates of the week
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="viewAll">
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to={`/feedback/week/${+this.props.weekId - 1}`}>
                <button disabled={+this.props.weekId === 1} className="week-button">
                  ❮  </button>
              </Link>
            </li>
            <li id='currentWeek'> {this.props.title} </li>
            <li>
              <Link to={`/feedback/week/${+this.props.weekId + 1}`}>
                <button disabled={+this.props.weekId > 6} className="week-button">
                  ❯
                </button>
              </Link>
            </li>
          </ul>
          <div className="viewAll">
            <Link to="/feedback/week/8">
              <button id="viewAll" >View All</button>
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
