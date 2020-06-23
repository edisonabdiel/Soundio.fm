/*global Mixcloud*/
import React from 'react';
import FeaturedMix from './FeaturedMix/FeaturedMix';
import Header from './Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'; 

const Home = () => 
    <div>
      <h2>Home</h2>
    </div>


const Archive = () => 
    <div>
      <h2>Archive</h2>
    </div>

const About = () => 
    <div>
      <h2>About</h2>
    </div>
  

class App extends React.Component {

  state = {
    playing: false,
    widgetReady: false,
    currentMix: ''
  }

  mountAudio = async () => {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready;
    this.setState({
      widgetReady: true
    })
    this.widget.events.pause.on(() => 
      this.setState({
        playing: false
      })
    );
    this.widget.events.play.on(() => 
      this.setState({
        playing: true
      })
    );
  };

  componentDidMount(){
    this.mountAudio()
  };

  togglePlay = () => {
    this.widget.togglePlay();
  };

  playMix = mixName => {
    this.setState({
      currentMix: mixName
    })
    this.widget.load(mixName, true)
    console.log(this.state)
  };

  render() {
    return (
      <Router>
      <div>
        <div className="flex-l justify-end">
      <FeaturedMix/>
        </div>
        <div className="w-50-l relative z-1">
          <Header/>
            <div>
              <button onClick={this.togglePlay}>
                {this.state.playing ? 'Pause' : 'Play'}
              </button>
            </div>
            <div>
              <h2>{this.state.currentMix}</h2>
              <button onClick={() => this.playMix("/Dekmantel/dekmantel-podcast-007-mick-wills/")}>Mick Wills</button>
            </div>
            <div>
              <button onClick={() => this.playMix("/NTSRadio/reverie-28th-november-2014/")}>Beau Wanzer</button>
            </div>
            <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route path="/archive" component={Archive}>
          </Route>
          <Route path="/about" component={About}>
          </Route>
        </Switch>
        </div>
        <div>
            <iframe
              className="db fixed bottom-0 z-5"
              width="100%"
              title= "mix"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Flylradio%2Fnick-klein-111116%2F"
              frameBorder="0" 
              ref={player => (this.player = player)}
              />
        </div>
        </div>
        </Router>
    );
  }
  
}

export default App;
