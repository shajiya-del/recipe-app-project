import React from "react";

const SearchBar = ({
    value,
    isLoading,
    handleSubmit,
    onchange
}) => {
    return (
        <form onSubmit = {handleSubmit}>
            <input
            value={value}
            disabled={isLoading}
            onChange={onchange}
            placeholder="Search Recipes"
            className="form-control" />
            <input
            disabled={ isLoading || !value}
             type="submit" 
            className="Btn" 
             value="Search"   
            />
        </form>
    )
}
   
   

   
   

export default SearchBar;