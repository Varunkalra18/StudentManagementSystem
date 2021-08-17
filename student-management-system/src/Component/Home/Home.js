import React from 'react'
import './Home.css'

function Home() {
    return (
        <div id="home" className="text-center">
        <div className="row row-cols-sm-1 row-cols-md-4 g-4">
            <div className="col-md-4">
              <div className="card pointer add-card">
                <div className="card-body">
                    <i className="fas fa-user-plus fa-4x"></i>
                </div>
                <div className="card-footer">
                  <h5 className="card-title">Add Student</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card pointer view-card">
                <div className="card-body">
                  <i className="fas fa-eye fa-4x"></i>
                </div>
                <div className="card-footer">
                  <h5 className="card-title">View Student data</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card pointer update-card">
                <div className="card-body">
                  <i className="fas fa-user-edit fa-4x"></i>
                </div>
                <div className="card-footer">
                  <h5 className="card-title">Update Student Information</h5>
                </div>
              </div>
            </div>
          </div>
    </div>
    )
}

export default Home
