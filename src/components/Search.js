import React from "react";

function Search({figureOutSearch}) {

  function handleChange(e){
    figureOutSearch(e.target.value)
  }
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
