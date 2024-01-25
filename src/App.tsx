// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store/";
import { increment, decrement } from "./store/counterSlice";
import Button from "@mui/material/Button";
import Layout from "./components/layout";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Customers from "./components/Customers";
import Cards from "./components/Cards";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <h1>Material-UI with Redux Toolkit and Router</h1>
          <p>Counter: {counter}</p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(increment())}
          >
            Increment
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </Button> */}
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav> */}
        </header>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/products"
            element={
              <Layout>
                <Products />
              </Layout>
            }
          />{" "}
          <Route
            path="/orders"
            element={
              <Layout>
                <Orders />
              </Layout>
            }
          />{" "}
          <Route
            path="/customers"
            element={
              <Layout>
                <Customers />
              </Layout>
            }
          />{" "}
          <Route
            path="/cards"
            element={
              <Layout>
                <Cards />
              </Layout>
            }
          />
          {/* <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
