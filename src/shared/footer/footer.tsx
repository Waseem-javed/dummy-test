
import React from 'react';

const Footer = () =>{
    return (
        <div className="footer fixed-bottom text-center bg-primary">
            <p className='pt-2 text-white'>Waseem javed copyright &copy; {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer;