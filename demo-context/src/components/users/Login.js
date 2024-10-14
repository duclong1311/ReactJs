import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import baseAxios, { METHOD_HTTP } from "../../configs/baseAxios";

export function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    const onSubmit = async () => {
        let values = { username: username, password: password };
        setEmailError('')
        setPasswordError('')

        try {
            let data = await baseAxios(METHOD_HTTP.POST, "/login", values);
            localStorage.setItem("token", data.token);
            console.log("values", values);
            navigate("/home");
        } catch (e) {
            alert(e.message);
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
                    <label className="inputLabel" htmlFor="username">Email</label>
                    <input 
                        type="text"
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
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


