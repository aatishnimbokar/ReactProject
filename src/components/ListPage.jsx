import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function ListPage() {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        <div>
        <div style={{textAlign:"center",fontWeight:800,fontSize:"25px"}}>
            Demo List Page
        </div>

        <Box sx={{ flexGrow: 1,marginTop:"15px",width:"90%",margin:" 10px auto" }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>Demo Content1</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Demo Content2</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Demo Content3</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>Demo Content4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>Demo Content1</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Demo Content2</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Demo Content3</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>Demo Content4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>Demo Content1</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Demo Content2</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Demo Content3</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Demo Content4</Item>
        </Grid>
      </Grid>
    </Box>
        <p>Demo content</p>
        </div>
    )
}

export default ListPage
