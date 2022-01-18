import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Container, Grid, Typography } from '@mui/material';

const background = "https://html.rovadex.com/html-informex/assets/img/bg-effect-counter.svg"
const bg = "https://html.rovadex.com/html-informex/assets/img/bg-team-about.svg"


const Gallery = () => {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            title: 'Bed',
            author: 'swabdesign',
        },
        {
            img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Books',
            author: 'Pavel Nekoran',
        },
        {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
            title: 'Sink',
            author: 'Charles Deluvio',
        },
        {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchen',
            author: 'Christ Mackie',
        },
        {
            img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
            title: 'Blinds',
            author: 'Darren Richerd',
        },
        {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
            title: 'Chairs',
            author: 'Taylor Simpson',
        },
        {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop',
            author: 'Ben Kolde',
        },
        // {
        //     img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        //     title: 'Doors',
        //     author: 'Philipp Berndt',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        //     title: 'Coffee',
        //     author: 'Jen P.',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        //     title: 'Storage',
        //     author: 'Douglas Sheppard',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        //     title: 'Candle',
        //     author: 'Fi Bell',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        //     title: 'Coffee table',
        //     author: 'Hutomo Abrianto',
        // },
    ];
    return (
        <div style={{ backgroundSize: "contain", backgroundColor: "rgba(83, 204, 93, 0.1)", p: 5 }}>
            <Typography variant='h4' component="div" sx={{ fontWeight: 700, fontSize: "1.5 rem", pt: 5 }} className='teamAfter'>
                Our Gallery
            </Typography>
            <Container sx={{ width: "100%", p: 2, mx: "auto" }}>
                <ImageList variant="masonry" cols={3} gap={6}>

                    {itemData.map((item) => (

                        <ImageListItem key={item.img} sx={{ boxShadow: " rgba(0, 0, 0, 0.2) 0px 2px 4px;", m: "7px  5px" }}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar position="below" title={item.author} sx={{ backgroundColor: "white", }} />
                        </ImageListItem>


                    ))}


                </ImageList>
            </Container>
        </div>
    );
};

export default Gallery;

