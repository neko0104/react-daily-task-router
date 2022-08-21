import './App.css';
import {
  HashRouter,
  NavLink,
  Outlet,
  Route,Routes,
} from 'react-router-dom';

const Todo = () => {
  return <p>這是 Todo 頁面 
  </p>;
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const NotFound = ()=>{
  return <h1>sorry 找不到網頁</h1>
}


function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        <a href="https://hackmd.io/VqEGaLa7TAW41hKsWZp4kA">範例 link</a>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<Outlet/>}>
          <Route path="todo" element={<Todo/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;

