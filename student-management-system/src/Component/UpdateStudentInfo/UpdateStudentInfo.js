import React from "react";
import UpdateInfo from "./UpdateStudentInfo.module.css";

function UpdateStudentInfo() {
  return (
    <React.Fragment>
      <div className={UpdateInfo.card}>
        <div className={`${UpdateInfo.cardBody} text-center`}>Student Data</div>
      </div>
      <div className={UpdateInfo.containerFluid}>
        <table className={`${UpdateInfo.table} table-hover center`} style={{ width: "auto" }}>
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
              <td style={{ width: "140px" }}>1234</td>
              <td style={{ width: "110px" }}>Karen</td>
              <td style={{ width: "110px" }}>Newman</td>
              <td style={{ width: "210px" }}>Bachelors in Technology</td>
              <td style={{ width: "210px" }}>Computer Science Engineering</td>
              <td style={{ width: "140px" }}>+91999000222</td>
              <td>
                <button type="button" className={` ${UpdateInfo.button} btn btn-warning btn-sm`}>
                  Update
                </button>
                <button type="button" className={`${UpdateInfo.button} btn btn-danger btn-sm`}>
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ width: "180px" }}>2245</td>
              <td style={{ width: "150px" }}>Jimmy</td>
              <td style={{ width: "150px" }}>Hopkins</td>
              <td style={{ width: "250px" }}>Bachelors in Commerce</td>
              <td style={{ width: "250px" }}>Accounting and Finance</td>
              <td style={{ width: "180px" }}>+91999666555</td>
              <td>
                <button type="button" className="btn btn-warning btn-sm">
                  Update
                </button>
                <button type="button" className="btn btn-danger btn-sm">
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
