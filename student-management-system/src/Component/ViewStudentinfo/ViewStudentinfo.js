import React from "react";
import "./ViewStudentinfo.css";

function ViewStudentinfo() {
  return (
    <React.Fragment>
      <div className="card card-view-info">
        <div className="card-body text-center card-body-view-info">
          Student Data
        </div>
      </div>
      <div className="container-fluid container-fluid-view-info">
        <table
          className="table table-hover center table-view-info"
          style={{ width: "auto;" }}
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
              <td className="td-view-info" style={{ width: "180px" }}>
                1234
              </td>
              <td className="td-view-info" style={{ width: "150px" }}>
                Karen
              </td>
              <td className="td-view-info" style={{ width: "150px" }}>
                Newman
              </td>
              <td className="td-view-info" style={{ width: "250px" }}>
                Bachelors in Technology
              </td>
              <td className="td-view-info" style={{ width: "250px" }}>
                Computer Science Engineering
              </td>
              <td className="td-view-info" style={{ width: "180px" }}>
                +91999000222
              </td>
              <td>
                <button type="button" className="btn btn-warning">
                  View Profile
                </button>
              </td>
            </tr>
            <tr>
              <td className="td-view-info" style={{ width: "180px" }}>
                2245
              </td>
              <td className="td-view-info" style={{ width: "150px" }}>
                Jimmy
              </td>
              <td className="td-view-info" style={{ width: "150px" }}>
                Hopkins
              </td>
              <td className="td-view-info" style={{ width: "250px" }}>
                Bachelors in Commerce
              </td>
              <td className="td-view-info" style={{ width: "250px" }}>
                Accounting and Finance
              </td>
              <td className="td-view-info" style={{ width: "180px" }}>
                +91999666555
              </td>
              <td>
                <button type="button" className="btn btn-warning">
                  View Profile
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default ViewStudentinfo;
