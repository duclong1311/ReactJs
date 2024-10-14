import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

export function List() {
    const [list, setList] = useState([]);
    const { state } = useLocation();
    console.log(state);

    const navigate = useNavigate();

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/students/${id}`)
            .then(() => alert("Xóa thành công"))
            .catch((error) => {console.log("Error", error)});
    }

    const handleEdit = (id) => {
        navigate(`/home/edit/${id}`);
    }

    const renderTableBody = () => {
        return list.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.action}</td>
                <td>{item.score}</td>
                <td><button onClick={() => handleEdit(item.id)}>Edit</button></td>
                <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
        ));
    };

    useEffect(() => {
        const getData = () => {
            axios.get("http://localhost:3000/students")
                .then((res) => { setList(res.data) })
                .catch((error) => console.error("Failed to fetch data:", error));
        };
        getData();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <h1>Đây là List</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Action</td>
                        <td>Score</td>
                        <td colSpan={2}>Edit/Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {renderTableBody()}
                </tbody>
            </table>
        </>
    )
}