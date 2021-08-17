import React from 'react'
import './Home.css'
import { useHistory} from "react-router-dom";

function Home() {

  let history=useHistory();

  const handleUpdateStudProfile=()=>{
    history.push('/updatestudprofile')
  }

  const ViewStudProfile=()=>{
    history.push('/viewstudprofile')
  }

  const AddStudent=()=>{
    history.push('/addstudent')
  }

    return (
      <div id="home" className="text-center">
      <div className="row row-cols-sm-1 row-cols-md-4 g-4">
          <div className="col-md-4">
            <div onClick={AddStudent} className="card card-home pointer pointer-home add-card">
              <div className="card-body">
                  <i className="fas fa-user-plus fa-4x fas-home"></i>
              </div>
              <div className="card-footer">
                <h5 className="card-title-home">Add Student</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div onClick={ViewStudProfile} className="card card-home pointer pointer-home view-card">
              <div className="card-body">
                <i className="fas fa-eye fa-4x fas-home"></i>
              </div>
              <div className="card-footer">
                <h5 className="card-title-home">View Student data</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div onClick={handleUpdateStudProfile} className="card card-home pointer pointer-home update-card">
              <div className="card-body">
                <i className="fas fa-user-edit fa-4x fas-home"></i>
              </div>
              <div className="card-footer">
                <h5 className="card-title-home">Update Student Information</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home
