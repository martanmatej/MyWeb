import React from 'react';

const photos = {
    first: require('../photoSRC/IMG_7120-2.jpg'),
    second: require('../photoSRC/IMG_7117-2.jpg'),
    third: require('../photoSRC/IMG_7113-2.jpg'),
}

function SectionPhotoComponent() {
    return <div style={{ flexDirection: 'row', display: 'flex', width: '100%', alignItems: 'flex-start', backgroundColor: '#121212' }}>
        <div>
            <img
                src={photos.first}
                width={'99%'}
                height={'100%'}
                style={{pointerEvents: 'none'}}
            />
        </div>
        <div>
            <img
                src={photos.second}
                width={'99%'}
                height={'100%'}
                style={{pointerEvents: 'none'}}
            />
        </div>
        <div>
            <img
                src={photos.third}
                width={'99%'}
                height={'100%'}
                style={{pointerEvents: 'none'}}
            />
        </div>
    </div>
}

export default SectionPhotoComponent;