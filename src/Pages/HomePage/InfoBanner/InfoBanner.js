import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './InfoBanner.css'

const background = "https://html.rovadex.com/html-informex/assets/img/bg-effect-counter.svg"

const InfoBanner = () => {
    return (
        <div className='main-div' sx={{ p: "auto" }}>
            <div style={{ backgroundImage: `url(${background})`, height: "300px" }} className="ocean"
            >

            </div>

            <Container sx={{
                display: "flex", justifyContent: "space-around", alignItems: "center", position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                zIndex: "5", color: "white"
            }}>
                <Box sx={{ p: 4, flex: 1, borderRight: "1px solid gray", }}>
                    <Typography variant='h4' sx={{ fontSize: "3rem", fontWeight: 700 }}>28</Typography>
                    <Typography variant='h6' className='infoAfter'>SPEAKERS</Typography>
                </Box>
                <Box sx={{ flex: 1, p: 4, borderRight: "1px solid gray" }}>
                    <Typography variant='h4' sx={{ fontSize: "3rem", fontWeight: 700 }}>3K</Typography>
                    <Typography variant='h6' className='infoAfter'>HAPPY CUSTOMERS</Typography>
                </Box>
                <Box sx={{ flex: 1, p: 4, borderRight: "1px solid gray" }}>
                    <Typography variant='h4' sx={{ fontSize: "3rem", fontWeight: 700 }}>650</Typography>
                    <Typography variant='h6' className='infoAfter'>PLACES</Typography>
                </Box>
                <Box sx={{ p: 4, flex: 1, }}>
                    <Typography variant='h4' sx={{ fontSize: "3rem", fontWeight: 700 }}>350</Typography>
                    <Typography variant='h6' className='infoAfter'>PODCASTS</Typography>
                </Box>
            </Container >


        </div >

    );
};

export default InfoBanner;