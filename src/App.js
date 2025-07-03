import React, { Component } from 'react';
import Header from './components/header';
import Song from './components/song';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log("La app se ha cargado correctamente");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="song-list">
          <Song title="Let It Be" artist="The Beatles" duration="3:50" />
          <Song title="Blinding Lights" artist="The Weeknd" duration="3:20" />
          <Song title="Bohemian Rhapsody" artist="Queen" duration="5:55" />
          <Song title="All Too Well (10 minute version) (Taylor's Version) (From the Vault)" artist="Taylor Swift" duration="10:00" />
        </div>
      </div>
    );
  }
}

export default App;
