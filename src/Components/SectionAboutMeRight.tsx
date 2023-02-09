import React from "react";
import * as Icon from 'react-icons/ci';
import { AnimatePresence, motion } from 'framer-motion';


function openInstagram() {
    window.open('https://www.instagram.com/martanmatej/?hl=cs');
}
function openLinkedIn() {
    window.open('https://www.linkedin.com/in/mat%C4%9Bj-martan-a10b74254/');
}

function SectionAboutMeRight() {
    return <div style={{ width: '40.5%', backgroundColor: '#121212', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.a
            whileHover={{ scale: 1.4 }}
            style={{paddingRight: '5%'}}
        >
            <p style={{ paddingBottom: '5%', paddingRight: '5%' }} onClick={() => { openInstagram() }}>
                <Icon.CiInstagram style={{ boxShadow: "5px 5px 5px 3px #000" }} color="white" size={52} />
            </p>
        </motion.a>
        <motion.a
            whileHover={{ scale: 1.4 }}

        >
            <p style={{ paddingBottom: '5%', paddingLeft: '5%' }} onClick={() => { openLinkedIn() }}>
                <Icon.CiGlobe style={{ boxShadow: "5px 5px 5px 3px #000" }} color='white' size={52} />
            </p>
        </motion.a>

    </div>
}

export default SectionAboutMeRight;