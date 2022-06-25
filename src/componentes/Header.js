import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
const Header = ({viewReady, changeViewReady}) => {
    const toggleViewReady = () =>{
        changeViewReady(!viewReady);
    }
    return (  
        <header className='header'>
            <h1 className='header__title'>Task App</h1>
            {viewReady ?
                <button className='header__button' onClick={()=> toggleViewReady()}>No view Ready
                    <FontAwesomeIcon icon={faEyeSlash} className='header__icon-button'></FontAwesomeIcon>
                </button>
            :
                <button className='header__button' onClick={()=> toggleViewReady()}>view Ready
                    <FontAwesomeIcon icon={faEye} className='header__icon-button'></FontAwesomeIcon>
                </button>
            }
            
        </header>
    );
}
 
export default Header;