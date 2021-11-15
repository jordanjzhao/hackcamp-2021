import React, {useState} from 'react'
import {Link} from "react-router-dom";

function Login(props) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const onChangeLogin = (e) => {
        setUsername(e.target.value);
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            username: username,
            password: password
        };

        // this.props.loginUser(userData);
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto" style={{ padding: '10% 10% 25% 10%'}}>
                        <h1 className="display-4 text-center">Log In</h1>
                        <br/><br/>
                        <p className="lead text-center">Sign in to your Lippie account</p>
                        <br/><br/>
                        <form noValidate onSubmit={onSubmit} >
                            <input
                                placeholder="Email Address or username"
                                name="email_or_username"
                                type="text"
                                value={username}
                                onChange={onChangeLogin}
                            />
                            <input
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={onChangeLogin}
                            />
                            <Link to="/login/forgot" className="small" style={{color: 'darkblue'}}>Forgot password</Link>
                            <input onChange={onChangeLogin} type="submit" className="btn btn-info btn-block mt-4" style={{backgroundColor: '#00284d'}}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;