import React from "react";

const Header = ({ changeDarkMode }) => {
    return (
        <>
            <div className="header">
                <h1>My Note</h1>
                <button onClick={() => {
                    changeDarkMode((priviousDark) => !priviousDark); 
                    // ()=!priviousDark
                } 
                } className="darkButton">Dark Mode</button>
            </div>

        </>

    );
}
export default Header;

// var v = 8756;
// function setV(callback) {
//     v = callback(v);
// }

// function cal(v) {
//     return v + 1
// }
// setV(cal);

