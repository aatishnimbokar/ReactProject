import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import EntryPage from "./components/EntryPage";
import ListPage from "./components/ListPage";

function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          backgroundColor: "whitesmoke",
        }}>
        <Link
          to='/'
          style={{
            textDecoration: "none",
            // fontSize: "20px",
            // fontWeight: "500",
            // padding: "10px",
          }}>
          {" "}
          <p style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "500",
            padding: "4px",
            margin: "15px",
            color:"white",
            backgroundColor: "black",
            borderRadius: "5px",
          }}>Home</p>
        </Link>
        <Link
          to='Entrypage'
          style={{
            textDecoration: "none",
            // fontSize: "20px",
            // fontWeight: "500",
            // padding: "10px",
          }}>
          {" "}
          <p style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "500",
            padding: "4px",
            margin: "15px",
            color:"white",
            backgroundColor: "black",
            borderRadius: "5px",
          }}>Entry Page</p>
        </Link>
        <Link
          to='ListPage'
          style={{
            textDecoration: "none",
            // fontSize: "20px",
            // fontWeight: "500",
            // padding: "2px",
            // margin: "5px",
            // backgroundColor: "black",
            // borderRadius: "5px",
          }}
          >
          {" "}
          <p  style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "500",
            padding: "4px",
            margin: "15px",
            color:"white",
            backgroundColor: "black",
            borderRadius: "5px",
          }}>List Page</p>
        </Link>
      </div>

      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='Entrypage' index element={<EntryPage />} />
        <Route path='ListPage' index element={<ListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
