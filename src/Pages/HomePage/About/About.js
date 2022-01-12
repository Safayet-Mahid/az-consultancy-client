import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import "./About.css"
import { fontSize } from '@mui/system';

const About = () => {
    const bg = "https://html.rovadex.com/html-informex/assets/img/bg-team-about.svg"
    return (
        <div style={{ backgroundImage: `url( ${bg})`, backgroundColor: "rgba(83, 204, 93, 0.1)" }}>
            <Container sx={{
                flexGrow: 1,
                py: 5
            }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
                        <Typography variant="h3" gutterBottom component="div" sx={{ fontWeight: 600 }} className='aboutAfter'>
                            About Us
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 600, my: 3 }}>
                            Exchange of experience, live cases and ideas from leading industry representatives.
                        </Typography>
                        <Typography variant="p" gutterBottom component="div" sx={{ fontSize: "1.25em", color: "#5a5a5a" }}>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            <br />
                            <br />

                            Mus mauris vitae ultricies leo integer malesuada nunc vel. Eget aliquet nibh praesent tristique magna sit amet purus.
                        </Typography>
                        <Typography variant="p" gutterBottom component="div" sx={{ my: 2, fontWeight: 600, color: "#225374", letterSpacing: ".055em", fontSize: "1.15em" }}>
                            <span style={{ marginRight: "10px" }}> <i class="fa fas fa-phone "></i>
                                017-58-028-857</span>   <span> <i class="fas fa fa-envelope-square"></i>
                                safayetmahid96@gmail.com</span>
                        </Typography>
                        <Box >
                            <span><i class="fa fas fa-facebook socialIcon"></i>
                            </span>
                            <span><i class="fa fas fa-instagram socialIcon"></i>
                            </span>
                            <span><i class="fa fas fa-youtube socialIcon"></i>
                            </span>
                            <span><i class="fa fas fa-twitter socialIcon"></i>
                            </span>
                        </Box>


                    </Grid>
                    <Grid item xs={12} md={6} >
                        <img style={{ width: "100%" }} src='https://thebestonlinebusinessguide.com/wp-content/uploads/2020/07/Office-Meetings0.png' alt=''></img>

                    </Grid>
                </Grid>
                <hr />
                <Grid container spacing={2} sx={{ my: 2 }}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: "flex" }}>
                            <Typography variant="h2" gutterBottom component="div" sx={{ fontWeight: 700, color: "lightgreen", fontSize: "6em" }}>01</Typography>
                            <Typography variant="h6" gutterBottom component="div" sx={{ textAlign: "left", mx: 3, fontWeight: 600 }}>Help to Professionals of Different Levels</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: "flex" }}>
                            <Typography variant="h2" gutterBottom component="div" sx={{ fontWeight: 700, color: "lightgreen", fontSize: "6em" }}>02</Typography>
                            <Typography variant="h6" gutterBottom component="div" sx={{ textAlign: "left", mx: 3, fontWeight: 600 }}>Development of System Skills</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: "flex" }}>
                            <Typography variant="h2" gutterBottom component="div" sx={{ fontWeight: 700, color: "lightgreen", fontSize: "6em" }}>03</Typography>
                            <Typography variant="h6" gutterBottom component="div" sx={{ textAlign: "left", mx: 3, fontWeight: 600 }}>Wonderful Team for Your Development</Typography>
                        </Box>
                    </Grid>

                </Grid>

            </Container>
        </div>
    );
};

export default About;