import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="container-fluid container-fluid-index">
        <div className="col-md-4 login-box">
            <div className="login-dark-index p-3 shadow-lg rounded">
                <div className="pt-3 header-box-index">
                    <i className="fas fa-user-circle fa-4x text-center fa-user-circle-index"></i>
                    <h2 className="text-white heading text-center">Login</h2>
                </div>

                <form className="mt-5">
                    <div className="form-group">
                        <input type="name" 
                            className="form-control form-control-sm bg-light" 
                            placeholder="Username"/>
                    </div>

                    <div className="form-group mt-3">
                        <input type="password" 
                            className="form-control form-control-sm bg-light" 
                            placeholder="Password"/>
                    </div>

                    <div className="d-grid gap-2 button-index">
                        <button className="btn btn-primary btn-warning col">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login
