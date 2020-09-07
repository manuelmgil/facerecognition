import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return (
        <div >
            <p className='f3'>
                {'This is an smart magical app that will detect faces in any photo you give it!'}
            </p>
            <div className='center'>
                <div className=' form center pa4 br3 shadow-5'>
                    <input className='fa4 pa2 w-70 center' type='text' />
                    <button className='w-30 grow link ph3 pv2 dib white bg-light-purple '>Detect!</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;