import React from "react";  

export default function SearchBox() {
    return (
        <div className="search-box-container">
            <label htmlFor="city-input">
                <input type="text" id="city-input" placeholder="Search by city name..."></input>
            </label>
        </div>
    );
}