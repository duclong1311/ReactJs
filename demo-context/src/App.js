import { Route, Router, Routes } from "react-router-dom";
import { Main } from "./components/products/partial/Main";
import { List } from "./components/products/components/List";
import { Add } from "./components/products/components/Add";
import { Edit } from "./components/products/components/Edit";
import { Register } from "./components/users/Register";
import { Login } from './components/users/Login';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main />} path="">
          <Route element={<List />} path="home" />
          <Route element={<Add />} path="add" />
          <Route element={<Edit />} path="edit/:id" />
        </Route>

        <Route element={<Register />} path="register" />
        <Route element={<Login />} path="login" />
      </Routes>
    </>
  );
}

export default App;
