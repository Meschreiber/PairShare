import React from 'react'
import { Link } from 'react-router'
import Navbar from './Navbar'
import Comments from './Comments'
import RadarChart from './RadarChart'

import { data, summary } from './data'

import firebase from 'APP/fire'

// var database = firebase.database()
// firebase.database().ref('feedback/').set(data)

/* -----------------    COMPONENT     ------------------ */

export default (props) => {
  const weekId = props.params.weekId - 1
  const theWeek = weekId === data.length ? summary : data[weekId]
  return (
    <div>
      <Navbar weekId={props.params.weekId} title={theWeek.name} />
      <div id="main">
        <div className="chartWrapper">
          <div id="radar">
            <h3>Peer and Self Evaluations</h3>
            <RadarChart theWeek={theWeek} />
            <div id="legend">
            <span className="legend" >peer</span>
            <span className="legend" id="orange" >•</span>
            <span className="legend" >self</span>
            <span className="legend" id="blue" >•</span>
        </div>
          </div>
        </div>
        <div id="allComments">
          <div className="commentContainer">
            <h3>Strengths and Contributions</h3>
            <div className="comments">
              <Comments comments={theWeek.strengthComments} />
            </div>
          </div>
          <div className="commentContainer">
            <h3>Areas for improvement</h3>
            <div className="comments">
              <Comments comments={theWeek.improvementComments} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
