import React from "react";
import "./AddStudent.css";

function AddStudent() {
  return (
    <div className="container" style={{marginTop: '6em'}}>
      <form>
        <div className="row" style={{padding:'0.8rem'}}>
          <div className="card person-card card-add">
            <div className="card-body">
              <img
                id="img_icon"
                className="person-img"
                src="https://visualpharm.com/assets/217/Life%20Cycle-595b40b75ba036ed117d9ef0.svg"
              />
              <h2 id="form_heading" className="card-title-add">
                Student Registration
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card personal-info">
            <div className="card-body">
              <h2 className="card-title">Personal Details</h2>
              <div className="form-group">
                <div className="row personal-info-row">
                  <div className="form-group col-md-6">
                    <label for="first_name" className="col-form-label">
                      First Name
                    </label>
                    <input
                      id="first_name"
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="last_name" className="col-form-label">
                      Last Name
                    </label>
                    <input
                      id="last_name"
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="row personal-info-row">
                  <div className="form-group col-md-4">
                    <label for="regs_id" className="col-form-label">
                      Registration ID
                    </label>
                    <input
                      id="regs_id"
                      type="text"
                      className="form-control"
                      placeholder="Registration ID"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="DOB" className="col-form-label">
                      Date of Birth
                    </label>
                    <input
                      id="DOB"
                      type="text"
                      className="form-control"
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                  <div className="col-md-4">
                    <label for="gender" className="col-form-label">
                      Gender
                    </label>
                    <select className="form-select" required>
                      <option value="" disabled selected hidden>
                        Choose Gender...
                      </option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Others</option>
                    </select>
                  </div>
                </div>
                <div className="row personal-info-row">
                  <div className="form-group col-md-6">
                    <label for="email" className="col-form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="tel" className="col-form-label">
                      Phone number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="tel"
                      placeholder="+919999999999"
                      required
                    />
                    <div className="phone-feedback"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6" style={{padding: '0.5rem'}}>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Address Details</h2>
                <div className="form-group">
                  <div className="row address-row">
                    <div className="form-group">
                      <label for="address" className="col-form-label">
                        Address
                      </label>
                      <input
                        id="address"
                        type="text"
                        className="form-control"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                  <div className="row address-row">
                    <div className="form-group col-md-6">
                      <label for="city_name" className="col-form-label">
                        City
                      </label>
                      <input
                        id="city_name"
                        type="text"
                        className="form-control"
                        placeholder="City"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="postal_code" className="col-form-label">
                        Postal Code
                      </label>
                      <input
                        id="postal_code"
                        type="text"
                        className="form-control"
                        placeholder="Postal code"
                      />
                    </div>
                  </div>
                  <div className="row address-row">
                    <div className="form-group col-md-6">
                      <label for="state" className="col-form-label">
                        State
                      </label>
                      <input
                        id="state"
                        type="text"
                        className="form-control"
                        placeholder="State"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="country" className="col-form-label">
                        Country
                      </label>
                      <input
                        id="country"
                        type="text"
                        className="form-control"
                        placeholder="country"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{padding: '0.5rem'}}>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Course Details</h2>
                <div className="form-group">
                  <div className="row course-row">
                    <div className="form-group">
                      <label for="degree" className="col-form-label">
                        Degree
                      </label>
                      <select className="form-select" required>
                        <option value="" disabled selected hidden>
                          Select Degree...
                        </option>
                        <option value="1">Associate</option>
                        <option value="2">Bachelors</option>
                        <option value="3">Masters</option>
                        <option value="4">Doctoral</option>
                      </select>
                    </div>
                  </div>
                  <div className="row course-row">
                    <div className="form-group">
                      <label for="Program" className="col-form-label">
                        Program
                      </label>
                      <select className="form-select" required>
                        <option value="" disabled selected hidden>
                          Select Program...
                        </option>
                        <option value="1">Bachelors in Technology</option>
                        <option value="2">
                          Bachelors in Computer Administration
                        </option>
                        <option value="3">Bachelors in Science</option>
                        <option value="4">
                          Bachelors in Business Administration
                        </option>
                        <option value="5">Bachelors in Arts</option>
                        <option value="6">Bachelors in Commerce</option>
                        <option value="7">Masters in Science</option>
                        <option value="8">
                          Masters in Business Administration
                        </option>
                        <option value="9">Master in Arts</option>
                        <option value="10">Master in Commerce</option>
                        <option value="11">
                          Master in Computer Administration
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="row course-row">
                    <div className="form-group">
                      <label for="branch" className="col-form-label">
                        Branch
                      </label>
                      <select className="form-select" required>
                        <option value="" disabled selected hidden>
                          Select Branch...
                        </option>
                        <option value="1">Computer Science Engineering</option>
                        <option value="2">Information Technology</option>
                        <option value="3">Electrical Engineering</option>
                        <option value="4">Electronical Engineering</option>
                        <option value="5">Mechanical Engineering</option>
                        <option value="6">Biomedical Engineering</option>
                        <option value="7">Political Science</option>
                        <option value="8">Economics</option>
                        <option value="9">Accounting and Finance</option>
                        <option value="10">Auditing</option>
                        <option value="11">Taxation</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{marginTop: '1em', marginBottom: '2em'}}>
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;
