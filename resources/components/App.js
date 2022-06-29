import * as React from "react";
import ReactDOM from "react-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
//import "./App.css";

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import EditProduct from "./product/edit.component";
import ProductList from "./product/list.component";
import CreateProduct from "./product/create.component";

function App() {
  return (
  <Router>
    <Navbar bg="primary">
      <Container>
        <Link to={"/"} className="navbar-brand text-white">
          React Crud
        </Link>
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/product/create" element={<CreateProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route exact path='/' element={<ProductList />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>);
}

ReactDOM.render(<App />, document.getElementById('app'))