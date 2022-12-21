import React from 'react';
import HeaderComponent from './Components/HeaderComponent';
import SectionPhotoComponent from './Components/SectionPhotoComponent';
import SectionAboutMe from './Components/SectionAboutMe';
import SectionAboutMeRight from './Components/SectionAboutMeRight';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent />
      </header>
      <section className='App-section'>
        <SectionPhotoComponent />
      </section>
      <section style={{width: '100%', flexDirection: 'row', display: 'flex'}}>
        <SectionAboutMe />
        <SectionAboutMeRight/>
      </section>
      <section>
        <p>yddd</p>
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
