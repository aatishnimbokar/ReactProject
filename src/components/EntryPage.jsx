import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import { useDispatch } from "react-redux";
import { incrementByAmount } from "../features/counter/counterSlice";
import { useNavigate } from "react-router-dom";

function EntryPage() {
  const [Name, setName] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();


  const [Adress, setAdress] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Description, setDescription] = useState("");
  const [NameError,setNameError]=useState(false)
  const Upload = () => {
      if (NameError) {alert("Please fill all details appropriately");return}
    //alert("Uploaded");
    dispatch(incrementByAmount({ Name, Adress, Mobile, Description }));
    navigate("/")
};
  return (
    <div>
      <Box
        component='form'
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete='off'>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "whitesmoke",
            width: "80vw",
            height: "50vh",
            margin: "auto",
            padding: "2vw",
          }}>
          <TextField
            id='outlined-basic'
            error={NameError}
            label={`${NameError ? "Name Must be more than 4 characters" : "Name"}`}
            onChange={(e) => setName(e.target.value)}
            onBlur={()=>{if(Name.length<4){setNameError(true)}else{setNameError(false)}}}
            variant='outlined'
            style={{ marginTop: "10px", width: "50%", margin: " 10px auto " }}
          />
          <TextField
            onChange={(e) => setMobile(e.target.value)}
            id='outlined-number'
            label='MobileNumber'
            type='number'
            style={{ marginTop: "10px", width: "50%", margin: " 10px auto " }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            onChange={(e) => setAdress(e.target.value)}
            id='filled-basic'
            label='Adress'
            variant='outlined'
            style={{ marginTop: "10px", width: "50%", margin: " 10px auto " }}
          />
          <TextField
            onChange={(e) => setDescription(e.target.value)}
            id='standard-basic'
            label='Description'
            variant='standard'
            style={{ marginTop: "10px", width: "50%", margin: " 10px auto " }}
          />
          <Button
            onClick={() => Upload()}
            variant='contained'
            style={{ marginTop: "10px", width: "50%", margin: " 10px auto " }}>
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default EntryPage;
