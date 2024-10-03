import React from 'react';
import Resume from '../../assets/REVATI POL RESUME.pdf';

function CTA(props) {
    return (
        <div className='cta'>
            <a href={Resume} download className='btn'> Get Resume </a>
            <a href="#contact" className='btn btn-primary'> Let's talk! </a>
        </div>
    );
}

export default CTA;