import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function Add() {
    const [name, setName] = useState('');
    const [score, setScore] = useState('');
    const navigate = useNavigate();
    // const add = () => {
        
    // }

    return (
        <>
           <h1>Đây là trang Add</h1>
           <button>Thêm mới</button>
        </>
    )
}