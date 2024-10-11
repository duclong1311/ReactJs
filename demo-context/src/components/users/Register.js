import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import baseAxios, { METHOD_HTTP } from '../../configs/baseAxios';

export function Register() {

    const navigate = useNavigate();

    const validation = Yup.object({
        email: Yup.string()
            .email("Email không hợp lệ")
            .required("Vui lòng nhập Email"),
        password: Yup.string()
            .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
            .required("Vui lòng nhập mật khẩu")
    });

    const handleSubmit = async (values) => {
        console.log("Form Values: ", values);  // Kiểm tra giá trị form
        try {
            let data = await baseAxios(METHOD_HTTP.POST, "/register", values);
            navigate("/login");
            console.log("Data", data);
        } catch (e) {
            alert(e.message);
        }
    }

    const onClickButton = () => {
        navigate("/login")
    }

    const renderForm = ({ errors, touched }) => {
        return (
            <>
                <Form>
                    <div className="titleContaier">
                        <div>Đăng ký tài khoản</div>
                    </div>
                    <br />

                    <div>
                        <label className='inputLabel' htmlFor='email'>Email</label>
                        <Field
                            className='inputBox'
                            type='text'
                            name='email'
                            id='email'
                        />
                        {errors.email && touched.email && (
                            <div className='error'>{errors.email}</div>
                        )}
                    </div>

                    <div>
                        <label className='inputLabel' htmlFor='password'>Password</label>
                        <Field
                            className='inputBox'
                            type='password'
                            name='password'
                            id='password'
                        />
                        {errors.password && touched.password && (
                            <div className='error'>{errors.password}</div>
                        )}
                    </div>

                    <div>
                        <input type='submit' value='Đăng ký' />
                        <Link to={"/login"}>Đã có tài khoản?</Link>
                    </div>
                </Form>
            </>
        )
    }

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={validation}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => renderForm({ errors, touched })}
            </Formik>
        </>
    )
}