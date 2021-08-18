import React,{useState} from 'react'
import './Login.css'
import {useHistory} from 'react-router-dom';

function Login() {
    const history=useHistory();
    const [loginDetail, setLoginDetail] = useState({
        username:'',
        password:''
    })

    const handleLogin=(e)=>{
        history.push('/home')
    }
    return (
        <div className="container-fluid container-fluid-index">
        <div className="col-md-4 login-box">
            <div className="login-dark-index p-3 shadow-lg rounded">
                <div className="pt-3 header-box-index">
                    <i className="fas fa-user-circle fa-4x text-center fa-user-circle-index"></i>
                    <h2 className="text-white heading text-center">Login</h2>
                </div>

                <form className="mt-5" onSubmit={handleLogin}>
                    <div className="form-group">
                        <input type="name" 
                            className="form-control form-control-sm bg-light" 
                            placeholder="Username"
                            name="username"
                            value={loginDetail.username}
                            onChange={(e)=>{setLoginDetail({...loginDetail,username:e.target.value})}}/>
                    </div>

                    <div className="form-group mt-3">
                        <input type="password" 
                            className="form-control form-control-sm bg-light" 
                            placeholder="Password"
                            name="password"
                            value={loginDetail.password}
                            onChange={(e)=>{setLoginDetail({...loginDetail,password:e.target.value})}}/>
                    </div>

                    <div className="d-grid gap-2 button-index">
                        <button type="submit" className="btn btn-primary btn-warning col">
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
