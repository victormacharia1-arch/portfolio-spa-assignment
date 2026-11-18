function Searchbar({ searchTerm, onSearch}) {
    return (
        <label className="search-boox">
            <span> Search: </span>
            <input
                type="text"
                value={searchTerm}
                onChange={(event) => onSearch(event.target.value)}
                placeholder="Search by title or description"
   />
  </label>
    )        
}

export default Searchbar;