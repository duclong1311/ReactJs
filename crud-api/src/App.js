import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Edit } from "./components/Edit";
import { Add } from "./components/Add";
import { List } from "./components/List";

function App() {
  return (
    <>
      <Routes>
        <Route path="home" element={<Home />} >
          <Route path="list" element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
