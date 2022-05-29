import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css"

const personal = "https://zhazhda.biz/wp-content/uploads/2016/05/LICHNOE-DELO-SOTRUDNIKA.png";
const work = "https://i.pinimg.com/736x/33/0e/aa/330eaa9d22826aff3d47fbcec09cc24f.jpg";
const study = "https://cdn-icons-png.flaticon.com/512/747/747086.png";
const relax = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ0ls2O8ioFLbSsv07ATJZG7xz1be3KsNpxw&usqp=CAU";
const redcross = "https://www.kindpng.com/picc/m/4-47511_red-cross-red-circle-and-cross-clipart-free.png";

const imgStyle = {
  width: 25, 
  height: 25, 
  borderRadius: 25,
}

const linkStyle = {
  textDecoration: "none", 
  color: "black"
}

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Personal />} />
          <Route path="work" element={<Work />} />
          <Route path="study" element={<Study />} />
          <Route path="relax" element={<Relax />} />
        </Route>
      </Routes>
  );
}

function Layout() {
  return (
    <div>
        <Container>
          <Row>
              <nav className="col-sm-4">
              {/* <Col sm={4}> */}
                <h1>Категории</h1>
                <ul>
                  <li>
                    <img src={personal} style={imgStyle} />
                    <Link to="/" style={linkStyle}>Личные</Link>
                  </li>
                  <li>
                    <img src={work} style={imgStyle} />
                    <Link to="/work" style={linkStyle}>Работа</Link>
                  </li>
                  <li>
                    <img src={study} style={imgStyle} />
                    <Link to="/study" style={linkStyle}>Учеба</Link>
                  </li>
                  <li>
                    <img src={relax} style={imgStyle} />
                    <Link to="/relax" style={linkStyle}>Отдых</Link>
                  </li>
                </ul>
                {/* </ Col> */}
              </nav>
              <Outlet />
          </Row>
        </Container>
    </div>
  );
}

function Personal() {
  return (
    <div className="col-sm-8">
        <h1>Личные</h1>
        <ToDo />
    </div>
  );
}

function Work() {
  return (
    <div className="col-sm-8">
      <h1>Рабочие</h1>
      <ToDo />
    </div>
  );
}

function Study() {
  return (
    <div className="col-sm-8">
      <h1>Учебные</h1>
      <ToDo />
    </div>
  );
}

function Relax() {
  return (
    <div className="col-sm-8">
      <h1>Отдых</h1>
      <ToDo />
    </div>
  );
}

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <img src={redcross} className="redcross" onClick={() => removeTodo(index)} />
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function ToDo() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
