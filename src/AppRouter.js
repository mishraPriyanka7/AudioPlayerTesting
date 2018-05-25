import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'

// import Recorder from './AudioRecorderComponent/recorder/Recorder'
// import Player from './AudioRecorderComponent/player/Player'

import Recorder from './AudioRecorderByShinetechchina/recorder/Recorder'
import Player from './AudioRecorderByShinetechchina/player/Player'


export default class AppRouter extends Component {
  render() {
    return (

      <Router>
        <Scene key='recorder' title='Recorder' component={Recorder} />
        {/* <Scene key='player' title='Player' component={Player} /> */}
      </Router>
    )
  }
}
