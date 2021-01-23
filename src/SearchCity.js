import React from "react";
import "./SearchCity.css";

export default function SearchCity() {
  return (
    <div className=" SearchCity">
      <div class="row">
        <form id="search-form" class="weatherapp">
          <div class="col">
            <input
              id="enter-city"
              type="text"
              placeholder="Enter City"
              autofocus="on"
              class="new city"
            />
          </div>
          <div class="col-3">
            <button type="button" class="btn btn-info">
              Search
            </button>
          </div>
          <div class="col-3">
            <button type="button" class="btn btn-sucess" id="location">
              Location
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
