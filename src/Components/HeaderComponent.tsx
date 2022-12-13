import React from 'react';
import Font, { Text } from 'react-font';

function HeaderComponent() {
    return <div style={{ flexDirection: 'row', display: 'flex', width: '100%' }}>
        <Font family='Sacramento' >
            <p style={{paddingLeft: '10%'}}>Matěj Martan</p>
        </Font>
        <div id='RightSide' style={{ justifyContent: 'space-between', flexDirection: 'row', display: 'flex', paddingLeft: '73%', width: '28%', fontFamily: 'Jost', paddingTop: '1%'}}>
                <p>About me</p>
                <p>My work</p>
                <p>Socials</p>
        </div>
    </div>
}

export default HeaderComponent;