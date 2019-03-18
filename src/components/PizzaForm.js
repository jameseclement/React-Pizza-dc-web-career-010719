import React from "react";

const PizzaForm = props => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          onChange={props.handleToppingChange}
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          value={props.topping}
        />
      </div>
      <div className="col">
        <select
          onChange={props.handleSizeChange}
          value={props.size}
          className="form-control"
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            onChange={props.handleVegetarianChange}
            className="form-check-input"
            type="checkbox"
            value="Vegetarian"
            checked={props.vegetarian}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button
          onClick={props.handleSubmit}
          type="submit"
          className="btn btn-success"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
