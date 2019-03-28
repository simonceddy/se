import React, { Component } from 'react';
//import Rodal from 'rodal';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AppRoutes from './routes';
import Footer from './components/Footer';
//import SettingsButton from './components/SettingsButton';
//import Settings from './components/Settings';
//import 'rodal/lib/rodal.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: 'default',
      settingsVisible: false,
    }

/*     this.selectTheme = this.selectTheme.bind(this);
    this.hideSettings = this.hideSettings.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this); */
  }
/* 
  selectTheme(event) {
    console.log(event);
  }

  hideSettings() {
    this.setState({
      settingsVisible: false
    });
  }

  toggleSettings() {
    //console.log(this.state.settingsVisible);
    this.setState({
      settingsVisible: !this.state.settingsVisible
    });
  } */

  render() {
    return (
      <div className="app flex flex-col">
        <Header />
        <Navbar />
        <div className="flex-1 app-content m-4">
          <AppRoutes />
          {/* <Rodal
            visible={this.state.settingsVisible}
            onClose={this.hideSettings}
            closeOnEsc={true}
            duration={200}
          >
            <Settings
              handlers={{
                theme: this.selectTheme
              }}
            />
          </Rodal> */}
        </div>
        <Footer />
        {/* <SettingsButton toggle={this.toggleSettings}/> */}
        
      </div>
    );
  }
}

export default App;
