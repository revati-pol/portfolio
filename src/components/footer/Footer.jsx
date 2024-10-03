import React from 'react';
import './footer.css';

function Footer(props) {
    return (
        <footer>
            <a href="#" className='footer__logo'> Revati Pol </a>

            <ul className='permalinks'>
                <li> <a href="#"> Home </a> </li>
                <li> <a href="#about"> About </a> </li>
                <li> <a href="#experience"> Skills </a> </li>
                <li> <a href="#portfolio"> Projects </a> </li>
                <li> <a href="#story"> Story </a> </li>
                <li> <a href="#contact"> Contact </a> </li>
            </ul>

            <div className="footer__copyright">
                <small> &copy; 2024 Revati Pol | All Rights Reserved </small>
            </div>
        </footer>
    );
}

export default Footer;