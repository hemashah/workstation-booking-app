import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";
import { Outlet, Link } from "react-router-dom";
import axios from './api/axios';
import { useHistory } from "react-router-dom";

const LOGIN_URL = '/auth';

const Login = (props) => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    let name;

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit =  (e) => {
        e.preventDefault();
         console.log( JSON.stringify({ user, pwd }))
         console.log( user)
         console.log( pwd)
         debugger
         let users =[]
         let count = 0
         if(localStorage.getItem("userData")){
           users= JSON.parse(localStorage.getItem("userData"))
           users.forEach(element => {
            if(element.username == user && element.password == pwd){
              count =1
            //   name = user
              localStorage.setItem('username',user)
             }          
             });
           if(count == 1){
            setAuth({ user, pwd });
            setUser('');
            setPwd('');
            setSuccess(true);
           }
           else{
            console.log( "error")
          
            // setSuccess(false);
            setErrMsg('Login Failed');
            errRef.current.focus();
            //   setUser('');
            // setPwd('');
         }
         }
         else{
            console.log( "error")
            setUser('');
            setPwd('');
            setSuccess(false);
            setErrMsg('Login Failed');
            errRef.current.focus();
         }
       
        // try {
        //     const response = await axios.post(LOGIN_URL,
        //         JSON.stringify({ user, pwd }),
        //         {
        //             headers: { 'Content-Type': 'application/json' },
        //             withCredentials: true
        //         }
        //     );
        //     console.log(JSON.stringify(response?.data));
        //     //console.log(JSON.stringify(response));
        //     const accessToken = response?.data?.accessToken;
        //     const roles = response?.data?.roles;
        //     setAuth({ user, pwd, roles, accessToken });
        //     setUser('');
        //     setPwd('');
        //     setSuccess(true);
        // } catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //     } else if (err.response?.status === 400) {
        //         setErrMsg('Missing Username or Password');
        //     } else if (err.response?.status === 401) {
        //         setErrMsg('Unauthorized');
        //     } else {
        //         setErrMsg('Login Failed');
        //     }
        //     errRef.current.focus();
        // }
        // const history = useHistory()
        // const navigateTo = () => history.push('/register');//eg.history.push('/login');
      
    }

    return (
         
        <>
            {success ? (
               <section >
                    <h1>Logged in successfull!</h1>
                    <br />
                    
                    <p>
                        {/* <a href="register">Go to Home</a> */}
                        <Link to="/machine">Click here</Link> to navigate workstation window

                        {/* <Link to="/register">Register</Link> */}
                        {/* <button onClick={navigateTo} type="button" /> */}
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                        {/* <Link to="/register">Register</Link> */}

                            {/*put router link here*/}
                            {/* <a href="#">Sign Up</a> */}
                            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login
