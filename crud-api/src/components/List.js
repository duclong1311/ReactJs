import { useEffect, useState } from "react"

export function List() {
    const [list, setList] = useState([]);

    const getData = () => {

    };

    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <h1>Đây là List</h1>
        </>
    )
}