import React from 'react'
import {MdSearch} from "react-icons/md"

function NavBar( {tosearch}){
 return(
     <div className='nav-div'>
     <div className='navbar'>
         <div className="navLeft"><a id="home" href='/'>Home</a></div>
        <div className='Search'>
            <input type="text" className='searchbox' placeholder='Enter here to search your Notes ....'onChange={(event)=>{tosearch(event.target.value)}}></input>
        </div>
        <div className="navRight">
            <button className="searchButton">Search</button>
        </div>
        </div>
       {/* <spam className="search-icon"><MdSearch  size="1.4em"/></spam> */}
    </div>
 );
}
export default NavBar;
