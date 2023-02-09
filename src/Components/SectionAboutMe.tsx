import React from 'react';
import Font from 'react-font';

const backgroundPhoto = {
    1: require('../photoSRC/IMG_0353.jpg'),
    2: require('../photoSRC/IMG_7120.jpg'),
    3: require('../photoSRC/IMG_7120.jpg'),
    4: require('../photoSRC/IMG_7120.jpg'),
};
var selectedPhoto = backgroundPhoto[1];

var number = 1;



function SectionAboutMe() {
    return <div style={{ width: '58.5%', height: '100%', backgroundColor: `#10100e`, alignSelf: 'center', padding: '4%' }}>
        <Font family='Catamaran'>
            <p style={{ fontSize: 22, width: '65%', height: '50%', marginLeft: '15%', padding: '2%', color: 'white',boxShadow: "5px 5px 5px 3px #000", userSelect:'none' }}>Jsem 18 letý web/mobile developer, fotograf či videomaker. Zabývám se převážně mobilním develompmentem, ale nebráním se webu. Zda jsem tě zaujal a měl by jsi zájem o spolupráci, tak dej vědět.</p>
        </Font>
    </div>
}

export default SectionAboutMe;