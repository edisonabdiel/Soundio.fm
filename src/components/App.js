import React from 'react';
import FeaturedMix from './FeaturedMix/FeaturedMix';
import Header from './Header/Header';
import AudioPlyer from './AudioPlayer/AudioPlayer';
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
  render() {
    return (
      <Router>
      <div>
        <div className="flex-l justify-end">
      <FeaturedMix/>
        </div>
        <div className="w-50-l relative z-1">
          <Header/>
            {/* {Routed Page} */}
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
        <AudioPlyer/>
        </div>
        </div>
        </Router>
    );
  }
  
}

export default App;
