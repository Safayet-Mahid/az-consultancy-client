import React from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

import "./Headers.css";


// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box, width } from '@mui/system';

// install Swiper modules
SwiperCore.use([Pagination]);

const Header = () => {
    const pagination = {
        "clickable": true,
        "renderBullet": function (index, className) {
            return '<span class=\"' + className + '\">' + (index + 1) + '</span>';
        }
    }

    return (


        <Swiper pagination={pagination} className="mySwiper custom">
            <SwiperSlide >
                <Container sx={{ textAlign: "left" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img style={{ height: "400px" }} src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg" alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ px: 2 }} >
                            <Box className='textbody'>
                                <div>
                                    <Typography variant='small' sx={{
                                        backgroundColor: "#23033C", color: "white", p: ".5em 1.5em", borderRadius: ".35em",
                                        fontSize: "small",
                                        fontWeight: 600,
                                        letterSpacing: ".125em",

                                    }}>CONFERENCE</Typography>
                                </div>

                                <Typography variant='h3' sx={{ mt: 1, mb: 3, fontWeight: 800 }}>Lorem ipsum dolor sit amet.</Typography>
                                <div><Button variant='contained'>Learn More</Button></div>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </SwiperSlide>
            <SwiperSlide >
                <Container sx={{ textAlign: "left" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img style={{ height: "400px" }} src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ px: 2 }} >
                            <Box className='textbody'>
                                <div>
                                    <Typography variant='small' sx={{
                                        backgroundColor: "#23033C", color: "white", p: ".5em 1.5em", borderRadius: ".35em",
                                        fontSize: "small",
                                        fontWeight: 600,
                                        letterSpacing: ".125em",

                                    }}>CONFERENCE</Typography>
                                </div>

                                <Typography variant='h3' sx={{ mt: 1, mb: 3, fontWeight: 800 }}>Lorem ipsum dolor sit amet.</Typography>
                                <div><Button variant='contained'>Learn More</Button></div>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </SwiperSlide>
            <SwiperSlide >
                <Container sx={{ textAlign: "left" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img style={{ height: "400px" }} src="https://st.depositphotos.com/1006706/2671/i/600/depositphotos_26715369-stock-photo-which-way-to-choose-3d.jpg" alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ px: 2 }} >
                            <Box className='textbody'>
                                <div>
                                    <Typography variant='small' sx={{
                                        backgroundColor: "#23033C", color: "white", p: ".5em 1.5em", borderRadius: ".35em",
                                        fontSize: "small",
                                        fontWeight: 600,
                                        letterSpacing: ".125em",

                                    }}>CONFERENCE</Typography>
                                </div>

                                <Typography variant='h3' sx={{ mt: 1, mb: 3, fontWeight: 800 }}>Lorem ipsum dolor sit amet.</Typography>
                                <div><Button variant='contained'>Learn More</Button></div>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </SwiperSlide>


        </Swiper>

    );
};

export default Header;