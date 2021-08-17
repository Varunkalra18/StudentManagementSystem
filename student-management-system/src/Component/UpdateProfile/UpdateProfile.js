import React, { useState } from "react";
import "./UpdateProfile.css";
import profileImage from "../../images/profile.jpg";

function UpdateProfile() {
  const [updateProfile, setUpdateProfile] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    telephone: "",
    address: "",
    cityName: "",
    postalCode: "",
    state: "",
    country: "",
    degree: "",
    program: "",
    branch: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updateProfile);
  };

  return (
    <div className="container emp-update-profile">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img-update-profile">
              <img src={profileImage} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <h1 className="h1-update-profile">Jimmy Hopkins</h1>
              <p className="p-update-profile">Registration ID: 2245</p>
            </div>
            <div className="row">
              <hr />
            </div>
            <div className="row">
              <div className="form-group">
                <div className="row form-row-update-profile">
                  <div className="form-group col-md-6">
                    <label
                      htmlFor="first_name"
                      className="col-form-label col-form-label-update-profile"
                    >
                      First Name
                    </label>
                    <input
                      id="first_name"
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={updateProfile.firstName}
                      onChange={(e) =>
                        setUpdateProfile({
                          ...updateProfile,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label
                      htmlFor="last_name"
                      className="col-form-label col-form-label-update-profile"
                    >
                      Last Name
                    </label>
                    <input
                      id="last_name"
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={updateProfile.lastName}
                      onChange={(e) =>
                        setUpdateProfile({
                          ...updateProfile,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row form-row-update-profile">
                  <div className="form-group col-md-6">
                    <label
                      htmlFor="DOB"
                      className="col-form-label col-form-label-update-profile"
                    >
                      Date of Birth
                    </label>
                    <input
                      id="DOB"
                      type="text"
                      className="form-control"
                      name="date"
                      placeholder="DD-MM-YYYY"
                      value={updateProfile.dataOfBirth}
                      onChange={(e) =>
                        setUpdateProfile({
                          ...updateProfile,
                          dateOfBirth: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label
                      htmlFor="gender"
                      className="col-form-label col-form-label-update-profile"
                    >
                      Gender
                    </label>
                    <input
                      id="gender"
                      type="text"
                      className="form-control"
                      name="gender"
                      value={updateProfile.gender}
                      onChange={(e) =>
                        setUpdateProfile({
                          ...updateProfile,
                          gender: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row form-row-update-profile">
                  <div className="form-group col-md-6">
                    <label
                      htmlFor="email"
                      className="col-form-label col-form-label-update-profile"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="abc123@gmail.com"
                      value={updateProfile.email}
                      onChange={(e) =>
                        setUpdateProfile({
                          ...updateProfile,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label
                      htmlFor="tel"
                      className="col-form-label col-form-label-update-profile"
                    >
                      Phone number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="tel"
                      name="telephone"
                      value={updateProfile.telephone}
                      onChange={(e) =>
                        setUpdateProfile({
                          ...updateProfile,
                          telephone: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="row form-row-update-profile">
                  <div className="form-group col-md-6">
                    <label
                      htmlFor="address"
                      className="col-form-label col-form-label-update-profile"
                    >
                      Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      className="form-control"
                      name="address"
                      value={updateProfile.address}
                      onChange={(e) =>
                        setUpdateProfile({
                          ...updateProfile,
                          address: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label
                      htmlFor="city_name"
                      className="col-form-label col-form-label-update-profile"
                    >
                      City
                    </label>
                    <input
                      id="city_name"
                      type="text"
                      className="form-control"
                      name="cityName"
                      value={updateProfile.cityName}
                      onChange={(e) =>
                        setUpdateProfile({
                          ...updateProfile,
                          cityName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row form-row-update-profile">
                  <div className="form-group col-md-6">
                    <label
                      htmlFor="postal_code"
                      className="col-form-label col-form-label-update-profile"
                    >
                      Postal Code
                    </label>
                    <input
                      id="postal_code"
                      type="text"
                      className="form-control"
                      name="postalCode"
                      value={updateProfile.postalCode}
                      onChange={(e) =>
                        setUpdateProfile({
                          ...updateProfile,
                          postalCode: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label
                      htmlFor="state"
                      className="col-form-label col-form-label-update-profile"
                    >
                      State
                    </label>
                    <input
                      id="state"
                      type="text"
                      className="form-control"
                      name="state"
                      value={updateProfile.state}
                      onChange={(e) =>
                        setUpdateProfile({
                          ...updateProfile,
                          state: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row form-row-update-profile">
                  <div className="form-group col-md-6">
                    <label
                      htmlFor="country"
                      className="col-form-label col-form-label-update-profile"
                    >
                      Country
                    </label>
                    <input
                      id="country"
                      type="text"
                      className="form-control"
                      name="country"
                      value={updateProfile.country}
                      onChange={(e) =>
                        setUpdateProfile({
                          ...updateProfile,
                          country: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label
                      htmlFor="degree"
                      className="col-form-label col-form-label-update-profile"
                    >
                      Degree
                    </label>
                    <input
                      id="degree"
                      type="text"
                      className="form-control"
                      name="degree"
                      value={updateProfile.degree}
                      onChange={(e) =>
                        setUpdateProfile({
                          ...updateProfile,
                          degree: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row form-row-update-profile">
                  <div className="form-group col-md-6">
                    <label
                      htmlFor="program"
                      className="col-form-label col-form-label-update-profile"
                    >
                      Program
                    </label>
                    <input
                      id="program"
                      type="text"
                      className="form-control"
                      name="program"
                      value={updateProfile.program}
                      onChange={(e) =>
                        setUpdateProfile({
                          ...updateProfile,
                          program: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label
                      htmlFor="branch"
                      className="col-form-label col-form-label-update-profile"
                    >
                      Branch
                    </label>
                    <input
                      id="branch"
                      type="text"
                      className="form-control"
                      name="branch"
                      value={updateProfile.branch}
                      onChange={(e) =>
                        setUpdateProfile({
                          ...updateProfile,
                          branch: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div
                  className="row form-row-update-profile"
                  style={{paddingTop: '5%'}}
                >
                  <button type="button" className="btn btn-primary btn-lg">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfile;
