import { useParams } from "react-router-dom"

export function Edit() {
    const { id } = useParams();
    return (
        <>
            <h1>Đây là trang Edit {id}</h1>
        </>
    )
}