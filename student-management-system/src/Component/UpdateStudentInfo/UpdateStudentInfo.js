import React from "react";
import "./UpdateStudentInfo.css";

function UpdateStudentInfo() {
  return (
    <React.Fragment>
      <div className="card card-update-info">
        <div className="card-body text-center card-body-update-info">
          Student Data
        </div>
      </div>

      <div className="container-fluid container-fluid-update-info">
        <table
          className="table table-hover center table-update-info"
          style={{ width: "90%" }}
        >
          <thead>
            <tr>
              <th>Registration ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Program</th>
              <th>Branch</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td-update-info" style={{ width: "160px" }}>
                1234
              </td>
              <td className="td-update-info" style={{ width: "130px" }}>
                Karen
              </td>
              <td className="td-update-info" style={{ width: "130px" }}>
                Newman
              </td>
              <td className="td-update-info" style={{ width: "230px" }}>
                Bachelors in Technology
              </td>
              <td className="td-update-info" style={{ width: "230px" }}>
                Computer Science Engineering
              </td>
              <td className="td-update-info" style={{ width: "160px" }}>
                +91999000222
              </td>
              <td>
                <button type="button" className="btn btn-warning btn-sm button-left">
                  Update
                </button>
                <button type="button" className="btn btn-danger btn-sm button-left">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="td-update-info" style={{ width: "160px" }}>
                2245
              </td>
              <td className="td-update-info" style={{ width: "130px" }}>
                Jimmy
              </td>
              <td className="td-update-info" style={{ width: "130px" }}>
                Hopkins
              </td>
              <td className="td-update-info" style={{ width: "230px" }}>
                Bachelors in Commerce
              </td>
              <td className="td-update-info" style={{ width: "230px" }}>
                Accounting and Finance
              </td>
              <td className="td-update-info" style={{ width: "160px" }}>
                +91999666555
              </td>
              <td>
                <button type="button" className="btn btn-warning btn-sm button-left">
                  Update
                </button>
                <button type="button" className="btn btn-danger btn-sm button-left">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default UpdateStudentInfo;
