// import { useRef } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { login } from "./Store";

// function Login()
// {
//     let username=useRef(null);
//     let password=useRef(null);
//     let dispatch=useDispatch();
//     let navigate= useNavigate();
//     let loginCheck=()=> {
//         if(username.current.value === "Babureddy" && password.current.value === "Babu Reddy@123")
//         {
//             dispatch(login(username.current.value))
//             navigate("/home");
//         }
//         else{
//             alert("Your credentials are wrong.check once !");
//         }
//     }
//     return(
//         <>
//         <h1 className='text-success p-5  fst-italic'>Login Page </h1>
//         <label className='fst-italic fst-bold'>User Name :</label>&emsp;
//         <input type="text" ref={username} />
//         <br/><br/>
//         <label className='fst-italic fst-bold'> Password : </label>&emsp;&emsp;
//         <input type="password" ref={password} /><br/><br/>
//         <button style={{backgroundColor:'green'}} on onClick={loginCheck}>Login</button>
//         </>
//     )
// }export default Login;

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";
function Login() {
    let username = useRef(null);
    let password = useRef(null);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let loginCheck = () => {
        if (username.current.value === "BabuReddy" && password.current.value === "Babu Reddy@123") {
            dispatch(login(username.current.value));
            navigate("/home");
        } else {
            alert("Your credentials are wrong. Check once!");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="card shadow-lg p-5" style={{ width: "100%", maxWidth: "400px" }}>
                <h1 className="text-primary text-center mb-4 fst-italic">Login Page</h1>
                <div className="form-group">
                    <label htmlFor="username" className="fst-italic fst-bold text-success" >User Name:</label>
                    <input
                        type="text"
                        id="username"
                        ref={username}
                        className="form-control mb-3 border-secondary"
                        placeholder="Enter Username"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="fst-italic fst-bold text-success">Password:</label>
                    <input
                        type="password"
                        id="password"
                        ref={password}
                        className="form-control mb-3 border-secondary"
                        placeholder="Enter Password"
                    />
                </div>
                <button
                    onClick={loginCheck}
                    className="btn btn-success btn-block mt-3 shadow-sm"
                    style={{ fontWeight: "bold" }}
                >
                    Login
                </button>
                <p className="text-center text-muted mt-3">
                    <small>Redirecting in 5 seconds...</small>
                </p>
            </div>
        </div>
    );
}
export default Login;

