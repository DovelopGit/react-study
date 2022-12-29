import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import bgImg from "./img/logo.png";
import subList from "./list.js";
import PgDetail from "./component/detail.js";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  let [pockList] = useState(subList);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Pokemon</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/">Home</Link>
            <Link to="/event">Event</Link>
            <Link to="/event">My Pokemon</Link> */}
            <Nav.Link onClick={() => {navigate("/"); }}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate("/detail"); }}>   </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + bgImg + ")" }}
              ></div>
              <div className="container">
                <div className="row">
                  {pockList.map(function (itm, idx) {
                    return <CmpSubList itm={itm}></CmpSubList>;
                  })}
                </div>
              </div>
            </div>
          }
        />
        <Route path="/detail" element={<PgDetail />} />
        <Route path="/about" element={<div>어바웃 페이지</div>} />
        <Route path="*" element={<div>없는 페이지 입니다</div>} />
      </Routes>
    </div>
  );
}

function CmpSubList(props) {
  let imgSrc = "/img/img" + props.itm.id + ".png";
  return (
    <div className="col-md-4">
      {/* <img className="lst-img" src={imgSrc} /> */}
      <img className="lst-img" src={"/img/img" + props.itm.id + ".png"} />
      <h4>{props.itm.title}</h4>
      <h4>{props.itm.content}</h4>
    </div>
  );
}

function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
