import React, { useState } from "react";  

export default function SearchBox({ onClick }) {
    const [searchValue, setSearchValue] = useState('')

    function handleChange(val) {
        setSearchValue(val);
    }

    return (
        <div className="search-box-container">
            <form>
            <label htmlFor="city-input">
                <input type="text" id="city-input" placeholder="Search by city name..." onChange={e => handleChange(e.target.value)}></input>
                <button type="submit" onClick={(e) => onClick(e, searchValue)}>Search</button>
            </label>
            </form>
        </div>
    );
}