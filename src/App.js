import './App.css';
import DisplayProducts from "./CRUD/Display";
import Create from "./CRUD/Create";
import Update from "./CRUD/Update";
import {Route, Routes} from "react-router-dom";
import View from "./CRUD/View";

function App() {
    return (
        <>
            <Routes>
                <Route>
                    <Route path={"/"} element={<DisplayProducts></DisplayProducts>}></Route>
                    <Route path={"/Create"} element={<Create></Create>}></Route>
                    <Route path={"/Update/:id"} element={<Update></Update>}></Route>
                    <Route path={"/View/:id"} element={<View></View>}></Route>
                  </Route>
            </Routes>
        </>
);
}

export default App;
