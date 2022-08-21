import "./App.css";
import {
  HashRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

const Learning = () => {
  return (
    <>
      <p>
        <a href="https://hackmd.io/VqEGaLa7TAW41hKsWZp4kA" target="_blank">
          Day13 React Router link
        </a>
        <br />
        <br />
        <a href="https://hackmd.io/2PcaYppLQlCmx7eldhTJ1w" target="_blank">
          Day14 React Router link
        </a>
        <br />
        <br />
        <a href="https://hackmd.io/F3UphiNUQx6XP5nXxhCOEQ" target="_blank">
          Day15 React Router link
        </a>
      </p>
    </>
  );
};

const Todo = () => {
  const navigate = useNavigate();
  const Logout = () => {
    return (
      <button type="button" onClick={() => navigate("/login")}>
        登出
      </button>
    );
  };

  return (
    <>
      <p>這是 Todo 頁面 </p>
      <Logout />
    </>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const NotFound = () => {
  return <h1>sorry 找不到網頁</h1>;
};

const Post = () => {
  return (
    <>
      <p style={{ fontWeight: "bold" }}>Post 頁面</p>
      <Link to="1234">看第1234篇文章</Link>
      <br />
      <Link to="45678">看第45678篇文章</Link>
      <Outlet />
    </>
  );
};
const PostDetail = () => {
  let params = useParams();

  return <p>PostID : {params.postId}</p>;
};

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
          <NavLink to="/post">
            <p>Post 詳細頁面</p>
          </NavLink>
          <NavLink to="/learning">
            <p>每日任務 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="todo" element={<Todo />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="post" element={<Post />}>
              <Route path=":postId" element={<PostDetail />} />
            </Route>
            <Route path="learning" element={<Learning />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
