import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";

function Home() {
  useEffect(() => {}, []);
  const Name = useSelector((state) => state.counter.Name);
  const Adress = useSelector((state) => state.counter.Adress);
  const Mobile = useSelector((state) => state.counter.Mobile);
  const Description = useSelector((state) => state.counter.Description);
  //console.log(count)
  return (
    <div style={{ position: "relative" }}>
      <img
        src='https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80'
        alt='home'
        style={{
          width: "99vw",
          margin: "auto",
          height: "100vh",
          filter: "brightness(50%)",
        }}
      />

      {!Name ? (
        <p
          style={{
            position: "absolute",
            top: 0,
            color: "white",
            textAlign: "center",
            width: "100%",
            fontSize: "40px",
            fontWeight: "800",
          }}>
          Please Enter your details to show it here
          <br />
          <Link
            to='/Entrypage'
            style={{ position: "absolute", top: "40", width: "50%" }}>
            <Button
              variant='contained'
              style={{
                margin: " 100px auto ",
                position: "absolute",
                top: "40",
              }}>
              Go to Entry Page
            </Button>
          </Link>
        </p>
      ) : (
        <Card>
          <div
            style={{
              background: "white",
              position: "absolute",
              top: 100,
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: "45%",
              marginLeft: "25px",
              transform: "translateY(-50%,-50%)",
            }}>
            <p style={{ fontSize: "30px", fontWeight: "500" }}>Name:{Name}</p>
            <p style={{ fontSize: "30px", fontWeight: "500" }}>
              Adress:{Adress}
            </p>
            <p style={{ fontSize: "30px", fontWeight: "500" }}>
              Mobile:{Mobile}
            </p>
            <p style={{ fontSize: "30px", fontWeight: "500" }}>
              Description:{Description}
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}

export default Home;
