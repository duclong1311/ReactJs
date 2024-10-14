import axios from "axios";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import * as Yup from "yup";

export function Edit() {
    const { id } = useParams();
    let [oldStudent, setOldStudent] = useState({});
    const navigate = useNavigate();
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

    const edit = (data) => {
        axios.put(`http://localhost:3000/students/${id}`, data)
            .then(() => navigate("/home/list"))
            .catch((error) => console.log("Error", error));
        console.log("new Data", data);
    };

    const getStudentData = () => {
        axios.get(`http://localhost:3000/students/${id}`)
            .then((res) => {
                const { data } = res;
                setOldStudent(data);
                console.log("old Data", res.data);
            })
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
                <button type="submit">Sửa</button>
            </Form>
        )
    }

    useEffect(() => {
        getStudentData();
    }, []);

    return (
        <>
            <h1>Sửa thông tin học sinh có id: {id}</h1>
            <Formik
                initialValues={oldStudent}
                validationSchema={StudentSchema}
                onSubmit={(values) => edit(values)}
                enableReinitialize={true}
            >
                {renderForm}
            </Formik>
        </>
    )
}