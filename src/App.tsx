import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {Other} from "./pages/Other";
import {Users} from "./pages/Users";
import {Todos} from "./pages/Todos";
import './app.scss'
import {User} from "./pages/User";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Other />}/>
                    <Route path="todos" element={<Todos />}/>
                    <Route path="users" element={<Users />}/>
                    <Route path="users/:id" element={<User />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
