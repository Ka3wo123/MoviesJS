import React from "react"

const LoginPage = () => {
    return (
        <div>
            <div className="login-page">
                <div className="user-container">
                    <p>New member</p>
                    <div className="login-register-container">
                        <label className="label">Login</label>
                        <input
                            type="text"
                            className="form-control custom-form-control"                                                        
                        />
                        <label className="label">Name</label>
                        <input
                            type="text"
                            className="form-control custom-form-control"                            
                        />
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="form-control custom-form-control"                            
                        />
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="form-control custom-form-control"                            
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{borderRadius: "10px", marginTop: "10px",backgroundColor: "#414141", borderColor: "#BC25BF", color: "#fff", width: "400px"}}>Create account</button>
                </div>
                <div className="vertical-line"></div>
                <div className="user-container">
                    <p>Already a user</p>
                    <div className="login-register-container">
                    <label className="label">Login</label>
                        <input
                            type="text"
                            className="form-control custom-form-control"                                                        
                        />
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="form-control custom-form-control"                            
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{borderRadius: "10px", marginTop: "10px",backgroundColor: "#414141", borderColor: "#BC25BF", color: "#fff", width: "400px"}}>Log in</button>
                </div>

            </div>
            <p style={{ color: "#fff", fontSize: "10px", marginLeft: "10px" }}>By signing in, you agree to MovieJS's Conditions of Usage and Privacy Policy.</p>
        </div>
    )

}

export default LoginPage;