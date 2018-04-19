import React from "react";

export const Select = props => (
  <div className="form-group">
    <select className="form-control" {...props} >
        <option value="Hotel">Hotel</option>
        <option value="Restaurant">Restaurant</option>
        <option value="Attraction">Attraction</option>
        <option value="Shopping">Shopping</option>
        <option value="Other">Other</option>
    </select>
  </div>
);
