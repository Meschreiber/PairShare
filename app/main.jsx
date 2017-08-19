'use strict'
import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import FormIndex from './components/FormIndex'
import ReflectionFormIndex from './components/ReflectionFormIndex'
import FeedbackViz from './components/FeedbackViz'
import Viewbar from './components/Viewbar'

import firebase from 'APP/fire'

// Our root App component just renders a little frame with a nav
// and whatever children the router gave us.
const App = ({ children }) =>
<div>
  <div id='views'>
  <Viewbar/>
  </div>
  {/* Render our children (whatever the router gives us) */}
  {children}
</div>

render(
<Router history={browserHistory}>
  <Route path="/" component={App} >
    <IndexRoute component={ReflectionFormIndex} />
    <Route path="/feedback/week/:weekId" component={FeedbackViz} />
    <Route path="/form/:name" component={FormIndex} />
    <Route path="/reflection/:name" component={ReflectionFormIndex} />
  </Route>
</Router>,
document.getElementById('app')
)
