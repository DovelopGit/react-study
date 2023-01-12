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
          <Navbar.Brand href="/">Pokemon</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/">Home</Link>
            <Link to="/event">Event</Link>
            <Link to="/event">My Pokemon</Link> */}
            <Nav.Link onClick={() => {navigate("#home"); }}>Home</Nav.Link>
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
                    return <CmpSubList itm={itm} navigate={navigate}></CmpSubList>;
                  })}
                </div>
              </div>
            </div>
          }
        />
        <Route path="/detail/:id" element={<PgDetail pockList={pockList} />} />
        {/* <Route path="/about" element={<div>어바웃..</div>} />
        <Route path="/about/company" element={<div>회사 : 포켓몬</div>} />
        <Route path="/about/member" element={<div>한지우, 이슬</div>} /> */}
{/*Nested Routes*/}
        <Route path="/about" element={ <About/> } >  
          <Route path="company" element={ <div>회사 : 포켓몬</div> } />
          <Route path="member" element={ <div>한지우, 이슬</div> } />
        </Route>
        <Route path="/event" element={ <Event/> } >  
          <Route path="one" element={ <div>색이 다른 뮤츠가 등장합니다!</div> } />
          <Route path="two" element={ <div>필드에 옷을 입은 포켓몬이 등장합니다!</div> } />
        </Route>
        <Route path="*" element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}



function CmpSubList(props) {
  let imgSrc = "/img/img" + props.itm.id + ".png";
  return (
    <div className="col-md-4" onClick={() => {props.navigate("detail/"+ props.itm.id ); }}>
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
      <h4>about?</h4>
      <Outlet></Outlet>
    </div>
  )
}


function Event(){
  return (
    <div>
      <h4>오늘의 이벤트 입니다.</h4>
      <Outlet></Outlet>
    </div>
  )
}
export default App;
