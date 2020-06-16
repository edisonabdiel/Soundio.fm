import React from 'react';
import FeaturedMix from './FeaturedMix/FeaturedMix';
import Header from './Header/Header';
import AudioPlyer from './AudioPlayer/AudioPlayer';

class App extends React.Component {
  render() {
    return (
      <div >
        <div>
      <FeaturedMix/>
        </div>
        <div>
          <Header/>
          {/* {Routed Page} */}
        </div>
        <div>
        <AudioPlyer/>
        </div>
      </div>
    );
  }
  
}

export default App;
