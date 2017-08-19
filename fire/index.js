const firebase = require('firebase')

// -- // -- // -- // Firebase Config // -- // -- // -- //
const config = {
  apiKey: 'AIzaSyB7k8tZPMn-7aSHg7vB2sd4OMquaP1rCv4',
  authDomain: 'pairshare-6ebd6.firebaseapp.com',
  databaseURL: 'https://pairshare-6ebd6.firebaseio.com',
  projectId: 'pairshare-6ebd6',
  storageBucket: 'pairshare-6ebd6.appspot.com',
  messagingSenderId: '313945738555'
}
// -- // -- // -- // -- // -- // -- // -- // -- // -- //

// Initialize the app, but make sure to do it only once.
//   (We need this for the tests. The test runner busts the require
//   cache when in watch mode; this will cause us to evaluate this
//   file multiple times. Without this protection, we would try to
//   initialize the app again, which causes Firebase to throw.
//
//   This is why global state makes a sad panda.)
firebase.__bonesApp || (firebase.__bonesApp = firebase.initializeApp(config))

module.exports = firebase
