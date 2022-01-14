import { Button, Divider, Grid, Typography } from '@mui/material';
import { fontSize } from '@mui/system';
import React from 'react';

const SingleCourse = ({ course }) => {
    const { id, name, date, payment } = course;
    return (
        <Grid item xs={12} md={6}  >
            <Grid container style={{ display: "flex", padding: "2em", borderRadius: "5px", backgroundColor: "white", textAlign: "left", boxShadow: "0 0 0 0.4px 4px 30px rgb(0 0 0 / 8%)" }}>
                <Grid item xs={12} md={6} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, borderRight: "1px solid lightnpm startgray" }}>
                    <Typography variant='h6' component='div' sx={{
                        fontWeight: 600,
                        fontSize: "2em"
                    }}>
                        {name}
                    </Typography>
                    <Typography variant='p' component='div' sx={{ fontSize: "1.2em", color: "#225374" }}>
                        {date}
                    </Typography>
                </Grid>

                <Grid xs={12} md={6} style={{
                    margin: "0 20px", display: "flex", flexDirection: "column", justifyContent: "space-between"
                    , flex: 1
                }}>
                    <Typography variant='p' component='div' sx={{ flex: 1 }}>
                        <span style={{ color: "aquamarine", fontSize: "3em", fontWeight: 700 }}>${payment}</span> <span style={{ color: "#aaa", fontSize: "1.2em", fontWeight: 700 }}>/month</span>
                    </Typography>
                    <Button variant='outlined' sx={{ flex: 1, px: 2 }}>BUY NOW</Button>

                </Grid>
            </Grid>

        </Grid>
    );
};

export default SingleCourse;