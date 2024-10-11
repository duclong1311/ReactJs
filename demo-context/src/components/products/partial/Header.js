import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <h1>Header</h1>
            <Link to={"/add"}>Add</Link>
            <Link to={"/home"}>Trang chủ</Link>
            <hr/>
        </>
    )
}