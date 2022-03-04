import React from 'react';

const Header = () => {
    function myFunction() {
        let x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    return (
        <div>
            <div className="top-nav">
                <a href="#home" className="active">Logo</a>
                <div id="myLinks">
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
                <a href="javascript:void(0);" className="icon" onClick={() => myFunction()}>
                    <i className="fa fa-bars"/>
                </a>
            </div>
        </div>
    );
};

export default Header;