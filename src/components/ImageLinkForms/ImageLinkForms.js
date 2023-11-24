import React from 'react';
import 'tachyons';
import './ImageLinkForms.css'

const ImageLinkForms = () => {
    return (
        <div> {/* vh-100 makes it full height */}
            <p className='f3 center'>
                Abrakadabra!!! This brain has the ability to detect face in a given photo.
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-2'>
                    <input className='f4 pa2 w-70 center' type='text' />
                    <button className='buttoncolor w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForms;

// pa-padding
// br-border radius