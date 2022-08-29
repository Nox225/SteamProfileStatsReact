import React from 'react'
import logo from '../images/steampowered-icon.svg'

function Search() {

  return (
    <div>
        <div className='navbar'>
            <div className='nav-container'>
                <img src={logo} alt='' />
                <h2 className='title'>Steam Profile Games Playtime</h2>
                <form className='search-form' action='/api/games' method='POST'>
                    <input 
                        autoComplete='off' 
                        className='search' 
                        type='text' 
                        placeholder='Steam Profile ID' 
                        name='name'>
                    </input>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Search;
