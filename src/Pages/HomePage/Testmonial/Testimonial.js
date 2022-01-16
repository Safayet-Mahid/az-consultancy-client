import React from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

// import "./../Header/Headers.css";
import "./Testimonial.css"


// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box, width } from '@mui/system';

// install Swiper modules
SwiperCore.use([Pagination]);

const Testimonial = () => {

    const pagination = {
        "clickable": true,
        "renderBullet": function (index, className) {
            return '<span class=\"' + className + '\">' + (index + 1) + '</span>';
        }
    }

    const clients = [
        {
            name: "Samson Peters",
            clientsType: "Regular Client",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rerum ipsum consequatur sequi voluptas aliquid, qui veritatis ducimus tempore suscipit? ",
            id: 0,
            image: "https://html.rovadex.com/html-informex/assets/img/testimonials-1.jpg"
        },
        {
            name: "Jessica Messie",
            clientsType: "Regular Client",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rerum ipsum consequatur sequi voluptas aliquid, qui veritatis ducimus tempore suscipit? ",
            id: 1,
            image: "https://html.rovadex.com/html-informex/assets/img/testimonials-2.jpg"
        },
        {
            name: "Samson Peters",
            clientsType: "Regular Client",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rerum ipsum consequatur sequi voluptas aliquid, qui veritatis ducimus tempore suscipit? ",
            id: 2,
            image: "https://html.rovadex.com/html-informex/assets/img/testimonials-3.jpg"
        },
    ]

    return (
        <Swiper pagination={pagination} className="mySwiper " >

            <Grid container spacing={2}>

                {
                    clients.map(client => <Grid item xs={12} md={4}
                        key={client.id}
                    >

                        <SwiperSlide >

                            <div className='testimonial'>
                                <img src={client.image} alt="" />
                                <Typography variant='p' component='div' sx={{ color: "#5a5a5a" }}>{client.description}</Typography>
                                <Typography variant='h5' component='div' sx={{ fontWeight: "600", my: 1 }}>{client.name}</Typography>
                                <Typography variant='h6' component='div' sx={{ fontSize: ".85em", color: "#15151599" }}>{client.clientsType}</Typography>
                            </div>



                        </SwiperSlide>

                    </Grid>
                    )}
            </Grid>
        </Swiper>
    );
};

export default Testimonial;