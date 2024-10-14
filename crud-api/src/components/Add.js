import { useLocation, useNavigate } from "react-router-dom";
import { Field, Formik, Form, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

export function Add() {
    const navigate = useNavigate();

    const { state } = useLocation();
    console.log(state);

    const StudentSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too short')
            .max(70, 'Too long')
            .required('Required')
        ,
        description: Yup.string()
            .required('Required')
        ,
        action: Yup.string()
            .required('Required')
        ,
        score: Yup.number()
            .required('Required')
            .min(0, 'Invalid score')
            .max(10, 'Invalid score')
    });

    const add = (values) => {
        axios.post("http://localhost:3000/students", values)
            .then(() => {
                navigate('/home/list', { state: { message: "Add Success" } });
            })
            .catch((error) => console.log("Fail to add data", error));
    };

    const renderForm = () => {
        return (
            <Form>
                <Field name={"name"} placeholder={"Trần Văn A"} type={"text"} />
                <span style={{ color: 'red' }}><ErrorMessage name={"name"} /></span><br />
                <Field name={"description"} placeholder={"Mô tả về học sinh"} type={"text"} />
                <span style={{ color: 'red' }}><ErrorMessage name={"description"} /></span><br />
                <Field name={"action"} placeholder={"Xem xét"} type={"text"} />
                <span style={{ color: 'red' }}><ErrorMessage name={"action"} /></span><br />
                <Field name={"score"} placeholder={"10, 9, 8,..."} type={"number"} />
                <span style={{ color: 'red' }}><ErrorMessage name={"score"} /></span><br />
                <button type="submit">Add</button>
            </Form>
        )
    }

    return (
        <>
            <h1>Đây là trang Add</h1>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    action: '',
                    score: '',
                }}
                validationSchema={StudentSchema}
                onSubmit={add}
            >
                {renderForm}
            </Formik>
        </>
    )
}