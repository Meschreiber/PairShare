import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'

import firebase from 'APP/fire'

// Get the auth API from Firebase.
const auth = firebase.auth()

/* -----------------    COMPONENT     ------------------ */

const Viewbar = () =>
  <div>
    <ul className="viewbar">
      <li>
        <Link to="/form/aalexander" activeClassName="active">Pair Feedback</Link>
      </li>
      <li>
        <Link to="/reflection/mschreiber" activeClassName="active">Self Reflection</Link>
      </li>
      <li>
        <Link to="/feedback/week/1" activeClassName="active">Summary</Link>
      </li>
    </ul>
  </div>

export default Viewbar
