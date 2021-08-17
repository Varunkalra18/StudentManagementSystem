import React from "react";
import "./ViewProfile.css";
import profileImage from "../../images/profile.jpg";

function ViewProfile() {
  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img src={profileImage} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <h1 className="h1-view-profile">Jimmy Hopkins</h1>
              <p className="p-view-profile">Registration ID: 2245</p>
            </div>
            <div className="row">
              <hr />
            </div>
            <div className="row">
              <table className="table table-borderless table-view-profile">
                <tbody>
                  <tr>
                    <td className="head-view-profile">Date of Birth</td>
                    <td>23-12-2001</td>
                  </tr>
                  <tr>
                    <td className="head-view-profile">Gender</td>
                    <td>Male</td>
                  </tr>
                  <tr>
                    <td className="head-view-profile">Email</td>
                    <td>jimmyhopkins@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="head-view-profile">Phone Number</td>
                    <td>+91999666555</td>
                  </tr>
                  <tr>
                    <td className="head-view-profile">Address</td>
                    <td>4 Privet Drive, Surrey</td>
                  </tr>
                  <tr>
                    <td className="head-view-profile">City</td>
                    <td>Reading</td>
                  </tr>
                  <tr>
                    <td className="head-view-profile">Postal Code</td>
                    <td>984321</td>
                  </tr>
                  <tr>
                    <td className="head-view-profile">State</td>
                    <td>Berkshire</td>
                  </tr>
                  <tr>
                    <td className="head-view-profile">Country</td>
                    <td>United Kingdom</td>
                  </tr>
                  <tr>
                    <td className="head-view-profile">Degree</td>
                    <td>Bachelors</td>
                  </tr>
                  <tr>
                    <td className="head-view-profile">Program</td>
                    <td>Bachelors in Commerce</td>
                  </tr>
                  <tr>
                    <td className="head-view-profile">Branch</td>
                    <td>Accounting and Finance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ViewProfile;
