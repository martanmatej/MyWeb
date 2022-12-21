import React, { useState } from 'react';
import Font, { Text } from 'react-font';
import ReactModal from "react-modal";

function HeaderComponent() {
    
    const [isVisible, setIsVisible] = useState(false);
    
    return <div style={{ flexDirection: 'row', display: 'flex', width: '100%' }}>
        <Font family='Sacramento' >
            <p onDoubleClick={() => {setIsVisible(true)}} style={{paddingLeft: '10%'}}>Matěj Martan</p>
        </Font>
        <div>
            <ReactModal
                isOpen={isVisible}
                style={{content: {
                    width: '50%',
                    height: '50%',
                    top: '25%',
                    left: '25%',
                    background: 'linear-gradient(-31deg, #535353 88%, #202124 12%)',
                    color: 'white'
                }}}
            >
                <p style={{fontSizeAdjust: 1, paddingLeft: '2%'}} onClick={() => {setIsVisible(false)}}>X</p>
            </ReactModal>
        </div>
        <div id='RightSide' style={{ justifyContent: 'space-between', flexDirection: 'row', display: 'flex', paddingLeft: '73%', width: '28%', fontFamily: 'Jost', paddingTop: '1%'}}>
                <p style={{fontFamily: 'Tahoma'}}>About me</p>
                <p style={{fontFamily: 'Tahoma'}}>My work</p>
                <p style={{fontFamily: 'Tahoma'}}>Socials</p>
        </div>
    </div>
}

export default HeaderComponent;