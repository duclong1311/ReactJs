import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import baseAxios, { METHOD_HTTP } from "../../configs/baseAxios";

export function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    const onSubmit = async (values) => {
        setEmailError('')
        setPasswordError('')

        try {
            const data = await baseAxios(METHOD_HTTP.POST, "/login", values);
            localStorage.setItem("token", data.token);
            console.log("Data", data);
        } catch (e) {
            alert(e.message);
        }
        

        if ('' === email) {
            setEmailError('Please enter your email')
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError('Please enter a valid email')
            return
        }

        if ('' === password) {
            setPasswordError('Please enter a password')
            return
        }

        if (password.length < 7) {
            setPasswordError('The password must be 8 characters or longer')
            return
        }
    }

    return (
        <>
            <div className={"mainContainer"}>
                <div className="titleContaier">
                    <div>Đăng nhập</div>
                </div>
                <br />

                <div className="inputContainer">
                    <label className="inputLabel" htmlFor="email">Email</label>
                    <input 
                        type="text"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="inputBox"
                    />
                    <label className="errorLabel">{emailError}</label>
                </div>

                <div className="inputContainer">
                    <label className="inputLabel" htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="inputBox"
                    />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br />

                <div className="inputContainer">
                    <input 
                        className="inputButton"
                        type="button"
                        onClick={onSubmit}
                        value="Đăng nhập"
                    />
                    <Link to={"/register"}>Chưa có tài khoản?</Link>
                </div>
            </div>
        </>
    )
}


