import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
    const navigate = useNavigate();

    const [account, setAccount] = useState({
        login: '',
        name: '',
        email: '',
        password: ''
    });

    const [log, setLog] = useState({
        login: '',
        password: ''
    })


    const [errors, setErrors] = useState({});
    const [errors2, setErrors2] = useState({});
    const toastOptions = {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

    }


    const validateSignUp = () => {
        const validationErrors = {};

        if (account.login.trim() === '') {
            validationErrors.login = 'Login is required!';
        }

        if (account.name.trim() === '') {
            validationErrors.name = 'Username is required!';
        }
        if (account.email.trim() === '') {
            validationErrors.email = 'Email is required!';
        }
        if (account.password.trim() === '') {
            validationErrors.password = 'Password is required!';
        }

        console.log(account.password)

        return Object.keys(validationErrors).length === 0 ? null : validationErrors;
    };

    const validateLogin = () => {
        const validationErrors = {};

        if (log.login.trim() === '') {
            validationErrors.login = 'Login is required!';
        }
        if (log.password.trim() === '') {
            validationErrors.password = 'Password is required!';
        }

        return Object.keys(validationErrors).length === 0 ? null : validationErrors;
    };

    const handleChangeRoute = () => {
        navigate('/');
        window.location.reload();
    };

    const handleSubmitCreate = (event) => {
        event.preventDefault();

        const validationErrors = validateSignUp();
        setErrors(validationErrors || {});
        if (validationErrors) return;

        axios
            .post('https://at.usermd.net/api/user/create', {
                name: account.name,
                email: account.email,
                password: account.password
            })
            .then(() => {
                handleChangeRoute();
            })
            .catch((error) => {
                const errorMessages = {};
                errorMessages.password =
                    "Given email already exists";
                setErrors(errorMessages || {});
                console.log(error);
            });
    };

    const handleSubmitAuth = (event) => {
        event.preventDefault();

        const validationErrors = validateLogin();
        setErrors2(validationErrors || {});
        if (validationErrors) return;

        axios
            .post('https://at.usermd.net/api/user/auth', {
                login: log.login,
                password: log.password
            })
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                handleChangeRoute();
                console.log(response.data.token)
            })
            .catch((error) => {
                const errorMessages = {};
                errorMessages.password =
                    "Given username doesn't exist or the password is wrong!";
                setErrors2(errorMessages || {});
                console.log(error);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAccount((prevAccount) => ({
            ...prevAccount,
            [name]: value
        }));
    };

    const handleChangeLogin = (event) => {
        const { name, value } = event.target;
        setLog((prevAccount) => ({
            ...prevAccount,
            [name]: value
        }));
        console.log(log);
    };

    useEffect(() => {
        if (errors.login) {
            toast.error(errors.login, toastOptions);
        }
    }, [errors.login]);

    useEffect(() => {
        if (errors.name) {
            toast.error(errors.name, toastOptions);
        }
    }, [errors.name]);

    useEffect(() => {
        if (errors.email) {
            toast.error(errors.email, toastOptions);
        }
    }, [errors.email]);

    useEffect(() => {
        if (errors.password) {
            toast.error(errors.password, toastOptions);
        }
    }, [errors.password]);

    useEffect(() => {
        if (errors2.login) {
            toast.error(errors2.login, toastOptions);
        }
    }, [errors2.login]);

    useEffect(() => {
        if (errors2.password) {
            toast.error(errors2.password, toastOptions);
        }
    }, [errors2.password]);


    return (
        <div>
            <div className="login-page">
                <form className="user-container" onSubmit={handleSubmitCreate}>
                    <p>New member</p>
                    <div className="login-register-container">
                        <label className="label">Login</label>
                        <input
                            type="text"
                            className="form-control custom-form-control"
                            onChange={handleChange}
                            name="login"
                        />
                        <label className="label">Name</label>
                        <input
                            type="text"
                            className="form-control custom-form-control"
                            onChange={handleChange}
                            name="name"
                        />
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="form-control custom-form-control"
                            onChange={handleChange}
                            name="email"
                        />
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="form-control custom-form-control"
                            onChange={handleChange}
                            name="password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ borderRadius: "10px", marginTop: "10px", backgroundColor: "#414141", borderColor: "#BC25BF", color: "#fff", width: "400px" }}>Create account</button>
                </form>
                <div className="vertical-line"></div>
                <form className="user-container"
                    onSubmit={handleSubmitAuth}>
                    <p>Already a user</p>
                    <div className="login-register-container">
                        <label className="label">Login</label>
                        <input
                            type="text"
                            className="form-control custom-form-control"
                            onChange={handleChangeLogin}
                            name="login"
                        />
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="form-control custom-form-control"
                            onChange={handleChangeLogin}
                            name="password"
                        />

                    </div>
                    <button type="submit" className="btn btn-primary" style={{ borderRadius: "10px", marginTop: "10px", backgroundColor: "#414141", borderColor: "#BC25BF", color: "#fff", width: "400px" }}>Log in</button>
                </form>

            </div>
            <p style={{ color: "#fff", fontSize: "10px", marginLeft: "10px" }}>By signing in, you agree to MovieJS's Conditions of Usage and Privacy Policy.</p>
        </div>
    )

}

export default LoginPage;