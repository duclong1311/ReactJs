import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Edit } from "./components/Edit";
import { Add } from "./components/Add";
import { List } from "./components/List";

function App() {
  return (
    <>
      <Routes>
        <Route path="home" element={<Home />} >
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="list" element={<List />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
