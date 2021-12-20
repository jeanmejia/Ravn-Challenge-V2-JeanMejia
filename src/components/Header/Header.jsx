import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
function Header(){
    return(
        <div className="Ravn-bar" >
            <h4 style={{
                fontSize: "17px"}} >
                Ravn Star Wars Registry
                
            </h4>
        </div>
    );
}
export default Header;