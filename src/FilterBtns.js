export const FilterBtns = (props) => {
  return (
    <div className="filterBtns">
      <div className="category">
        <h2>Category</h2>
        <select
          className="dropdown"
          onChange={(event) => props.handleCategoryChange(event.target.value)}
        >
          <option value="all">All</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="dessert">Dessert</option>
        </select>
      </div>
      <div className="isveg">
        <h2>Veg / Non-Veg</h2>
        <select
          className="dropdown"
          onChange={(event) => props.handleTypeChange(event.target.value)}
        >
          <option value="all">Both</option>
          <option value="true">Veg</option>
          <option value="false">Non-Veg</option>
        </select>
      </div>
      <button className="filterBtn" onClick={props.handleChange}>
        Filter
      </button>
    </div>
  );
};
