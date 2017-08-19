import React from 'react'
import { Link } from 'react-router'
import Navbar from './Navbar'
// import RadarChart from './Radar'
import Comments from './Comments'
import RadarChart from './RadarChart'

import { data, summary } from './data'

import firebase from 'APP/fire'

//var database = firebase.database()
//firebase.database().ref('feedback/').set(data)

var tooltipBar = function (x, y0, y) {
  let characteristic = ''
  switch (x) {
    case 'C':
      characteristic = 'communication'
      break
    case 'N':
      characteristic = 'plays nice'
      break
    case 'P':
      characteristic = 'prepared'
      break
    case 'I':
      characteristic = 'independent'
      break
    case 'O':
      characteristic = 'open'
      break
    default:
      break
  }
  return characteristic + ": " + y;
}

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
            <br />
            <RadarChart />
            <div id="legend">
              <span id="peer">■ Peer Averages</span>
              <span id="self">■ Self</span>
            </div>
          </div>

        </div>
        <div />
        <div id="allComments">
          <h3>Strengths and Contributions</h3>
          <div className="comments">
            <Comments comments={theWeek.strengthComments} />
          </div>
          <br />
          <h3>Areas for improvement</h3>
          <div className="comments">
            <Comments comments={theWeek.improvementComments} />
          </div>
        </div>
      </div>
    </div>
  )
}



