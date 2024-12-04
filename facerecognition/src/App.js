import React, { Component} from 'react'
import './App.css';
import Navigation from './Componenets/Navigation/Navigation';
import Logo from './Componenets/Logo/Logo';
import ImageLinkForm from './Componenets/ImageLinkForm/ImageLinkForm';
import Rank from './Componenets/Rank/Rank';
import ParticlesBg from 'particles-bg'




class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticlesBg className='particles' color='#ffffff' type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {
          //
          // 
          // <FaceRecognition />
        }
      </div>
    );
  }
  }
  

export default App;
