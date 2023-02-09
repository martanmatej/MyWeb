import React, { useRef, useState } from 'react';
import HeaderComponent from './Components/HeaderComponent';
import SectionPhotoComponent from './Components/SectionPhotoComponent';
import SectionAboutMe from './Components/SectionAboutMe';
import SectionAboutMeRight from './Components/SectionAboutMeRight';
import './App.css';
import { useEffect } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';


function App() {
  const header = useRef<HTMLDivElement>(null);
  const footer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const [height, setHeight] = useState(window.innerHeight);
  const [finalHeight, setFinalHeight] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setHeight(window.innerHeight);
    }

    //console.log('HEY:: ' + JSON.stringify(scrollYProgress));
    window.addEventListener('resize', handleWindowResize);

    if (header && footer !== null) {
      const headerHeight = header.current?.clientHeight;
      const footerHeight = footer.current?.clientHeight;


    }
  }, [])

  return (
    <div className="App" style={{ backgroundColor: `#0E0E10` }}>
      <header className="App-header" ref={header}>
        <HeaderComponent />
      </header>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <section className='App-section'>
          <SectionPhotoComponent />
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}

      >
        <section style={{ width: '100%', flexDirection: 'row', display: 'flex', paddingBottom: '0%' }}>
          <SectionAboutMe />
          <SectionAboutMeRight />
        </section>
      </motion.div>
      <motion.div
        ref={footer}
        style={{width: '100%', bottom: 0, left: 0,  overflow: 'hidden', position: 'relative', backgroundColor: '#050505'}}
        
      >
        <p style={{color: '#F5F5F5', fontSize: 15, padding: 10, width: '100%'}}>Copyright © 2023 Matěj Martan. Všechna práva vyhrazena.</p>
      </motion.div>
    </div>
  );
}

export default App;
