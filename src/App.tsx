import React from 'react';
import HeaderComponent from './Components/HeaderComponent';
import SectionPhotoComponent from './Components/SectionPhotoComponent';
import SectionAboutMe from'./Components/SectionAboutMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent/>
      </header>
      <section>
        <SectionPhotoComponent/>
        <SectionAboutMe/>
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
