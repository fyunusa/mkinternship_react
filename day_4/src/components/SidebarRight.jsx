import React, { useState } from 'react';

export default function Header() {
  const [isRequired, setIsRequired] = useState(false);

  const toggleRequired = () => {
    setIsRequired(!isRequired);
  };




return (
  <div className="container-fluid">
    <div className="row mb-3">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h6 className="card-title small-font-11">Type</h6>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="bi bi-icon-name"></i>
                </span>
              </div>
              <select className="form-select medium-font-12">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mb-3">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h6 className="card-title small-font-11">Settings</h6>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="requiredSwitch"
                checked={isRequired}
                onChange={toggleRequired}
              />
              <label className="form-check-label" htmlFor="requiredSwitch">
                Required
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body d-flex justify-content-between align-items-center">
            <h6 className="card-title small-font-11">Image or Video</h6>
            <button className="btn btn-sm btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

  

  
}
