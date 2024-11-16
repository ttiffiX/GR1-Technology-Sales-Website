import React, {useState} from "react";
import Nav from "../../components/navigation/Nav";
import './Login.scss'
import {Link} from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Giả lập quá trình xác thực
        if (username === 'admin' && password === '123456') {
            alert('Login Successful!');
            setError('');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <>
            <Nav count={0}/>
            <div className="login_login-container">
                <form className="login_login-form" onSubmit={handleSubmit}>
                    <h2 className="login_login-title">Login</h2>

                    {error && <div className="login_login-error">{error}</div>}

                    <div className="login_input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            required
                        />
                    </div>

                    <div className="login_input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button type="submit" className="login_login-button">
                        Submit
                    </button>

                    <div className="login_register-link">
                        <p>Don't have an account? <Link to="/Register" className="login_register-button">Sign up
                            here</Link></p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login